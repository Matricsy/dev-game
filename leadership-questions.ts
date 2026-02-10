export const leadershipMatrixQuestions = [
  {
    question: 'Which metric is part of the DORA metrics set?',
    answers: [
      'Story points completed per sprint',
      'Deployment frequency',
      'Number of bugs created per week',
      'Average code review comments per pull request',
    ],
    correctAnswer: 'Deployment frequency',
  },
  {
    question: 'In DORA, what does lead time for changes measure?',
    answers: [
      'Time from incident start to recovery',
      'Time from code commit to running in production',
      'Time from backlog creation to sprint start',
      'Time from feature request to stakeholder approval',
    ],
    correctAnswer: 'Time from code commit to running in production',
  },
  {
    question: 'Which DORA metric best reflects stability after releases?',
    answers: ['Change failure rate', 'Deployment frequency', 'Team size', 'Sprint predictability'],
    correctAnswer: 'Change failure rate',
  },
  {
    question: 'What is MTTR in the DORA context?',
    answers: ['Mean time to refactor', 'Mean time to recovery', 'Median time to review', 'Minimum time to release'],
    correctAnswer: 'Mean time to recovery',
  },
  {
    question: 'A team improves deployment frequency but incidents increase. What is the best leadership response?',
    answers: [
      'Freeze releases until incidents reach zero',
      'Add more manual approvals to every deployment',
      'Investigate change failure rate and recovery practices, then adjust guardrails',
      'Reduce deployment frequency to match last quarter levels',
    ],
    correctAnswer: 'Investigate change failure rate and recovery practices, then adjust guardrails',
  },
  {
    question: 'What is a strong 1:1 structure for experienced engineers?',
    answers: [
      'Status, tasks, and blockers only',
      'Career growth, feedback, and problem solving with clear follow ups',
      'Only personal topics to build trust',
      'Only retrospective of the last sprint',
    ],
    correctAnswer: 'Career growth, feedback, and problem solving with clear follow ups',
  },
  {
    question: 'Which 1:1 question most reliably surfaces hidden delivery risk?',
    answers: [
      'Are you happy with the project?',
      'What is one thing you would change if you were the manager for a week?',
      'What are we not talking about that could bite us later?',
      'Do you prefer remote or office work?',
    ],
    correctAnswer: 'What are we not talking about that could bite us later?',
  },
  {
    question: 'Which feedback format is most actionable for performance issues?',
    answers: [
      'Start with your opinion, then ask for agreement',
      'Describe situation, behavior, impact, then agree on next steps',
      'Compare the person to top performers to motivate them',
      'Keep it vague to avoid defensiveness',
    ],
    correctAnswer: 'Describe situation, behavior, impact, then agree on next steps',
  },
  {
    question: 'What is the best first step when performance drops and the cause is unclear?',
    answers: [
      'Start a formal performance improvement plan immediately',
      'Collect concrete examples and ask for their perspective in a direct conversation',
      'Ask peers for feedback before speaking to the person',
      'Move work away from them to reduce risk',
    ],
    correctAnswer: 'Collect concrete examples and ask for their perspective in a direct conversation',
  },
  {
    question: 'What makes a performance improvement plan effective?',
    answers: [
      'High pressure goals with no exceptions',
      'Clear expectations, measurable outcomes, support plan, and check in cadence',
      'A list of past mistakes to avoid',
      'A promise of promotion if results improve',
    ],
    correctAnswer: 'Clear expectations, measurable outcomes, support plan, and check in cadence',
  },
  {
    question: 'A senior engineer repeatedly dominates discussions and blocks others. Best action?',
    answers: [
      'Let it happen because they deliver the most',
      'Set facilitation rules, invite quieter voices, and give direct feedback privately',
      'Publicly call them out during the next meeting',
      'Move all decisions to async to avoid meetings',
    ],
    correctAnswer: 'Set facilitation rules, invite quieter voices, and give direct feedback privately',
  },
  {
    question: 'Which delegation approach best scales a leader?',
    answers: [
      'Delegate tasks with detailed step by step instructions',
      'Delegate outcomes with constraints, success criteria, and decision boundaries',
      'Delegate only low risk tasks until trust is perfect',
      'Delegate everything and do not review to build ownership',
    ],
    correctAnswer: 'Delegate outcomes with constraints, success criteria, and decision boundaries',
  },
  {
    question: 'What is the primary purpose of a RACI style model?',
    answers: [
      'Estimating story points faster',
      'Clarifying responsibility and decision roles',
      'Reducing the number of meetings automatically',
      'Enforcing a single architecture across teams',
    ],
    correctAnswer: 'Clarifying responsibility and decision roles',
  },
  {
    question: 'A decision is stuck because too many people must approve. Best fix?',
    answers: [
      'Add more reviewers to increase safety',
      'Introduce a single decision owner and clear consultation rules',
      'Escalate every decision to leadership',
      'Pause work until consensus is reached',
    ],
    correctAnswer: 'Introduce a single decision owner and clear consultation rules',
  },
  {
    question: 'What is a good leading indicator of burnout risk in a team?',
    answers: [
      'More people speaking in meetings',
      'Consistently rising work in progress and frequent context switching',
      'Higher deployment frequency',
      'More automated tests added per sprint',
    ],
    correctAnswer: 'Consistently rising work in progress and frequent context switching',
  },
  {
    question: 'What is the main benefit of limiting work in progress?',
    answers: [
      'It increases story points delivered',
      'It reduces cycle time and improves focus',
      'It eliminates the need for planning',
      'It guarantees zero defects',
    ],
    correctAnswer: 'It reduces cycle time and improves focus',
  },
  {
    question: 'A stakeholder asks for a hard date with high uncertainty. Best response?',
    answers: [
      'Give a date and commit to protect trust',
      'Provide a range, key assumptions, and the next decision point',
      'Refuse to discuss timelines until the work is done',
      'Ask the team to work overtime to make any date possible',
    ],
    correctAnswer: 'Provide a range, key assumptions, and the next decision point',
  },
  {
    question: 'Which approach best reduces scope creep during implementation?',
    answers: [
      'Allow changes but track them in a separate document',
      'Make tradeoffs explicit and re agree on scope, time, or quality',
      'Accept changes silently and adjust later',
      'Stop all changes and freeze requirements completely',
    ],
    correctAnswer: 'Make tradeoffs explicit and re agree on scope, time, or quality',
  },
  {
    question: 'A roadmap goal is slipping. What is the best escalation package?',
    answers: [
      'A list of blockers and a request for support',
      'Impact, options, tradeoffs, and a recommended decision',
      'A detailed timeline of everything done so far',
      'A request to add more developers immediately',
    ],
    correctAnswer: 'Impact, options, tradeoffs, and a recommended decision',
  },
  {
    question: 'Which situation most calls for coaching rather than directing?',
    answers: [
      'A production outage with user impact',
      'A junior engineer learning a new domain and making decisions',
      'A security incident requiring immediate containment',
      'A broken build blocking the entire company',
    ],
    correctAnswer: 'A junior engineer learning a new domain and making decisions',
  },
  {
    question: 'What is a strong hiring signal for leadership roles?',
    answers: [
      'They always choose one best practice for every situation',
      'They reason in tradeoffs and show clear ownership patterns on examples',
      'They know many frameworks by name',
      'They avoid discussing failures to stay positive',
    ],
    correctAnswer: 'They reason in tradeoffs and show clear ownership patterns on examples',
  },
  {
    question: 'A team misses commitments often. What is the best first diagnosis step?',
    answers: [
      'Replace the team lead',
      'Check work sizing, interrupt rate, and WIP before changing process',
      'Increase sprint length',
      'Add daily reporting to stakeholders',
    ],
    correctAnswer: 'Check work sizing, interrupt rate, and WIP before changing process',
  },
  {
    question: 'What is a good definition of psychological safety in teams?',
    answers: [
      'No one challenges decisions in meetings',
      'People can raise risks and mistakes without fear of blame',
      'Everyone agrees quickly to keep speed high',
      'Conflicts are avoided to protect relationships',
    ],
    correctAnswer: 'People can raise risks and mistakes without fear of blame',
  },
  {
    question: 'Which practice most directly builds psychological safety?',
    answers: [
      'Only praising outcomes, never discussing mistakes',
      'Leaders modeling fallibility and asking for dissenting views',
      'Removing retrospectives to reduce discomfort',
      'Making all decisions in private to avoid conflict',
    ],
    correctAnswer: 'Leaders modeling fallibility and asking for dissenting views',
  },
  {
    question: 'What is the best way to handle a conflict between two strong performers?',
    answers: [
      'Pick a winner to end debate fast',
      'Align on shared goal, clarify facts, and agree on working rules',
      'Move them to separate teams immediately',
      'Ask the team to vote on who is right',
    ],
    correctAnswer: 'Align on shared goal, clarify facts, and agree on working rules',
  },
  {
    question: 'What is a strong approach to measure engineering productivity responsibly?',
    answers: [
      'Measure commits per developer and optimize for growth',
      'Use a small set of outcome metrics plus qualitative feedback',
      'Track time online and respond time on chat',
      'Rank developers by tickets closed each week',
    ],
    correctAnswer: 'Use a small set of outcome metrics plus qualitative feedback',
  },
  {
    question: 'A new process is not adopted. What is the most likely missing piece?',
    answers: [
      'More documentation',
      'Clear why, owner, success criteria, and feedback loop',
      'More rules and enforcement',
      'A longer meeting to explain the process',
    ],
    correctAnswer: 'Clear why, owner, success criteria, and feedback loop',
  },
  {
    question: 'What is the best signal that a team is ready to increase autonomy?',
    answers: [
      'They ask fewer questions',
      'They manage tradeoffs and communicate risks without prompting',
      'They deliver many story points',
      'They avoid escalation at all costs',
    ],
    correctAnswer: 'They manage tradeoffs and communicate risks without prompting',
  },
  {
    question: 'What does WIP stand for in flow based delivery?',
    answers: [
      'Work in progress',
      'Work in production',
      'Work in planning',
      'Work in pipeline',
    ],
    correctAnswer: 'Work in progress',
  },
  {
    question: 'Which practice most directly reduces lead time variability?',
    answers: [
      'Improving estimation accuracy',
      'Limiting work in progress',
      'Adding more developers',
      'Breaking work into smaller tasks',
    ],
    correctAnswer: 'Limiting work in progress',
  },
  {
    question: 'Which metric is most appropriate as a leading indicator of delivery risk?',
    answers: [
      'Cycle time trend',
      'Deployment frequency',
      'Revenue impact',
      'Customer satisfaction score',
    ],
    correctAnswer: 'Cycle time trend',
  },
  {
    question: 'What is the primary purpose of a postmortem?',
    answers: [
      'Identify the root cause',
      'Prevent recurrence through systemic improvements',
      'Assign accountability',
      'Document the incident timeline',
    ],
    correctAnswer: 'Prevent recurrence through systemic improvements',
  },
  {
    question: 'Which concept explains why adding people to a late project often makes it later?',
    answers: [
      "Little's Law",
      "Parkinson's Law",
      "Brooks's Law",
      "Conway's Law",
    ],
    correctAnswer: "Brooks's Law",
  },
  {
    question: 'What is the main goal of limiting batch size in delivery?',
    answers: [
      'Reduce estimation error',
      'Increase parallel work',
      'Reduce risk and feedback time',
      'Improve resource utilization',
    ],
    correctAnswer: 'Reduce risk and feedback time',
  },
  {
    question: 'Which metric is most commonly misused as a productivity measure?',
    answers: [
      'Deployment frequency',
      'Story points',
      'Lead time',
      'MTTR',
    ],
    correctAnswer: 'Story points',
  },
];
