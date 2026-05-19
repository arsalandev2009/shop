import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/header/Header'
import Contactus from './components/contactus/Contactus'
import Login from './components/login/Login'
import Footer from './components/footer/Footer'
import Signup from './components/signup/Signup'
import Forget from './components/forget/Forget'
import Otp from './components/otp/Otp'
import Setnewpassword from './components/setnewpassword/Setnewpassword'
import Home from './components/home/Home'



function App() {
  return (
    <>



<BrowserRouter>
  

<Routes>
  <Route path='/' element={<Login />} />
  <Route path='/login' element={<Login />} />
  <Route path='/forget' element={<Forget />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='/home' element={<> 
                                  <Header/> <Home /> <Footer /> 
                               </>} />
  <Route path='/otp' element={<Otp />} />
  <Route path='/setnewpassword' element={<Setnewpassword />} />
</Routes>

</BrowserRouter>


    </>
  )
}

export default App
