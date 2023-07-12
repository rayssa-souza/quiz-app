import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageLayout from '../../components/page-layout';
import { QuizContext, actionCreators } from '../../contexts/quiz-context';
import { AiOutlineHome } from 'react-icons/ai';

import Button from '../../components/button';
import './style.scss';

const DifficultyPage = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const idNumber = parseInt(subjectId);

  useEffect(() => {
    const selectId = state.categories.find((item) => item.id === idNumber);

    dispatch(actionCreators.setSelectedCategories(selectId));
  }, []);

  const handleClick = (difficulty) => {
    dispatch(actionCreators.setSelectedDifficulty(difficulty));
    navigate(`/${state.selectedCategory.id}/quiz`);
  };

  return (
    <div>
      <PageLayout>
        <div className="difficulty-page">
          {state.selectedCategory ? (
            <div className="difficulty-page-category">
              <span className="difficulty-page-span">{state.selectedCategory.name}</span>
              <div className="difficulty-page-icon">{state.selectedCategory.icon}</div>
              <span className="difficult-page-span-level">Choose a level</span>

              <Button text="Easy" onClick={() => handleClick('easy')} />
              <Button text="Medium" onClick={() => handleClick('medium')} />
              <Button text="Hard" onClick={() => handleClick('hard')} />
            </div>
          ) : (
            <div className="difficulty-page-refresh">
              <div className="difficulty-page-refresh-icon">
                <AiOutlineHome onClick={() => navigate('/')} />
              </div>
              <div className="difficulty-page-refresh-text">
                <p>Volte para a página inicial</p>
              </div>
            </div>
          )}
        </div>
      </PageLayout>
    </div>
  );
};
export default DifficultyPage;
