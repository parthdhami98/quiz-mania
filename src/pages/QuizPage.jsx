import { useState, useEffect, useCallback, memo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Radio } from 'antd';
import { useQuiz } from '../context/QuizContext';
import { ROUTES } from '../constants';
import Timer from '../components/Timer';

const QuizPage = memo(() => {
  const navigate = useNavigate();
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    submitAnswer,
    nextQuestion,
    quizCompleted,
    selectedCategory,
  } = useQuiz();

  const [selectedAnswer, setSelectedAnswer] = useState('');
  const prevQuestionIndexRef = useRef(currentQuestionIndex);

  // Redirect if no category selected
  useEffect(() => {
    if (!selectedCategory) {
      navigate(ROUTES.HOME);
    }
  }, [selectedCategory, navigate]);

  // Redirect to score page when quiz is completed
  useEffect(() => {
    if (quizCompleted) {
      navigate(ROUTES.SCORE);
    }
  }, [quizCompleted, navigate]);

  // Reset selected answer only when question index actually changes
  useEffect(() => {
    if (prevQuestionIndexRef.current !== currentQuestionIndex) {
      setSelectedAnswer('');
      prevQuestionIndexRef.current = currentQuestionIndex;
    }
  }, [currentQuestionIndex]);

  const handleTimeUp = useCallback(() => {
    nextQuestion();
  }, [nextQuestion]);

  const handleNext = useCallback(() => {
    if (selectedAnswer && currentQuestion) {
      submitAnswer(currentQuestion.id, selectedAnswer);
    }
    nextQuestion();
  }, [selectedAnswer, currentQuestion, submitAnswer, nextQuestion]);

  const handleSkip = useCallback(() => {
    nextQuestion();
  }, [nextQuestion]);

  const handleExit = useCallback(() => {
    if (window.confirm('Are you sure you want to exit the quiz? Your progress will be lost.')) {
      navigate(ROUTES.HOME);
    }
  }, [navigate]);

  const handleAnswerChange = useCallback((value) => {
    setSelectedAnswer(value);
  }, []);

  if (!currentQuestion) {
    return null;
  }

  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl">
          <span className="text-primary">QUIZ</span>
          <span className="text-primary font-bold">Mania</span>
        </h1>
        <button
          onClick={handleExit}
          className="px-4 sm:px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-pink-50 transition-colors font-medium text-sm sm:text-base"
          aria-label="Exit the quiz"
        >
          Exit Quiz
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress and Timer */}
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                <span className="text-primary">{currentQuestionIndex + 1}</span>
                <span className="text-gray-400"> /{totalQuestions}</span>
              </h2>
            </div>
            <Timer
              key={currentQuestionIndex}
              duration={currentQuestion.timeLimit}
              onTimeUp={handleTimeUp}
            />
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-2 rounded-full mb-6 sm:mb-8" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">
              {currentQuestionIndex + 1}. {currentQuestion.question}
            </h3>

            {/* Options */}
            <Radio.Group
              value={selectedAnswer}
              onChange={(e) => handleAnswerChange(e.target.value)}
              className="w-full"
            >
              <div className="space-y-3 sm:space-y-4">
                {currentQuestion.options.map((option, index) => {
                  const optionLetter = option.charAt(0);
                  const optionText = option.substring(3); // Remove "A. " prefix

                  return (
                    <div
                      key={index}
                      className={`w-full px-3 py-2 sm:py-2.5 border rounded-lg cursor-pointer transition-all ${
                        selectedAnswer === optionLetter
                          ? 'border-primary border-2'
                          : 'border-gray-300 hover:border-primary'
                      }`}
                      onClick={() => handleAnswerChange(optionLetter)}
                      role="option"
                      aria-selected={selectedAnswer === optionLetter}
                    >
                      <Radio value={optionLetter} className="w-full">
                        <span className="text-gray-700 text-sm sm:text-base">{optionText}</span>
                      </Radio>
                    </div>
                  );
                })}
              </div>
            </Radio.Group>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <button
              onClick={handleNext}
              className="px-6 sm:px-8 py-3 bg-primary text-white rounded-lg hover:bg-pink-700 transition-colors font-medium text-base order-1 sm:order-none"
              aria-label="Go to next question"
            >
              Next
            </button>
            <button
              onClick={handleSkip}
              className="text-gray-600 hover:text-gray-800 font-medium text-sm sm:text-base order-2 sm:order-none py-2"
              aria-label="Skip this question"
            >
              Skip this question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

QuizPage.displayName = 'QuizPage';

export default QuizPage;
