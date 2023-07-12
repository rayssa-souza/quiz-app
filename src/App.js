import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QuizProvider } from './contexts/quiz-context';

import Routes from './routes';

import './assets/styles/reset.scss';
import './assets/styles/global.scss';

const App = () => {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </QuizProvider>
  );
};

export default App;
