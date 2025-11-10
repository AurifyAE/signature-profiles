import { Routes, Route } from 'react-router-dom'
import './App.css'

const GreetingPage = ({ name, message }) => (
  <main className="page">
    <h1>Hello {name}!</h1>
    <p>{message}</p>
  </main>
)

function App() {
  return (
    <Routes>
      <Route
        path="/haytham"
        element={<GreetingPage name="Haytham" message="Welcome to your dedicated page." />}
      />
      <Route
        path="/ola"
        element={<GreetingPage name="Ola" message="Hope you have a great day!" />}
      />
      <Route
        path="/sabah"
        element={<GreetingPage name="Sabah" message="Wishing you a bright morning!" />}
      />
    </Routes>
  )
}

export default App
