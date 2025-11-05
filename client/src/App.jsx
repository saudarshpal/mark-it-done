import './App.css'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Homepage from './pages/Homepage'
import AuthContext from './context/AuthContext'
import { useEffect, useState } from 'react'

function App() {
  const [authenticated,setAuthenticated] = useState(false)
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token) setAuthenticated(true)
    else setAuthenticated(false)
  },[])
  return (
  <>
   <AuthContext value={{setAuthenticated}}>
    <BrowserRouter>
      <Routes>
          <Route path='/' element = {authenticated ? <Homepage /> : <Navigate to='/signin'/>}/>
          <Route path='/signup' element={!authenticated ? <Signup /> : <Navigate to='/homepage'/>}/>
          <Route path='/signin'  element={!authenticated ? <Signin /> : <Navigate to='/homepage'/>}/>
          <Route path='/homepage' element = { authenticated ? <Homepage /> : <Navigate to='/signin'/>}/>
          {/* <Route path='/signup' element={<Signup />}/>
          <Route path='/signin'  element={<Signin />}/>
          <Route path='/homepage' element={<Homepage/>}/> */}
      </Routes>
    </BrowserRouter>
   </AuthContext>
  </>
   
  )
}

export default App
