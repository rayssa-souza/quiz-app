import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import { QuizContext, actionCreators } from '../../contexts/quiz-context';
import { TfiExchangeVertical } from 'react-icons/tfi';
import { getQuestions } from '../../services/quiz-service';
import PageLayout from '../../components/page-layout';
import Loading from '../../components/loading/loading';
import FormQuestions from './partials/form-questions';
import Feedback from './partials/form-questions/feedback';
import ApiError from '../../components/api-error';
import './style.scss';
import ResultsPage from './partials/results';

const QuizPage = () => {
  const { state, dispatch } = useContext(QuizContext);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showQuizResults, setShowQuizResults] = useState(false);
  const navigate = useNavigate();

  if (!state.selectedCategory) {
    return <Navigate to="/" />;
  }

  const categoryId = state.selectedCategory.id;
  const selectedDifficulty = state.selectedDifficulty;

  async function getDataQuestions() {
    try {
      dispatch(actionCreators.setLoading(true));
      const response = await getQuestions({
        categoryId: categoryId,
        difficulty: selectedDifficulty
      });
      dispatch(actionCreators.setQuestions(response));
      dispatch(actionCreators.setLoading(false));
    } catch (err) {
      dispatch(actionCreators.setError(true));
      dispatch(actionCreators.setLoading(false));
    }
  }
  useEffect(() => {
    getDataQuestions();
  }, []);

  const handleAnswer = (selectedAnswer) => {
    setAnswer(selectedAnswer);
    scorePoints(selectedAnswer);
    setTimeout(() => {
      const nextIndex = index + 1;
      if (nextIndex < state.questions.length) {
        setIndex(index + 1);
      }
      if (nextIndex === state.questions.length) {
        setShowQuizResults(true);
      }
      setAnswer(null);
    }, 2000);
  };

  const scorePoints = (answerSelected) => {
    if (answerSelected !== null) {
      if (state.questions[index].correct_answer === answerSelected) {
        setScore(score + 1);
      }
    }
  };
  const resetScore = () => {
    setShowQuizResults(false);
    setScore(0);
    getDataQuestions();
    setIndex(0);
  };

  const changeDifficulty = () => {
    navigate(`/${categoryId}/select-difficulty`);
  };

  const changeSubject = () => {
    navigate(`/`);
  };

  return (
    <div>
      <PageLayout>
        <div className="quiz-page">
          {state.loading && <Loading />}
          {!state.loading && state.questions.length === 0 && (
            <p className="quiz-page-error">
              <span className="quiz-page-icon-redirect">
                <TfiExchangeVertical onClick={() => navigate(`/${categoryId}/select-difficulty`)} />
              </span>
              Humm...We couldn't find any questions, please try to change the difficulty level.
            </p>
          )}

          {!state.loading && state.questions.length > 0 && !showQuizResults && !answer && (
            <FormQuestions
              questionNumber={index + 1}
              answers={state.questions[index].answers}
              question={state.questions[index].question}
              handleAnswer={handleAnswer}
              key={'1'}
            />
          )}
          {answer && (
            <Feedback
              selectedAnswer={answer}
              correctAnswer={state.questions[index].correct_answer}
              type={state.questions[index].type}
            />
          )}
          {showQuizResults && (
            <ResultsPage
              score={score}
              resetScore={resetScore}
              changeDifficulty={changeDifficulty}
              changeSubject={changeSubject}
            />
          )}

          {state.error && <ApiError />}
        </div>
      </PageLayout>
    </div>
  );
};
export default QuizPage;
