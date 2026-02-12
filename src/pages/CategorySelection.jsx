import { useState, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Radio, Modal } from 'antd';
import { useQuiz } from '../context/QuizContext';
import { ROUTES } from '../constants';

const CategorySelection = memo(() => {
  const navigate = useNavigate();
  const { selectCategory, quizData } = useQuiz();
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [name, setName] = useState('');
  const [showRules, setShowRules] = useState(false);

  const handleStartQuiz = useCallback(() => {
    if (selectedCategoryId && name.trim()) {
      selectCategory(selectedCategoryId, name);
      navigate(ROUTES.QUIZ);
    }
  }, [selectedCategoryId, name, selectCategory, navigate]);

  const handleCategoryChange = useCallback((categoryId) => {
    setSelectedCategoryId(categoryId);
  }, []);

  const handleOpenRules = useCallback(() => setShowRules(true), []);
  const handleCloseRules = useCallback(() => setShowRules(false), []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl">
          <span className="text-primary">QUIZ</span>
          <span className="text-primary font-bold">Mania</span>
        </h1>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 text-gray-800">
            Welcome to <span className="text-primary">QUIZ</span>
            <span className="text-primary font-bold">Mania</span>
          </h2>

          <div className="mb-6 sm:mb-8 bg-[#ebebe3] p-4 rounded-lg">
            <p className="text-sm sm:text-base text-gray-600 mb-2">
              Please read all the rules about this quiz before you start.
            </p>
            <button
              onClick={handleOpenRules}
              className="text-primary hover:underline font-medium text-sm sm:text-base text-left"
            >
              Quiz rules
            </button>
          </div>

          <div className="mb-5 sm:mb-6">
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              Full name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 sm:py-3 bg-background border border-gray-200 rounded-lg focus:outline-none focus:border-primary text-gray-700 text-base"
              aria-label="Enter your full name"
            />
          </div>

          <div className="mb-6 sm:mb-8">
            <label className="block text-gray-700 font-medium mb-3 text-sm sm:text-base">
              Please select topic to continue
            </label>
            <Radio.Group
              value={selectedCategoryId}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quizData.categories.map((category) => (
                  <div
                    key={category.id}
                    className={`px-3 py-2 sm:py-2.5 border rounded-lg cursor-pointer transition-all ${
                      selectedCategoryId === category.id
                        ? 'border-primary border-2'
                        : 'border-gray-300 hover:border-primary'
                    }`}
                    onClick={() => handleCategoryChange(category.id)}
                    role="option"
                    aria-selected={selectedCategoryId === category.id}
                  >
                    <Radio value={category.id} className="w-full">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">
                        {category.name}
                      </span>
                    </Radio>
                  </div>
                ))}
              </div>
            </Radio.Group>
          </div>

          <button
            onClick={handleStartQuiz}
            disabled={!selectedCategoryId || !name.trim()}
            className={`w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-medium text-white transition-all text-base ${
              selectedCategoryId && name.trim()
                ? 'bg-primary hover:bg-pink-700'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
            aria-label="Start the quiz"
          >
            Start Quiz
          </button>
        </div>
      </div>

      <Modal
        title={<span className="text-xl font-bold">Quiz Rules</span>}
        open={showRules}
        onCancel={handleCloseRules}
        footer={null}
        width={600}
      >
        <div className="space-y-4">
          <div>
            <div className="bg-[#f3f3e9] p-3 rounded-lg mb-2">
              <h4 className="font-semibold text-gray-800">10-Second Timer</h4>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Each question comes with a 10-second timer.</li>
              <li>If you don&apos;t answer within the time limit, the app will automatically move to the next question.</li>
            </ul>
          </div>

          <div>
            <div className="bg-[#f3f3e9] p-3 rounded-lg mb-2">
              <h4 className="font-semibold text-gray-800">Manual Navigation</h4>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>You can navigate to the next question manually before the timer expires.</li>
              <li>Use the &quot;Next&quot; button to move ahead if you&apos;re ready before the timer runs out.</li>
            </ul>
          </div>

          <div>
            <div className="bg-[#f3f3e9] p-3 rounded-lg mb-2">
              <h4 className="font-semibold text-gray-800">Final Score and Performance Message</h4>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>After all questions are answered, your final score will be displayed.</li>
              <li>Based on your performance, you will receive a personalized message:</li>
              <ul className="list-none ml-6 mt-2 space-y-1">
                <li>• Great job!: If you score <strong>above 80%</strong>.</li>
                <li>• Well done!: If you score <strong>between 60% and 80%</strong>.</li>
                <li>• Keep practicing!: If you score <strong>below 60%</strong>.</li>
              </ul>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handleCloseRules}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-pink-700 transition-colors font-medium"
          >
            Got it!
          </button>
        </div>
      </Modal>
    </div>
  );
});

CategorySelection.displayName = 'CategorySelection';

export default CategorySelection;
