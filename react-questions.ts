
export const reactMatrixQuestions = [
  {
    question: 'Which statement best describes one way data flow in React?',
    answers: [
      'Child components can mutate parent props directly',
      'Data flows from parent to child via props',
      'Data flows bidirectionally by default',
      'State automatically synchronizes across unrelated components',
    ],
    correctAnswer: 'Data flows from parent to child via props',
  },
  {
    question: 'Why should you avoid mutating React state objects or arrays directly?',
    answers: [
      'Because React does not allow objects in state',
      'Because mutation can prevent React from detecting changes and re-rendering correctly',
      'Because setState only accepts primitive values',
      'Because mutation always throws a runtime error',
    ],
    correctAnswer: 'Because mutation can prevent React from detecting changes and re-rendering correctly',
  },
  {
    question: 'What is the primary purpose of the key prop when rendering a list?',
    answers: [
      'To style list items',
      'To help React identify which items changed, were added, or removed',
      'To improve network performance',
      'To enable useEffect in list items',
    ],
    correctAnswer: 'To help React identify which items changed, were added, or removed',
  },
  {
    question: 'When does a cleanup function returned from useEffect run?',
    answers: [
      'Only when the component first mounts',
      'Before the effect runs again and when the component unmounts',
      'Only when state updates in any component',
      'Only after a browser repaint',
    ],
    correctAnswer: 'Before the effect runs again and when the component unmounts',
  },
  {
    question: 'Which is a valid example of following the Rules of Hooks?',
    answers: [
      'Calling useState inside a conditional block',
      'Calling useEffect inside a loop for each item',
      'Calling hooks at the top level of a function component',
      'Calling useContext inside a nested helper function',
    ],
    correctAnswer: 'Calling hooks at the top level of a function component',
  },
  {
    question: 'What is a common reason to lift state up?',
    answers: [
      'To avoid using props entirely',
      'To share state between sibling components via their closest common ancestor',
      'To make a component render only once',
      'To bypass React batching',
    ],
    correctAnswer: 'To share state between sibling components via their closest common ancestor',
  },
  {
    question: 'Which state update pattern is recommended when the next state depends on the previous state?',
    answers: ['setCount(count + 1)', 'setCount((prev) => prev + 1)', 'count = count + 1', 'this.setState({ count: this.state.count + 1 })'],
    correctAnswer: 'setCount((prev) => prev + 1)',
  },
  {
    question: 'What is a practical use case for React.lazy?',
    answers: [
      'Running side effects after render',
      'Splitting code to load a component on demand',
      'Creating a stable callback reference',
      'Avoiding dependency arrays in useEffect',
    ],
    correctAnswer: 'Splitting code to load a component on demand',
  },
  {
    question: 'Which tool is most directly used to inspect why a component re-rendered and how long it took?',
    answers: ['React DevTools Profiler', 'TypeScript compiler', 'npm audit', 'ESLint'],
    correctAnswer: 'React DevTools Profiler',
  },
  {
    question: 'Which useEffect dependency array is most appropriate to run an effect only once on mount, with cleanup on unmount?',
    answers: ['No dependency array', '[someValue]', '[]', '[setCount]'],
    correctAnswer: '[]',
  },
  {
    question: 'What is the main reason Context can cause unnecessary re-renders?',
    answers: [
      'Context values cannot be memoized',
      'Any consumer can re-render when the provider value changes by reference',
      'Context always triggers re-renders on every state update in the app',
      'Context does not support primitive values',
    ],
    correctAnswer: 'Any consumer can re-render when the provider value changes by reference',
  },
  {
    question: 'When is useReducer typically a better fit than useState?',
    answers: [
      'When you need to store a DOM node',
      'When state logic is complex and involves multiple related transitions',
      'When you need to fetch data from an API',
      'When you want to avoid re-renders entirely',
    ],
    correctAnswer: 'When state logic is complex and involves multiple related transitions',
  },
  {
    question: 'What is the key difference between useEffect and useLayoutEffect?',
    answers: [
      'useLayoutEffect runs synchronously after DOM mutations, before the browser paints',
      'useEffect runs before render and blocks painting',
      'useLayoutEffect can only run on the server',
      'useEffect cannot have a cleanup function',
    ],
    correctAnswer: 'useLayoutEffect runs synchronously after DOM mutations, before the browser paints',
  },
  {
    question: 'What is a correct use of useRef that should not trigger a re-render?',
    answers: [
      'Storing derived UI state that affects rendering',
      'Storing a mutable value like an interval ID across renders',
      'Storing data that must always re-render the component',
      'Replacing useState for form inputs',
    ],
    correctAnswer: 'Storing a mutable value like an interval ID across renders',
  },
  {
    question: 'Which statement about useMemo is correct?',
    answers: [
      'useMemo runs only once per component lifetime',
      'useMemo memoizes a computed value and recomputes when dependencies change',
      'useMemo memoizes a callback function',
      'useMemo replaces the need for React.memo',
    ],
    correctAnswer: 'useMemo memoizes a computed value and recomputes when dependencies change',
  },
  {
    question: 'Which is a good practice to reduce Context driven re-renders in larger apps?',
    answers: [
      'Put the entire app state into a single Context provider',
      'Split Contexts by concern and avoid frequently changing values in Context',
      'Use Context only for server state',
      'Avoid providers and use props only',
    ],
    correctAnswer: 'Split Contexts by concern and avoid frequently changing values in Context',
  },
  {
    question: 'What is the main benefit of normalized state?',
    answers: [
      'It guarantees fewer network requests',
      'It reduces duplication and makes updates to related entities easier and more consistent',
      'It prevents all race conditions',
      'It makes UI rendering always faster without trade-offs',
    ],
    correctAnswer: 'It reduces duplication and makes updates to related entities easier and more consistent',
  },
  {
    question: 'Which statement best aligns with Redux Toolkit usage at L2?',
    answers: [
      'Redux Toolkit is deprecated and should not be used',
      'Redux Toolkit provides modern Redux utilities to reduce boilerplate',
      'Redux Toolkit replaces the need for reducers',
      'Redux Toolkit is only for styling React components',
    ],
    correctAnswer: 'Redux Toolkit provides modern Redux utilities to reduce boilerplate',
  },
  {
    question: 'When does React.memo typically help the most?',
    answers: [
      'When a component always receives new props references every render',
      'When a component renders often with the same props and is expensive to render',
      'When you want to run side effects after render',
      'When you need to fetch data in a component',
    ],
    correctAnswer: 'When a component renders often with the same props and is expensive to render',
  },
  {
    question: 'Which scenario most strongly suggests list virtualization (react-window, react-virtualized)?',
    answers: [
      'A list with 20 items and simple markup',
      'A list with thousands of rows causing slow scrolling and long render times',
      'A modal dialog flickers on open',
      'A button click triggers two state updates',
    ],
    correctAnswer: 'A list with thousands of rows causing slow scrolling and long render times',
  },
  {
    question: 'In Next.js, what is a correct high level distinction between SSR and SSG?',
    answers: [
      'SSR generates HTML at request time, SSG generates HTML at build time',
      'SSR always runs in the browser, SSG always runs on the client',
      'SSR requires GraphQL, SSG requires REST',
      'There is no real difference between SSR and SSG',
    ],
    correctAnswer: 'SSR generates HTML at request time, SSG generates HTML at build time',
  },
  {
    question: 'What does the "use client" directive do in a Next.js App Router project with React Server Components?',
    answers: [
      'It forces the component to be rendered only on the server',
      'It marks a module as a Client Component so it can use client only features like hooks and event handlers',
      'It enables SSG for the route',
      'It disables TypeScript for the file',
    ],
    correctAnswer: 'It marks a module as a Client Component so it can use client only features like hooks and event handlers',
  },
  {
    question: 'What is a typical focus of React Testing Library compared to testing implementation details?',
    answers: [
      'Testing private component methods directly',
      'Testing behavior through the UI the user interacts with',
      'Testing React internals like Fiber',
      'Testing CSS compilation output',
    ],
    correctAnswer: 'Testing behavior through the UI the user interacts with',
  },
  {
    question: 'Which tool is generally recommended to simulate realistic user interactions in React Testing Library?',
    answers: ['userEvent', 'setTimeout', 'React.memo', 'ReactDOM.render'],
    correctAnswer: 'userEvent',
  },
  {
    question: 'What is a correct way to type React component props in TypeScript?',
    answers: [
      'By assigning types at runtime only',
      'By using a type or interface for the props and annotating the function parameter',
      'By using any for all props',
      'By avoiding props typing because React infers everything',
    ],
    correctAnswer: 'By using a type or interface for the props and annotating the function parameter',
  },
  {
    question: 'What is a correct approach to typing useState when the initial value is null but later becomes a string?',
    answers: [
      'const [value, setValue] = useState(null)',
      'const [value, setValue] = useState<string>(null)',
      'const [value, setValue] = useState<string | null>(null)',
      'const [value, setValue] = useState<any>(null)',
    ],
    correctAnswer: 'const [value, setValue] = useState<string | null>(null)',
  },
  {
    question: 'Which practice most directly improves accessibility for screen readers for images?',
    answers: [
      'Adding aria role="img" to every div',
      'Providing meaningful alt text for informative images',
      'Using more JavaScript event handlers',
      'Replacing all buttons with spans',
    ],
    correctAnswer: 'Providing meaningful alt text for informative images',
  },
  {
    question: 'What is a key requirement for keyboard navigation accessibility?',
    answers: [
      'All interactions must require a mouse',
      'All interactive elements must be reachable and usable with the keyboard',
      'Tab order should be random to prevent predictability',
      'Focus indicators should be removed for visual cleanliness',
    ],
    correctAnswer: 'All interactive elements must be reachable and usable with the keyboard',
  },
  {
    question: 'What is React default protection against XSS primarily based on?',
    answers: [
      'Automatically executing user provided HTML safely',
      'Escaping values when rendering into the DOM, unless you opt into dangerouslySetInnerHTML',
      'Storing tokens in localStorage by default',
      'Blocking all network requests from components',
    ],
    correctAnswer: 'Escaping values when rendering into the DOM, unless you opt into dangerouslySetInnerHTML',
  },
  {
    question: 'Why is storing sensitive authentication tokens in localStorage often discouraged?',
    answers: [
      'Because localStorage cannot store strings',
      'Because tokens in localStorage can be accessible to JavaScript in case of XSS',
      'Because localStorage is slower than cookies in all cases',
      'Because Next.js forbids localStorage usage',
    ],
    correctAnswer: 'Because tokens in localStorage can be accessible to JavaScript in case of XSS',
  },
  {
    question: 'What is a key difference between JSX and HTML?',
    answers: [
      'JSX is always interpreted by the browser without a build step',
      'JSX allows embedding JavaScript expressions inside markup',
      'JSX can only be used in class components',
      'JSX automatically prevents all runtime errors',
    ],
    correctAnswer: 'JSX allows embedding JavaScript expressions inside markup',
  },
  {
    question: 'What does event.preventDefault() typically do in a form submit handler?',
    answers: [
      'It prevents the component from re-rendering',
      'It stops the browser default action, like page reload on form submit',
      'It automatically validates all inputs',
      'It removes the event listener after the first submit',
    ],
    correctAnswer: 'It stops the browser default action, like page reload on form submit',
  },
  {
    question: 'What is the children prop commonly used for?',
    answers: [
      'To store component local state',
      'To pass nested UI into a reusable component for composition',
      'To replace useEffect dependency arrays',
      'To force a component to render only once',
    ],
    correctAnswer: 'To pass nested UI into a reusable component for composition',
  },
  {
    question: 'What is a typical reason to use useCallback?',
    answers: [
      'To memoize a computed value',
      'To memoize a function reference passed to memoized child components',
      'To run an effect before the DOM updates',
      'To replace Context in all apps',
    ],
    correctAnswer: 'To memoize a function reference passed to memoized child components',
  },
  {
    question: 'Which is a correct statement about custom hooks?',
    answers: [
      'Custom hooks can be called conditionally because they are user defined',
      'Custom hooks must start with use and follow the Rules of Hooks',
      'Custom hooks can only be used in class components',
      'Custom hooks automatically memoize all returned values',
    ],
    correctAnswer: 'Custom hooks must start with use and follow the Rules of Hooks',
  },
  {
    question: 'When using React.lazy, what is Suspense typically used for?',
    answers: [
      'To provide a fallback UI while a lazy component is loading',
      'To prevent all network requests in components',
      'To automatically memoize components',
      'To replace useEffect in data fetching',
    ],
    correctAnswer: 'To provide a fallback UI while a lazy component is loading',
  },
  {
    question: 'In Next.js, what does ISR primarily enable?',
    answers: [
      'Generating pages on every request only',
      'Updating a statically generated page after deployment using revalidation',
      'Disabling caching for all routes',
      'Running hooks inside Server Components',
    ],
    correctAnswer: 'Updating a statically generated page after deployment using revalidation',
  },
  {
    question: 'Which rendering approach primarily runs in the browser after loading JavaScript?',
    answers: ['SSR', 'SSG', 'CSR', 'ISR'],
    correctAnswer: 'CSR',
  },
  {
    question: 'What is the main purpose of using Jest or Vitest in a React project?',
    answers: [
      'To bundle the application for production',
      'To run and manage automated tests and assertions',
      'To generate CSS files from JSX',
      'To replace React DevTools Profiler',
    ],
    correctAnswer: 'To run and manage automated tests and assertions',
  },
  {
    question: 'When testing async UI (loading then data), what is a recommended approach in React Testing Library?',
    answers: [
      'Use setTimeout and fixed delays only',
      'Use findBy queries or waitFor to wait for UI updates',
      'Avoid testing async flows because they are flaky',
      'Call component internal functions directly',
    ],
    correctAnswer: 'Use findBy queries or waitFor to wait for UI updates',
  },
  {
    question: 'How can you type an onChange handler for an input in React with TypeScript?',
    answers: [
      'onChange: (e: any) => void',
      'onChange: (e: React.ChangeEvent<HTMLInputElement>) => void',
      'onChange: (e: string) => void',
      'onChange: (e: HTMLElement) => void',
    ],
    correctAnswer: 'onChange: (e: React.ChangeEvent<HTMLInputElement>) => void',
  },
  {
    question: 'What is a best practice for accessible form inputs?',
    answers: [
      'Use placeholder text instead of labels',
      'Associate a visible label with the input',
      'Remove all focus outlines for cleaner UI',
      'Use div elements instead of form controls',
    ],
    correctAnswer: 'Associate a visible label with the input',
  },
  {
    question: 'What is a common way to identify known vulnerabilities in your JavaScript dependencies?',
    answers: [
      'Disable TypeScript',
      'Run npm audit or a similar dependency vulnerability scanner',
      'Use React.memo on every component',
      'Store tokens in localStorage',
    ],
    correctAnswer: 'Run npm audit or a similar dependency vulnerability scanner',
  },
  {
    question: 'What does React reconciliation primarily do?',
    answers: [
      'Encrypts component props before rendering',
      'Diffs the virtual tree to decide minimal DOM updates',
      'Runs all effects before rendering',
      'Prevents any component from re-rendering',
    ],
    correctAnswer: 'Diffs the virtual tree to decide minimal DOM updates',
  },
  {
    question: 'What is React batching primarily used for?',
    answers: [
      'To run network requests in parallel',
      'To group multiple state updates into fewer renders',
      'To force synchronous rendering always',
      'To skip dependency arrays in effects',
    ],
    correctAnswer: 'To group multiple state updates into fewer renders',
  },
  {
    question: 'What is the main purpose of an Error Boundary?',
    answers: [
      'Catching errors in event handlers automatically',
      'Catching render errors in the component tree and showing fallback UI',
      'Preventing all runtime errors across the app',
      'Handling failed fetch calls inside useEffect only',
    ],
    correctAnswer: 'Catching render errors in the component tree and showing fallback UI',
  },
  {
    question: 'Which statement about Error Boundaries is correct?',
    answers: [
      'They catch errors inside async code automatically',
      'They catch errors during render, lifecycle, and constructors of children',
      'They replace the need for try catch everywhere',
      'They only work in Server Components',
    ],
    correctAnswer: 'They catch errors during render, lifecycle, and constructors of children',
  },
  {
    question: 'Which pattern best describes a compound component API?',
    answers: [
      'A component that renders only once',
      'A component group that shares state via context and exposes subcomponents',
      'A component that never accepts children',
      'A component that fetches data on the server only',
    ],
    correctAnswer: 'A component group that shares state via context and exposes subcomponents',
  },
  {
    question: 'What is a typical use case for render props?',
    answers: [
      'Sharing logic by passing a function child that returns UI',
      'Replacing TypeScript types at runtime',
      'Making all state global automatically',
      'Avoiding keys in lists',
    ],
    correctAnswer: 'Sharing logic by passing a function child that returns UI',
  },
  {
    question: 'What is a common pitfall of Higher Order Components (HOCs)?',
    answers: [
      'They cannot be composed',
      'They can make debugging harder due to wrapped display names',
      'They prevent re-rendering completely',
      'They only work with class components and are forbidden in function components',
    ],
    correctAnswer: 'They can make debugging harder due to wrapped display names',
  },
  {
    question: 'What best describes controlled vs uncontrolled inputs?',
    answers: [
      'Controlled inputs use refs, uncontrolled use state',
      'Controlled inputs are driven by React state, uncontrolled keep value in the DOM',
      'Controlled inputs can not be validated',
      'Uncontrolled inputs are required in Next.js',
    ],
    correctAnswer: 'Controlled inputs are driven by React state, uncontrolled keep value in the DOM',
  },
  {
    question: 'What problem does a stale closure in hooks commonly cause?',
    answers: [
      'State updates stop working completely',
      'Effects read outdated state or props values',
      'React refuses to compile the project',
      'The DOM does not mount',
    ],
    correctAnswer: 'Effects read outdated state or props values',
  },
  {
    question: 'What is the goal of the exhaustive deps ESLint rule?',
    answers: [
      'To remove all dependency arrays',
      'To ensure effect dependencies reflect values used inside the effect',
      'To prevent any useEffect from running',
      'To enable server rendering by default',
    ],
    correctAnswer: 'To ensure effect dependencies reflect values used inside the effect',
  },
  {
    question: 'What is a typical use case for useDeferredValue?',
    answers: [
      'Blocking UI until a request completes',
      'Deferring non urgent derived values to keep input responsive',
      'Replacing useEffect for data fetching',
      'Making a component render only once',
    ],
    correctAnswer: 'Deferring non urgent derived values to keep input responsive',
  },
  {
    question: 'What does startTransition primarily help with?',
    answers: [
      'Running effects before paint',
      'Marking state updates as non urgent to keep UI responsive',
      'Memoizing expensive computations',
      'Turning Server Components into Client Components',
    ],
    correctAnswer: 'Marking state updates as non urgent to keep UI responsive',
  },
  {
    question: 'What is a typical use case for useImperativeHandle?',
    answers: [
      'Exposing a custom imperative API to a parent via ref',
      'Replacing props entirely with refs',
      'Automatically memoizing children',
      'Avoiding forwardRef always',
    ],
    correctAnswer: 'Exposing a custom imperative API to a parent via ref',
  },
  {
    question: 'What is server state in React apps typically about?',
    answers: [
      'State only stored in local component useState',
      'Remote data with caching, refetching, and synchronization concerns',
      'DOM element measurements',
      'Build time configuration flags',
    ],
    correctAnswer: 'Remote data with caching, refetching, and synchronization concerns',
  },
  {
    question: 'Which feature is a core benefit of React Query or SWR?',
    answers: [
      'Automatic JSX compilation',
      'Caching and revalidation of server data',
      'Replacing React Router',
      'Preventing all re-renders',
    ],
    correctAnswer: 'Caching and revalidation of server data',
  },
  {
    question: 'What is a typical use case for RTK Query?',
    answers: [
      'Managing CSS themes only',
      'Data fetching with caching integrated into Redux Toolkit',
      'Replacing reducers entirely with hooks only',
      'Running effects before render',
    ],
    correctAnswer: 'Data fetching with caching integrated into Redux Toolkit',
  },
  {
    question: 'In Redux, what does middleware primarily enable?',
    answers: [
      'Direct DOM manipulation',
      'Extending dispatch to handle async flows or side effects',
      'Replacing actions with components',
      'Avoiding selectors entirely',
    ],
    correctAnswer: 'Extending dispatch to handle async flows or side effects',
  },
  {
    question: 'Why are memoized selectors useful with Redux?',
    answers: [
      'They guarantee zero network requests',
      'They avoid recomputing derived data unless inputs changed',
      'They prevent reducers from running',
      'They remove the need for actions',
    ],
    correctAnswer: 'They avoid recomputing derived data unless inputs changed',
  },
  {
    question: 'When can useMemo hurt performance?',
    answers: [
      'Never, it always speeds up rendering',
      'When the computation is cheap and memo overhead outweighs the benefit',
      'Only in Server Components',
      'Only when using TypeScript',
    ],
    correctAnswer: 'When the computation is cheap and memo overhead outweighs the benefit',
  },
  {
    question: 'What is a common reason React.memo does not help?',
    answers: [
      'Props are stable and primitive values only',
      'Props change reference every render so memo sees them as different',
      'The component is expensive to render',
      'The component has no props at all',
    ],
    correctAnswer: 'Props change reference every render so memo sees them as different',
  },
  {
    question: 'What is a typical goal of code splitting?',
    answers: [
      'Increase initial bundle size',
      'Load less JavaScript upfront to improve startup performance',
      'Prevent XSS by default',
      'Replace SSR completely',
    ],
    correctAnswer: 'Load less JavaScript upfront to improve startup performance',
  },
  {
    question: 'In Next.js App Router, what is a layout primarily used for?',
    answers: [
      'A single page that always reloads on navigation',
      'Sharing UI across routes with nested routing support',
      'Replacing all components with server actions',
      'Disabling SSR for the entire app',
    ],
    correctAnswer: 'Sharing UI across routes with nested routing support',
  },
  {
    question: 'What is a route handler in Next.js App Router typically used for?',
    answers: [
      'Client side navigation only',
      'Building API endpoints in the app directory',
      'Replacing React components with HTML only',
      'Running hooks on the server for UI rendering',
    ],
    correctAnswer: 'Building API endpoints in the app directory',
  },
  {
    question: 'What does loading.tsx primarily represent in App Router?',
    answers: [
      'A global CSS entry file',
      'A Suspense fallback shown while a route segment is loading',
      'A file that disables caching',
      'A file required for SSG only',
    ],
    correctAnswer: 'A Suspense fallback shown while a route segment is loading',
  },
  {
    question: 'What does error.tsx primarily provide in App Router?',
    answers: [
      'A way to catch render errors for a route segment and show fallback UI',
      'A way to catch network errors in fetch globally with no code',
      'A replacement for TypeScript types',
      'A way to disable Server Components',
    ],
    correctAnswer: 'A way to catch render errors for a route segment and show fallback UI',
  },
  {
    question: 'In Next.js, what does revalidate typically control?',
    answers: [
      'How often local state resets',
      'How often cached data or pages can be regenerated',
      'How many components can re-render per second',
      'How TypeScript checks types',
    ],
    correctAnswer: 'How often cached data or pages can be regenerated',
  },
  {
    question: 'What is a key security consideration for Server Actions?',
    answers: [
      'They can only run in the browser',
      'They should validate input and enforce authorization on the server',
      'They do not need CSRF protection ever',
      'They bypass authentication automatically',
    ],
    correctAnswer: 'They should validate input and enforce authorization on the server',
  },
  {
    question: 'What is the core benefit of streaming SSR with Suspense?',
    answers: [
      'It disables JavaScript for the page',
      'It can send parts of the UI earlier while slower parts load',
      'It guarantees no re-renders on the client',
      'It replaces the need for caching',
    ],
    correctAnswer: 'It can send parts of the UI earlier while slower parts load',
  },
  {
    question: 'What is a good way to mock network calls in unit tests?',
    answers: [
      'Call the real API in every test',
      'Mock fetch or use a request mocking tool',
      'Disable assertions for network tests',
      'Use console.log instead of tests',
    ],
    correctAnswer: 'Mock fetch or use a request mocking tool',
  },
  {
    question: 'When testing timers, what is a common technique?',
    answers: [
      'Avoid testing timers entirely',
      'Use fake timers to control time progression',
      'Use CSS to speed up time',
      'Use React.memo on setTimeout',
    ],
    correctAnswer: 'Use fake timers to control time progression',
  },
  {
    question: 'What is a typical tool for testing custom hooks in isolation?',
    answers: ['ReactDOM.render only', 'renderHook from Testing Library', 'webpack-bundle-analyzer', 'npm audit'],
    correctAnswer: 'renderHook from Testing Library',
  },
  {
    question: 'What best describes an end to end test?',
    answers: [
      'Testing only a reducer with inputs and outputs',
      'Testing a full user flow in a real browser environment',
      'Testing TypeScript types only',
      'Testing CSS variables compilation',
    ],
    correctAnswer: 'Testing a full user flow in a real browser environment',
  },
  {
    question: 'Which tool is commonly used for React end to end testing?',
    answers: ['Playwright', 'Prettier', 'ESLint', 'React DevTools'],
    correctAnswer: 'Playwright',
  },
  {
    question: 'Which TypeScript utility type removes keys from a type?',
    answers: ['Pick', 'Omit', 'Partial', 'Required'],
    correctAnswer: 'Omit',
  },
  {
    question: 'Which type is best to represent a value that can be a string or null?',
    answers: ['string & null', 'string | null', 'never', 'unknown only'],
    correctAnswer: 'string | null',
  },
  {
    question: 'How do you typically type a ref to a div element in React TypeScript?',
    answers: ['useRef<number>(0)', 'useRef<HTMLDivElement | null>(null)', 'useRef<string[]>([])', 'useRef<HTMLElement>(undefined)'],
    correctAnswer: 'useRef<HTMLDivElement | null>(null)',
  },
  {
    question: 'What is a common use case for generics in React components?',
    answers: [
      'To execute code at runtime faster',
      'To create reusable components with type safe data and callbacks',
      'To avoid props entirely',
      'To replace JSX with plain HTML',
    ],
    correctAnswer: 'To create reusable components with type safe data and callbacks',
  },
  {
    question: 'What is aria-live primarily used for?',
    answers: [
      'Styling components for dark mode',
      'Announcing dynamic content updates to screen readers',
      'Preventing keyboard navigation',
      'Improving network performance',
    ],
    correctAnswer: 'Announcing dynamic content updates to screen readers',
  },
  {
    question: 'What is a key accessibility requirement for modals?',
    answers: [
      'Focus should remain behind the modal',
      'Focus should move into the modal and be managed while it is open',
      'The modal must be a div with no role',
      'The modal must not have a close button',
    ],
    correctAnswer: 'Focus should move into the modal and be managed while it is open',
  },
  {
    question: 'When should you prefer native HTML elements over ARIA roles?',
    answers: [
      'Never, ARIA is always better',
      'When native semantics already match the behavior and meaning',
      'Only when using Next.js',
      'Only in Server Components',
    ],
    correctAnswer: 'When native semantics already match the behavior and meaning',
  },
  {
    question: 'What does a Content Security Policy (CSP) primarily help with?',
    answers: [
      'Reducing bundle size',
      'Mitigating XSS by restricting script sources',
      'Improving CSS specificity',
      'Replacing authentication',
    ],
    correctAnswer: 'Mitigating XSS by restricting script sources',
  },
  {
    question: 'What is a common defense against CSRF?',
    answers: [
      'Storing tokens in localStorage',
      'Using anti CSRF tokens and same site cookies',
      'Disabling HTTPS',
      'Rendering all HTML with dangerouslySetInnerHTML',
    ],
    correctAnswer: 'Using anti CSRF tokens and same site cookies',
  },
  {
    question: 'Why are httpOnly cookies often used for auth tokens?',
    answers: [
      'They can be read by any client script easily',
      'They are not accessible to JavaScript, reducing impact of XSS token theft',
      'They disable CORS automatically',
      'They remove the need for HTTPS',
    ],
    correctAnswer: 'They are not accessible to JavaScript, reducing impact of XSS token theft',
  },
  {
    question: 'What is a safe practice when you must render user provided HTML?',
    answers: [
      'Always trust the HTML if it comes from your API',
      'Sanitize the HTML before rendering and avoid it when possible',
      'Use eval to validate it',
      'Render it only in useLayoutEffect',
    ],
    correctAnswer: 'Sanitize the HTML before rendering and avoid it when possible',
  },
];
