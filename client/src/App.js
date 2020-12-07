import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Navbar } from './components/Navbar'
import { Loader } from './components/Loader'
import M from 'materialize-css'

function App() {
  const { token, login, logout, userId, ready } = useAuth() 
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!ready){
    return <Loader />
  }

  const elems = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elems, {});

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
        { isAuthenticated && <Navbar></Navbar>}
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
