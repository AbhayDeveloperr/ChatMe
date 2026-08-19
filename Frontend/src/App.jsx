import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Index from './components/Index'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/chat' element={<Index/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
