import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Subjects = lazy(() => import('../pages/subjects'));
const Difficulty = lazy(() => import('../pages/difficulty'));
const Quiz = lazy(() => import('../pages/quiz'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<Subjects />} />
        <Route exact path="/:subjectId/select-difficulty" element={<Difficulty />} />
        <Route exact path="/:subjectId/quiz" element={<Quiz />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
