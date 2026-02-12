# QuizMania

A responsive, timed quiz application built with React.js. Users can select a quiz category, answer timed questions, and receive instant performance feedback with detailed score breakdowns.

## Getting Started

```bash
# after cloning the repo
npm install
npm run dev
```

The app will start at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

## Problem Statement

Build a quiz application that allows users to:

- Enter their name and select a quiz category (JavaScript, React.js, Angular, Flutter)
- Answer 10 multiple-choice questions per category with a **10-second timer** per question
- Navigate manually using Next/Skip buttons, or auto-advance when the timer expires
- View a final score page with performance-based feedback (congratulation or practice encouragement)
- See a detailed breakdown of correct, incorrect, and unanswered questions
- Retake the quiz from the score screen

The design follows a provided Figma reference with a pink/magenta (#C13584) primary theme on a cream (#F5F1E8) background.

## Completed

- [x] **Category Selection Page** — Full name input, category radio selection, quiz rules modal
- [x] **Quiz Page** — Question display with 4 multiple-choice options, 10-second countdown timer per question, progress bar, Next/Skip/Exit controls
- [x] **Auto-Advance on Timer Expiry** — Automatically moves to next question when timer hits zero
- [x] **Score Page** — Performance-based UI (congratulation vs keep practicing), percentage score, correct/incorrect/unanswered breakdown, retake button
- [x] **Responsive Design** — Mobile-first layout with responsive breakpoints for tablet and desktop
- [x] **Performance Optimizations**
  - React.memo on all page components
  - useMemo/useCallback throughout context and components
  - Lazy loading with code splitting for all routes
  - Timer fix: single interval per question instead of interval recreation every second
  - Context optimization: local state for modal (prevents unnecessary re-renders of all consumers)
- [x] **Production Build Config** — Terser minification, console stripping, vendor chunk splitting, Tailwind CSS purge
- [x] **Error Boundary** — Global error boundary with branded fallback UI
- [x] **SEO** — Meta tags, Open Graph, Twitter cards, semantic HTML
- [x] **Accessibility** — ARIA labels, role attributes, proper label associations
- [x] **404 Handling** — Catch-all route redirects to home

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| React Router v6 | Client-side routing |
| Ant Design v6 | Radio button components & theming |
| Tailwind CSS v3 | Utility-first styling |
| Vite 7 | Build tool & dev server |

## Project Structure

```
src/
├── components/
│   ├── ErrorBoundary.jsx    # Global error boundary
│   └── Timer.jsx            # Countdown timer component
├── constants/
│   └── index.js             # Config constants (timer, thresholds, routes)
├── context/
│   └── QuizContext.jsx      # Central state management
├── data/
│   └── quizData.js          # Quiz questions & categories
├── pages/
│   ├── CategorySelection.jsx # Home/category selection page
│   ├── QuizPage.jsx          # Quiz question page
│   └── ScorePage.jsx         # Results/score page
├── App.jsx                   # Router setup & lazy loading
├── main.jsx                  # Entry point with providers
└── index.css                 # Tailwind directives & custom overrides
```
