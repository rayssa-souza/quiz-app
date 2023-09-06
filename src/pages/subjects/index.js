import React, { useEffect, useContext } from 'react';
import { QuizContext, actionCreators } from '../../contexts/quiz-context';
import PageLayout from '../../components/page-layout';
import './style.scss';
import { getSubjects } from '../../services/quiz-service';
import SubjectTopic from './partials/subject-topic';
import Loading from '../../components/loading/loading';
import ApiError from '../../components/api-error';

const Subjects = () => {
  const { state, dispatch } = useContext(QuizContext);

  useEffect(() => {
    async function getData() {
      try {
        dispatch(actionCreators.setLoading(true));
        const response = await getSubjects();
        dispatch(actionCreators.setCategories(response));
        dispatch(actionCreators.setLoading(false));
      } catch (err) {
        dispatch(actionCreators.setError(true));
        dispatch(actionCreators.setLoading(false));
      }
    }
    getData();
  }, []);

  return (
    <div>
      <PageLayout>
        {state.loading && !state.error && <Loading />}
        {!state.loading && !state.error && (
          <div className="subjects-page">
            <h1>Hey, what subject you want to test your skills today?</h1>
            <div className="subjects-container">
              {state.categories.map((item) => (
                <SubjectTopic subject={item} key={item.id} />
              ))}
            </div>
          </div>
        )}
        {state.error && <ApiError />}
      </PageLayout>
    </div>
  );
};
export default Subjects;
