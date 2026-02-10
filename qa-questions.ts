export const qaMatrixQuestions = [
  {
    question: 'What is the main goal of regression testing?',
    answers: [
      'To find new bugs in new features',
      'To ensure that changes did not break existing functionality',
      'To test performance only',
      'To test the UI design',
    ],
    correctAnswer: 'To ensure that changes did not break existing functionality',
  },
  {
    question: 'Which technique partitions inputs into equivalence classes?',
    answers: ['Boundary value analysis', 'Equivalence partitioning', 'Decision table testing', 'Exploratory testing'],
    correctAnswer: 'Equivalence partitioning',
  },
  {
    question: 'What does a bug report typically include?',
    answers: [
      'Only the title',
      'Title, steps to reproduce, expected vs actual result, environment',
      'Only the severity',
      'Only a screenshot',
    ],
    correctAnswer: 'Title, steps to reproduce, expected vs actual result, environment',
  },
  {
    question: 'What is the difference between verification and validation?',
    answers: [
      'They are the same',
      'Verification: "Did we build it right?"; Validation: "Did we build the right thing?"',
      'Verification is done by developers only',
      'Validation is only for UI',
    ],
    correctAnswer: 'Verification: "Did we build it right?"; Validation: "Did we build the right thing?"',
  },
  {
    question: 'When is smoke testing usually performed?',
    answers: ['After full regression', 'After each build to check if the main flows work', 'Only in production', 'Only by developers'],
    correctAnswer: 'After each build to check if the main flows work',
  },
  {
    question: 'What is a test case?',
    answers: [
      'A bug description',
      'A set of inputs, execution conditions, and expected results for a single scenario',
      'A type of automation framework',
      'A deployment step',
    ],
    correctAnswer: 'A set of inputs, execution conditions, and expected results for a single scenario',
  },
  {
    question: 'Which testing level focuses on testing the whole system end to end?',
    answers: ['Unit testing', 'Integration testing', 'System testing', 'Code review'],
    correctAnswer: 'System testing',
  },
  {
    question: 'What is exploratory testing?',
    answers: [
      'Scripted testing with detailed steps',
      'Simultaneous learning, test design, and test execution without full pre-defined scripts',
      'Only automated testing',
      'Only performance testing',
    ],
    correctAnswer: 'Simultaneous learning, test design, and test execution without full pre-defined scripts',
  },
  {
    question: 'What does API testing typically verify?',
    answers: [
      'Only the UI that calls the API',
      'Request/response, status codes, and business logic of the API',
      'Only performance',
      'Only security',
    ],
    correctAnswer: 'Request/response, status codes, and business logic of the API',
  },
  {
    question: 'Why is test automation useful?',
    answers: [
      'To replace all manual testing',
      'To run repetitive checks quickly and consistently, freeing time for exploratory testing',
      'To avoid writing test cases',
      'To fix bugs automatically',
    ],
    correctAnswer: 'To run repetitive checks quickly and consistently, freeing time for exploratory testing',
  },

  {
    question: 'Which is an example of non-functional testing?',
    answers: [
      'Checking a login button works',
      'Checking page load time under load',
      'Checking a form saves data',
      'Checking a link opens a page',
    ],
    correctAnswer: 'Checking page load time under load',
  },
  {
    question: 'What best describes black box testing?',
    answers: [
      'Testing based on internal code structure',
      'Testing without knowing the internal implementation',
      'Testing only with unit tests',
      'Testing only by developers',
    ],
    correctAnswer: 'Testing without knowing the internal implementation',
  },
  {
    question: 'What is the difference between severity and priority?',
    answers: [
      'They mean the same thing',
      'Severity is business value; priority is technical impact',
      'Severity is impact of the defect; priority is urgency to fix',
      'Severity is only for UI bugs; priority is only for backend bugs',
    ],
    correctAnswer: 'Severity is impact of the defect; priority is urgency to fix',
  },
  {
    question: 'Why do cross-browser tests matter?',
    answers: [
      'They replace API tests',
      'They ensure the app works consistently across browsers',
      'They measure database performance',
      'They guarantee no bugs in production',
    ],
    correctAnswer: 'They ensure the app works consistently across browsers',
  },
  {
    question: 'What is a common use of browser devtools in testing?',
    answers: [
      'Generating invoices',
      'Inspecting network requests and console errors',
      'Deploying to production',
      'Editing the database schema',
    ],
    correctAnswer: 'Inspecting network requests and console errors',
  },
  {
    question: 'What is Postman commonly used for in QA?',
    answers: ['UI snapshot testing', 'API request and response testing', 'Source code compilation', 'Design system documentation'],
    correctAnswer: 'API request and response testing',
  },
  {
    question: 'Why is Git useful for test code?',
    answers: [
      'It makes tests run faster',
      'It tracks changes and enables collaboration',
      'It replaces CI/CD',
      'It automatically fixes flaky tests',
    ],
    correctAnswer: 'It tracks changes and enables collaboration',
  },
  {
    question: 'What does test coverage describe?',
    answers: [
      'How many servers are running',
      'Which requirements or code are exercised by tests',
      'How many bugs are in the backlog',
      'How fast the UI renders',
    ],
    correctAnswer: 'Which requirements or code are exercised by tests',
  },
  {
    question: 'What is a good rule when using AI for QA learning?',
    answers: [
      'Assume AI answers are always correct',
      'Skip verification if it looks plausible',
      'Verify AI outputs with reliable sources and context',
      'Use AI only for UI testing',
    ],
    correctAnswer: 'Verify AI outputs with reliable sources and context',
  },

  {
    question: 'What does boundary value analysis focus on?',
    answers: ['Only random inputs', 'Inputs at the edges of valid ranges', 'Only UI layout checks', 'Only API status codes'],
    correctAnswer: 'Inputs at the edges of valid ranges',
  },
  {
    question: 'What is re-testing?',
    answers: [
      'Testing new features only',
      'Testing the same build repeatedly without changes',
      'Testing a specific fix to confirm it works',
      'Testing performance under load',
    ],
    correctAnswer: 'Testing a specific fix to confirm it works',
  },
  {
    question: 'What does the testing pyramid recommend?',
    answers: [
      'Mostly end to end tests, few unit tests',
      'A balanced mix with more unit tests than end to end tests',
      'Only manual testing',
      'Only UI automation',
    ],
    correctAnswer: 'A balanced mix with more unit tests than end to end tests',
  },
  {
    question: 'What is a key benefit of the Page Object Model?',
    answers: [
      'It removes the need for assertions',
      'It centralizes UI selectors and actions for maintainability',
      'It makes API tests obsolete',
      'It guarantees zero flakiness',
    ],
    correctAnswer: 'It centralizes UI selectors and actions for maintainability',
  },
  {
    question: 'Why integrate automated tests into CI/CD?',
    answers: [
      'To avoid writing test cases',
      'To run tests automatically on changes and catch issues early',
      'To replace code review',
      'To speed up production incidents',
    ],
    correctAnswer: 'To run tests automatically on changes and catch issues early',
  },
  {
    question: 'What is a merge conflict in Git?',
    answers: ['A failed deployment', 'Two changes that touch the same lines and cannot auto-merge', 'A flaky test', 'A slow API response'],
    correctAnswer: 'Two changes that touch the same lines and cannot auto-merge',
  },
  {
    question: 'What do linters and formatters help with in test code?',
    answers: [
      'Reducing code style issues and improving consistency',
      'Replacing test frameworks',
      'Creating test data automatically',
      'Increasing server memory',
    ],
    correctAnswer: 'Reducing code style issues and improving consistency',
  },
  {
    question: 'Which SQL query is commonly used to verify a record exists?',
    answers: ['DROP TABLE users', 'SELECT * FROM users WHERE id = 1', 'ALTER TABLE users ADD COLUMN test', 'TRUNCATE TABLE users'],
    correctAnswer: 'SELECT * FROM users WHERE id = 1',
  },
  {
    question: 'What is a reliable way to select a DOM element in tests?',
    answers: [
      'Randomly clicking coordinates',
      'Using stable attributes like data-testid',
      'Using changing pixel positions',
      'Using CSS selectors',
    ],
    correctAnswer: 'Using stable attributes like data-testid',
  },
  {
    question: 'What is the purpose of fixtures in testing?',
    answers: ['To deploy the app', 'To provide consistent test setup data or state', 'To encrypt API traffic', 'To replace manual testing'],
    correctAnswer: 'To provide consistent test setup data or state',
  },
  {
    question: 'What is an example of a quality metric?',
    answers: ['Number of meetings per week', 'Bug rate trend over releases', 'Number of UI colors', 'Developer keyboard type'],
    correctAnswer: 'Bug rate trend over releases',
  },
  {
    question: 'What is a flaky test?',
    answers: [
      'A test that always fails',
      'A test that fails intermittently without code changes',
      'A test with no assertions',
      'A test that runs only locally',
    ],
    correctAnswer: 'A test that fails intermittently without code changes',
  },
  {
    question: 'What is a good process improvement suggestion?',
    answers: [
      'Remove all testing to deliver faster',
      'Add clear entry and exit criteria for testing',
      'Stop tracking defects',
      'Avoid using environments',
    ],
    correctAnswer: 'Add clear entry and exit criteria for testing',
  },
  {
    question: 'What is a good way to help junior QA engineers?',
    answers: [
      'Hide test knowledge to avoid mistakes',
      'Share techniques and review test cases together',
      'Only give them production access',
      'Avoid explaining failures',
    ],
    correctAnswer: 'Share techniques and review test cases together',
  },
  {
    question: 'When using AI to generate tests, what is essential?',
    answers: [
      'Copy and paste without review',
      'Verify correctness, coverage, and assertions',
      'Remove assertions to avoid failures',
      'Use AI only for UI copy',
    ],
    correctAnswer: 'Verify correctness, coverage, and assertions',
  },

  {
    question: 'What is a key goal of test architecture?',
    answers: [
      'Maximizing screenshots',
      'Creating a scalable, maintainable automation structure',
      'Avoiding CI/CD',
      'Eliminating all manual testing',
    ],
    correctAnswer: 'Creating a scalable, maintainable automation structure',
  },
  {
    question: 'What is a common way to reduce end to end test time?',
    answers: ['Running tests only on Fridays', 'Parallel test execution', 'Removing assertions', 'Adding more sleeps'],
    correctAnswer: 'Parallel test execution',
  },
  {
    question: 'Which tool is commonly used for load testing?',
    answers: ['k6', 'Prettier', 'ESLint', 'Storybook'],
    correctAnswer: 'k6',
  },
  {
    question: 'What is contract testing?',
    answers: [
      'Testing only the UI',
      'Verifying an agreed API contract between services',
      'Testing only performance',
      'Manually checking logs',
    ],
    correctAnswer: 'Verifying an agreed API contract between services',
  },
  {
    question: 'What does “quality leadership” often include in CI/CD?',
    answers: [
      'Ignoring test failures to deploy faster',
      'Ensuring reliable test signals and improving coverage',
      'Removing reporting to reduce noise',
      'Running tests only locally',
    ],
    correctAnswer: 'Ensuring reliable test signals and improving coverage',
  },
  {
    question: 'Why use a tool like BrowserStack?',
    answers: [
      'To write SQL queries',
      'To test across browsers and devices at scale',
      'To replace API testing',
      'To generate code coverage',
    ],
    correctAnswer: 'To test across browsers and devices at scale',
  },
  {
    question: 'How should issues be prioritized in QA planning?',
    answers: ['By who reported them', 'By impact and urgency', 'By how many screenshots they have', 'By the length of the title'],
    correctAnswer: 'By impact and urgency',
  },
  {
    question: 'What is a core part of technical mentorship in QA?',
    answers: [
      'Avoiding standards to stay flexible',
      'Running workshops and guiding testing strategy choices',
      'Only assigning bug tickets',
      'Disabling flaky tests permanently',
    ],
    correctAnswer: 'Running workshops and guiding testing strategy choices',
  },
  {
    question: 'What is a good mindset for advanced AI tool usage in QA?',
    answers: [
      'Treat AI outputs as final truth',
      'Use AI as a perspective, then challenge and validate it',
      'Avoid AI tools completely',
      'Use AI only for naming variables',
    ],
    correctAnswer: 'Use AI as a perspective, then challenge and validate it',
  },

  {
    question: 'What is a practical outcome of company-wide QA standards?',
    answers: [
      'Each team defines severity differently to stay flexible',
      'A shared definition of done including quality gates and evidence expectations',
      'Removing test reporting to reduce CI noise',
      'Only exploratory testing is allowed for critical paths',
    ],
    correctAnswer: 'A shared definition of done including quality gates and evidence expectations',
  },
  {
    question: 'What does aligning QA with business risk mean?',
    answers: [
      'Testing everything equally',
      'Focusing testing effort based on impact and risk tolerance',
      'Skipping testing for new features',
      'Only testing in production',
    ],
    correctAnswer: 'Focusing testing effort based on impact and risk tolerance',
  },
  {
    question: 'What problem does test sharding primarily solve in CI?',
    answers: [
      'Reducing flakiness by adding retries to failing tests',
      'Reducing total pipeline time by distributing tests across multiple executors',
      'Improving selector stability by enforcing data-testid usage',
      'Increasing unit test coverage without adding new tests',
    ],
    correctAnswer: 'Reducing total pipeline time by distributing tests across multiple executors',
  },
  {
    question: 'What is a key part of CI/CD test strategy design?',
    answers: [
      'Only full test runs on every commit',
      'Separating smoke, regression, and full suites by purpose',
      'Removing reporting to reduce noise',
      'Avoiding quality gates',
    ],
    correctAnswer: 'Separating smoke, regression, and full suites by purpose',
  },
  {
    question: 'Which is an example of non-functional testing at scale?',
    answers: ['Checking a button label', 'Stress testing system behavior under extreme load', 'Renaming variables', 'Updating UI colors'],
    correctAnswer: 'Stress testing system behavior under extreme load',
  },
  {
    question: 'What is a performance budget used for?',
    answers: [
      'Defining acceptable limits for key metrics and failing builds when exceeded',
      'Estimating developer cost per sprint',
      'Tracking the number of tests executed per day',
      'Replacing SLAs with internal guidelines',
    ],
    correctAnswer: 'Defining acceptable limits for key metrics and failing builds when exceeded',
  },
  {
    question: 'Why mock external services in automated tests?',
    answers: [
      'To increase network latency',
      'To make tests stable and independent of third parties',
      'To avoid writing assertions',
      'To replace integration testing',
    ],
    correctAnswer: 'To make tests stable and independent of third parties',
  },
  {
    question: 'What is a realistic AI governance rule for QA teams?',
    answers: [
      'Allow AI generated tests to merge without human review',
      'Require review and traceability for AI generated test changes in critical areas',
      'Block AI usage for debugging because it adds bias',
      'Use AI only for debugging test failures',
    ],
    correctAnswer: 'Require review and traceability for AI generated test changes in critical areas',
  },

  {
    question: 'What is a quality KPI example at org level?',
    answers: [
      'Number of test cases written per sprint',
      'Escaped defects weighted by severity and affected users',
      'Number of automation commits per month',
      'Average time spent in test planning meetings',
    ],
    correctAnswer: 'Escaped defects weighted by severity and affected users',
  },
  {
    question: 'Why involve QA early in requirements?',
    answers: [
      'To delay development',
      'To identify ambiguities and risks before implementation',
      'To remove stakeholders from planning',
      'To write only performance tests',
    ],
    correctAnswer: 'To identify ambiguities and risks before implementation',
  },
  {
    question: 'What is the difference between SAST and DAST?',
    answers: [
      'They are the same',
      'SAST analyzes code; DAST tests a running application',
      'SAST is only for UI; DAST is only for databases',
      'SAST runs in production only; DAST runs in IDE only',
    ],
    correctAnswer: 'SAST analyzes code; DAST tests a running application',
  },
  {
    question: 'What is an example of embedding security checks in tests?',
    answers: [
      'Ignoring authentication',
      'Adding automated checks for authorization and input validation',
      'Removing logging',
      'Disabling HTTPS',
    ],
    correctAnswer: 'Adding automated checks for authorization and input validation',
  },
  {
    question: 'What is the main purpose of CSRF protection?',
    answers: [
      'Preventing SQL injection by escaping user input',
      'Preventing a user browser from sending unwanted authenticated requests',
      'Preventing scripts from running in the browser',
      'Preventing brute force attacks on passwords',
    ],
    correctAnswer: 'Preventing a user browser from sending unwanted authenticated requests',
  },
  {
    question: 'Which scenario best describes stored XSS?',
    answers: [
      'An attacker injects a script into a URL parameter and it runs only for that click',
      'A script is saved on the server and runs for users who view the affected page',
      'A script runs only in the attacker browser and never reaches the server',
      'A user is forced to send an authenticated request without seeing it',
    ],
    correctAnswer: 'A script is saved on the server and runs for users who view the affected page',
  },
  {
    question: 'Which defense most directly reduces XSS risk in rendered HTML?',
    answers: [
      'Using CSRF tokens on forms',
      'Output encoding and context-aware escaping',
      'Storing passwords with hashing',
      'Rate limiting login requests',
    ],
    correctAnswer: 'Output encoding and context-aware escaping',
  },
  {
    question: 'What does the HttpOnly cookie flag primarily protect against?',
    answers: [
      'Man in the middle attacks on HTTPS',
      'JavaScript access to session cookies',
      'CSRF attacks on state-changing requests',
      'SQL injection in form fields',
    ],
    correctAnswer: 'JavaScript access to session cookies',
  },
  {
    question: 'What is a common indicator of an authorization bug?',
    answers: [
      'A 404 response on a missing route',
      'A user can access another user resource by changing an ID',
      'A request returns 201 after creating a resource',
      'A page loads slowly under load',
    ],
    correctAnswer: 'A user can access another user resource by changing an ID',
  },
];
