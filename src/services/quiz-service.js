import instance from './http';
import addIconToSubjectResponse from '../utils/add-icon-to-subject-topic';
import addAnswers from '../utils/add-answers';

export const getSubjects = async () => {
  try {
    const response = await instance.get('/api_category.php');
    return addIconToSubjectResponse(response.trivia_categories);
  } catch (err) {
    throw new Error(err);
  }
};

export const getQuestions = async ({ amount = 10, categoryId, difficulty }) => {
  const response = await instance.get(
    `/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}`
  );
  return addAnswers(response.results);
};
