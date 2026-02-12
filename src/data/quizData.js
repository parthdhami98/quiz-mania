export const quizData = {
    categories: [
        {
            id: "js_basics",
            name: "Javascript Basic",
            questions: [
                {
                    id: "q1",
                    question: "What is the correct syntax for referring to an external script called 'script.js'?",
                    options: [
                        "A. <script name='script.js'>",
                        "B. <script href='script.js'>",
                        "C. <script src='script.js'>",
                        "D. <script file='script.js'>"
                    ],
                    correctAnswer: "C",
                    timeLimit: 10
                },
                {
                    id: "q2",
                    question: "Which company developed JavaScript?",
                    options: [
                        "A. Microsoft",
                        "B. Netscape",
                        "C. Google",
                        "D. Mozilla"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: "q3",
                    question: "Which method can be used to round a number to the nearest integer in JavaScript?",
                    options: [
                        "A. Math.ceil()",
                        "B. Math.floor()",
                        "C. Math.round()",
                        "D. Math.random()"
                    ],
                    correctAnswer: "C",
                    timeLimit: 10
                },
                {
                    id: "q4",
                    question: "What does 'DOM' stand for?",
                    options: [
                        "A. Document Object Model",
                        "B. Data Object Model",
                        "C. Document Oriented Model",
                        "D. Digital Object Management"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "q5",
                    question: "Which symbol is used for single line comments in JavaScript?",
                    options: [
                        "A. /* */",
                        "B. //",
                        "C. #",
                        "D. <!-- -->"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: "q6",
                    question: "What will 'typeof null' return?",
                    options: [
                        "A. 'null'",
                        "B. 'undefined'",
                        "C. 'object'",
                        "D. 'number'"
                    ],
                    correctAnswer: "C",
                    timeLimit: 10
                },
                {
                    id: "q7",
                    question: "Which keyword is used to declare a constant in JavaScript?",
                    options: [
                        "A. var",
                        "B. let",
                        "C. const",
                        "D. constant"
                    ],
                    correctAnswer: "C",
                    timeLimit: 10
                },
                {
                    id: "q8",
                    question: "What is the output of '2' + 2?",
                    options: [
                        "A. 4",
                        "B. 22",
                        "C. '22'",
                        "D. Error"
                    ],
                    correctAnswer: "C",
                    timeLimit: 10
                },
                {
                    id: "q9",
                    question: "Which method is used to add elements to the end of an array?",
                    options: [
                        "A. push()",
                        "B. pop()",
                        "C. shift()",
                        "D. unshift()"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "q10",
                    question: "What does the 'this' keyword refer to?",
                    options: [
                        "A. The current function",
                        "B. The current object",
                        "C. The global object",
                        "D. The parent object"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                }
            ]
        },
        {
            id: "react_basics",
            name: "React.js Advance",
            questions: [
                {
                    id: "r1",
                    question: "What is the purpose of React Hooks?",
                    options: [
                        "A. To style components",
                        "B. To use state and lifecycle features in functional components",
                        "C. To manage routing",
                        "D. To connect to APIs"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: "r2",
                    question: "Which hook is used for side effects in React?",
                    options: [
                        "A. useState",
                        "B. useEffect",
                        "C. useContext",
                        "D. useReducer"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: "r3",
                    question: "What is JSX?",
                    options: [
                        "A. A JavaScript framework",
                        "B. A syntax extension for JavaScript",
                        "C. A CSS preprocessor",
                        "D. A database query language"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: "r4",
                    question: "What is the Virtual DOM?",
                    options: [
                        "A. A copy of the real DOM kept in memory",
                        "B. A new version of HTML",
                        "C. A React component",
                        "D. A CSS framework"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "r5",
                    question: "Which method is called when a component is first rendered?",
                    options: [
                        "A. componentDidUpdate",
                        "B. componentWillUnmount",
                        "C. componentDidMount",
                        "D. shouldComponentUpdate"
                    ],
                    correctAnswer: "C",
                    timeLimit: 10
                },
                {
                    id: "r6",
                    question: "What is prop drilling?",
                    options: [
                        "A. Passing props through multiple levels of components",
                        "B. Creating new props",
                        "C. Deleting unused props",
                        "D. Validating props"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "r7",
                    question: "Which hook would you use for expensive calculations?",
                    options: [
                        "A. useState",
                        "B. useEffect",
                        "C. useMemo",
                        "D. useCallback"
                    ],
                    correctAnswer: "C",
                    timeLimit: 10
                },
                {
                    id: "r8",
                    question: "What does 'lifting state up' mean in React?",
                    options: [
                        "A. Moving state to a parent component",
                        "B. Increasing state value",
                        "C. Creating new state",
                        "D. Deleting state"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "r9",
                    question: "What is the purpose of keys in React lists?",
                    options: [
                        "A. To style list items",
                        "B. To help React identify which items have changed",
                        "C. To sort the list",
                        "D. To filter the list"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: "r10",
                    question: "What is React.memo used for?",
                    options: [
                        "A. Storing data",
                        "B. Preventing unnecessary re-renders",
                        "C. Managing state",
                        "D. Handling events"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                }
            ]
        },
        {
            id: "angular_basics",
            name: "Angular Basic",
            questions: [
                {
                    id: "a1",
                    question: "What is Angular CLI?",
                    options: [
                        "A. A code editor",
                        "B. A command-line interface for Angular",
                        "C. A testing framework",
                        "D. A CSS library"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: "a2",
                    question: "What are Angular directives?",
                    options: [
                        "A. Functions that manipulate DOM",
                        "B. CSS classes",
                        "C. HTTP methods",
                        "D. Database queries"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "a3",
                    question: "What is dependency injection in Angular?",
                    options: [
                        "A. A design pattern for managing dependencies",
                        "B. A way to style components",
                        "C. A routing mechanism",
                        "D. A state management tool"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "a4",
                    question: "What is the purpose of ngModel?",
                    options: [
                        "A. To create models",
                        "B. Two-way data binding",
                        "C. To style inputs",
                        "D. To validate forms"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: "a5",
                    question: "What are Angular modules?",
                    options: [
                        "A. Containers for organizing related code",
                        "B. CSS files",
                        "C. Database tables",
                        "D. API endpoints"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "a6",
                    question: "What is the default change detection strategy?",
                    options: [
                        "A. OnPush",
                        "B. Default",
                        "C. Manual",
                        "D. Automatic"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: "a7",
                    question: "What is RxJS?",
                    options: [
                        "A. A library for reactive programming",
                        "B. A CSS framework",
                        "C. A database",
                        "D. A testing tool"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "a8",
                    question: "What is the purpose of Angular services?",
                    options: [
                        "A. To share data and logic across components",
                        "B. To style components",
                        "C. To create routes",
                        "D. To validate forms"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "a9",
                    question: "What does *ngIf do?",
                    options: [
                        "A. Conditionally includes/excludes elements",
                        "B. Loops through arrays",
                        "C. Styles elements",
                        "D. Binds data"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "a10",
                    question: "What is Angular Router?",
                    options: [
                        "A. A navigation tool for single-page applications",
                        "B. A state management library",
                        "C. A CSS framework",
                        "D. A testing framework"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                }
            ]
        },
        {
            id: "flutter_basics",
            name: "Flutter",
            questions: [
                {
                    id: "f1",
                    question: "What language is Flutter based on?",
                    options: [
                        "A. JavaScript",
                        "B. Dart",
                        "C. Python",
                        "D. Java"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: "f2",
                    question: "What is a Widget in Flutter?",
                    options: [
                        "A. A database",
                        "B. The basic building block of UI",
                        "C. A programming language",
                        "D. A testing tool"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: "f3",
                    question: "What is the difference between StatelessWidget and StatefulWidget?",
                    options: [
                        "A. StatelessWidget cannot change, StatefulWidget can",
                        "B. They are the same",
                        "C. StatelessWidget is faster",
                        "D. StatefulWidget cannot have children"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "f4",
                    question: "What is Hot Reload in Flutter?",
                    options: [
                        "A. Restarting the app",
                        "B. Quickly seeing changes without losing state",
                        "C. Debugging tool",
                        "D. Performance optimizer"
                    ],
                    correctAnswer: "B",
                    timeLimit: 10
                },
                {
                    id: "f5",
                    question: "What is Scaffold in Flutter?",
                    options: [
                        "A. A widget that provides basic material design layout",
                        "B. A database",
                        "C. A testing framework",
                        "D. A state management tool"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "f6",
                    question: "What is the purpose of pubspec.yaml?",
                    options: [
                        "A. To manage dependencies and assets",
                        "B. To write code",
                        "C. To test the app",
                        "D. To debug"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "f7",
                    question: "What is MaterialApp?",
                    options: [
                        "A. A widget that wraps material design widgets",
                        "B. A database",
                        "C. A programming language",
                        "D. A testing tool"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "f8",
                    question: "What is the purpose of setState()?",
                    options: [
                        "A. To update the UI when state changes",
                        "B. To create new widgets",
                        "C. To delete widgets",
                        "D. To style widgets"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "f9",
                    question: "What is BuildContext?",
                    options: [
                        "A. A handle to the location of a widget in the widget tree",
                        "B. A database context",
                        "C. A styling tool",
                        "D. A testing framework"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                },
                {
                    id: "f10",
                    question: "What is the purpose of Navigator in Flutter?",
                    options: [
                        "A. To manage routes and navigation",
                        "B. To style widgets",
                        "C. To manage state",
                        "D. To handle HTTP requests"
                    ],
                    correctAnswer: "A",
                    timeLimit: 10
                }
            ]
        }
    ]
};
