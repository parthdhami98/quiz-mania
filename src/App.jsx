import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import { ROUTES } from './constants';

// Lazy load page components for code splitting
const CategorySelection = lazy(() => import('./pages/CategorySelection'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const ScorePage = lazy(() => import('./pages/ScorePage'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-2xl">
      <span className="text-primary">QUIZ</span>
      <span className="text-primary font-bold">Mania</span>
      <div className="text-base text-gray-600 mt-2">Loading...</div>
    </div>
  </div>
);

function App() {
  return (
    <QuizProvider>
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path={ROUTES.HOME} element={<CategorySelection />} />
            <Route path={ROUTES.QUIZ} element={<QuizPage />} />
            <Route path={ROUTES.SCORE} element={<ScorePage />} />
            {/* Catch-all: redirect unknown routes to home */}
            <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
          </Routes>
        </Suspense>
      </Router>
    </QuizProvider>
  );
}

export default App;
