import './App.css';

const steps = [
  { icon: '⬇️', label: 'Checkout Code', detail: 'actions/checkout@v4' },
  { icon: '📦', label: 'Setup Node.js', detail: 'actions/setup-node@v4' },
  { icon: '🔧', label: 'Install Deps', detail: 'npm install' },
  { icon: '🔍', label: 'Run ESLint', detail: 'npm run eslint' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">GitHub Actions Demo</h1>
        <p className="subtitle">
          A React app with a CI lint pipeline — triggered on every PR to{' '}
          <code>main</code> or <code>dev</code>.
        </p>

        <div className="pipeline">
          {steps.map((step, i) => (
            <div key={step.label} className="pipeline-row">
              <div className="step">
                <span className="step-icon">{step.icon}</span>
                <span className="step-label">{step.label}</span>
                <code className="step-detail">{step.detail}</code>
              </div>
              {i < steps.length - 1 && <div className="arrow">↓</div>}
            </div>
          ))}
        </div>

        <p className="workflow-path">
          Workflow: <code>.github/workflows/main.yml</code>
        </p>
      </header>
    </div>
  );
}

export default App;
