import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'

const App = () => {

  const location = useLocation();
  const HideNavbar = ["/dashboard"].includes(location.pathname);

  return (
    <>
    {!HideNavbar && <Header/>}
    <Outlet/>
    </>
  )
}

export default App;