export const QUIZ_CONFIG = {
    TIMER_DURATION: 10,
    TIMER_WARNING_THRESHOLD: 3,
};

export const SCORE_THRESHOLDS = {
    EXCELLENT: 80,
    GOOD: 60,
};

export const PERFORMANCE_MESSAGES = {
    EXCELLENT: {
        title: 'Great job!',
        message: 'Excellent performance! You have mastered this topic.',
        emoji: '🎉',
    },
    GOOD: {
        title: 'Well done!',
        message: 'Good work! You have a solid understanding.',
        emoji: '👏',
    },
    NEEDS_PRACTICE: {
        title: 'Keep practicing!',
        message: "Don't give up! Review the material and try again.",
        emoji: '💪',
    },
};

export const ROUTES = {
    HOME: '/',
    QUIZ: '/quiz',
    SCORE: '/score',
};
