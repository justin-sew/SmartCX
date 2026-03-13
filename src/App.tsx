import { Navigation } from '@your-org/component-library'
import '@your-org/component-library/styles'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation
        title="SmartCX"
        activeLink="CSR"
        notificationCount={3}
        messageCount={8}
      />
      <main className="main">
        <p className="placeholder">SmartCX content goes here.</p>
      </main>
    </div>
  )
}

export default App
