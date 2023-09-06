import React, { createContext, useReducer } from 'react';

export const actionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_QUESTIONS: 'SET_QUESTIONS',
  SET_SELECTED_CATEGORIES: 'SET_SELECTED_CATEGORIES',
  SET_SELECTED_DIFFICULTY: 'SET_SELECTED_DIFFICULTY'
};

export const actionCreators = {
  setLoading: (payload) => ({ type: actionTypes.SET_LOADING, payload }),
  setError: (payload) => ({ type: actionTypes.SET_ERROR, payload }),
  setCategories: (payload) => ({ type: actionTypes.SET_CATEGORIES, payload }),
  setQuestions: (payload) => ({ type: actionTypes.SET_QUESTIONS, payload }),
  setSelectedCategories: (payload) => ({ type: actionTypes.SET_SELECTED_CATEGORIES, payload }),
  setSelectedDifficulty: (payload) => ({ type: actionTypes.SET_SELECTED_DIFFICULTY, payload })
};

export const intitialState = {
  loading: false,
  error: false,
  categories: [],
  questions: [],
  selectedCategory: null,
  selectedDifficulty: null
};

export default function reducer(state = intitialState, { type, payload }) {
  switch (type) {
    case actionTypes.SET_LOADING:
      return { ...state, loading: payload };

    case actionTypes.SET_ERROR:
      return { ...state, error: payload };
    case actionTypes.SET_CATEGORIES:
      return { ...state, categories: payload };
    case actionTypes.SET_QUESTIONS:
      return { ...state, questions: payload };
    case actionTypes.SET_SELECTED_CATEGORIES:
      return { ...state, selectedCategory: payload };
    case actionTypes.SET_SELECTED_DIFFICULTY:
      return { ...state, selectedDifficulty: payload };
    default:
      throw Error('Invalid action type');
  }
}
const QuizContext = createContext({});

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intitialState);
  const value = { state, dispatch };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export { QuizContext, QuizProvider };
