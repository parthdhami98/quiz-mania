import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { quizData } from '../data/quizData';

const QuizContext = createContext();

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within QuizProvider');
  }
  return context;
};

export const QuizProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentCategory = useMemo(
    () => selectedCategory 
      ? quizData.categories.find(cat => cat.id === selectedCategory)
      : null,
    [selectedCategory]
  );

  const currentQuestion = useMemo(
    () => currentCategory?.questions[currentQuestionIndex],
    [currentCategory, currentQuestionIndex]
  );

  const totalQuestions = useMemo(
    () => currentCategory?.questions.length || 0,
    [currentCategory]
  );

  const selectCategory = useCallback((categoryId, name) => {
    setSelectedCategory(categoryId);
    setUserName(name);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setQuizCompleted(false);
  }, []);

  const submitAnswer = useCallback((questionId, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  }, []);

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex + 1 >= totalQuestions) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  }, [currentQuestionIndex, totalQuestions]);

  const skipQuestion = useCallback(() => {
    nextQuestion();
  }, [nextQuestion]);

  const calculateScore = useCallback(() => {
    if (!currentCategory) return { correct: 0, incorrect: 0, unanswered: 0, total: 0, percentage: 0 };

    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    currentCategory.questions.forEach(question => {
      const userAnswer = userAnswers[question.id];
      if (!userAnswer) {
        unanswered++;
      } else if (userAnswer === question.correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const total = currentCategory.questions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

    return { correct, incorrect, unanswered, total, percentage };
  }, [currentCategory, userAnswers]);

  const resetQuiz = useCallback(() => {
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setQuizCompleted(false);
    setUserName('');
  }, []);

  const retakeQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setQuizCompleted(false);
  }, []);

  const value = useMemo(() => ({
    userName,
    selectedCategory,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    userAnswers,
    quizCompleted,
    quizData,
    selectCategory,
    submitAnswer,
    nextQuestion,
    skipQuestion,
    calculateScore,
    resetQuiz,
    retakeQuiz,
  }), [
    userName,
    selectedCategory,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    userAnswers,
    quizCompleted,
    selectCategory,
    submitAnswer,
    nextQuestion,
    skipQuestion,
    calculateScore,
    resetQuiz,
    retakeQuiz,
  ]);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
