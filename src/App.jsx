import { Routes, Route } from 'react-router-dom'
import './App.css'
import MemberDetailRoute from './components/profile/MemberDetailRoute'
import TeamHome from './components/profile/TeamHome'


function App() {
  return (
    <Routes>
      <Route path="/" element={ <TeamHome /> } />
      <Route path="/haytham" element={<MemberDetailRoute slug="haytham" />} />
      <Route path="/ola" element={<MemberDetailRoute slug="ola" />} />
      <Route path="/sabah" element={<MemberDetailRoute slug="sabah" />} />
    </Routes>
  )
}

export default App
