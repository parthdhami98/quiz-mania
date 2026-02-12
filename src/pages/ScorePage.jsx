import { memo, useMemo, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { SCORE_THRESHOLDS, ROUTES } from '../constants';

const ScorePage = memo(() => {
  const navigate = useNavigate();
  const { 
    userName, 
    calculateScore,
    quizCompleted,
    retakeQuiz 
  } = useQuiz();

  const score = useMemo(() => calculateScore(), [calculateScore]);
  const isGoodScore = score.percentage >= SCORE_THRESHOLDS.GOOD;

  useEffect(() => {
    if (!quizCompleted) {
      navigate(ROUTES.HOME);
    }
  }, [quizCompleted, navigate]);

  const handleRetake = useCallback(() => {
    retakeQuiz();
    navigate(ROUTES.QUIZ);
  }, [retakeQuiz, navigate]);

  const userInitials = userName ? userName.charAt(0).toUpperCase() : 'U';

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
        <h1 className="text-xl sm:text-2xl">
          <span className="text-primary">QUIZ</span>
          <span className="text-primary font-bold">Mania</span>
        </h1>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-lg">
            {userInitials}
          </div>
          <span className="hidden sm:block text-gray-800 font-medium">{userName}</span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full max-w-xl text-center">
          <div className="flex justify-center mb-6">
            {isGoodScore ? (
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ) : (
              <svg className="w-20 h-20 sm:w-24 sm:h-24 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>

          {isGoodScore ? (
            <>
              <h2 className="text-2xl sm:text-3xl font-light tracking-widest text-gray-800 mb-4">
                C O N G R A T U L A T I O N
              </h2>
              <p className="text-gray-700 mb-8">You successfully completed the Quiz and holds</p>
            </>
          ) : (
            <>
              <p className="text-gray-700 mb-2">You successfully completed the Quiz but you need to</p>
              <h2 className="text-2xl sm:text-3xl font-light tracking-widest text-gray-800 mb-8">
                K E E P<br />P R A C T I C I N G !
              </h2>
            </>
          )}

          {isGoodScore ? (
            <>
              <p className="text-gray-700 text-lg mb-2">Your Score</p>
              <div className="text-6xl sm:text-7xl font-bold text-green-600 mb-4">
                {score.percentage}%
              </div>
              <p className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">Great job!</p>
            </>
          ) : (
            <div className="flex justify-center mb-8">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-primary flex flex-col items-center justify-center">
                <p className="text-gray-700 text-base mb-2">Your Score</p>
                <div className="text-5xl sm:text-6xl font-bold text-yellow-600">
                  {score.percentage}%
                </div>
              </div>
            </div>
          )}

          <div className="bg-background border border-gray-300 rounded-lg p-6 mb-6 inline-block">
            <p className="text-gray-800 font-medium mb-3">Out of {score.total} question</p>
            <div className="flex items-center justify-center gap-6 text-sm sm:text-base">
              <span className="text-green-600 font-semibold">{score.correct} Correct</span>
              <span className="text-red-600 font-semibold">{score.incorrect} Incorrect</span>
              <span className="text-gray-500 font-semibold">{score.unanswered} Not answered</span>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleRetake}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-pink-50 transition-colors font-medium text-base"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

ScorePage.displayName = 'ScorePage';

export default ScorePage;
