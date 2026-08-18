import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Chat' element={<Sidebar/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
