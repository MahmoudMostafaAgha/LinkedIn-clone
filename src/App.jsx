import React, { useEffect } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import LogIn from './components/logIn'
import Home from './components/Home'
import Header from './components/Header'
import { getUserAuth } from './redux/actions'
import { connect } from 'react-redux';
import RequireAuth from './components/RequireAuth'

function App(props) {
useEffect(()=>{
  props.getUserAuth()
},[])

  return (
    
      <Router>
        <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/Home" element={
        <RequireAuth>
        <Header/>
        <Home />
        </RequireAuth>
        } />
        </Routes> 
      </Router>
   

  )
}
const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = (disptach) => {
  return {
    getUserAuth: () => disptach(getUserAuth()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App); 
