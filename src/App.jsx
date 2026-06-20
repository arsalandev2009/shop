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
import Allproducts from './components/allproducts/Allproducts'
import Home from './components/home/Home'
import Details from './components/details/Details'
import Youraccount from './components/youraccount/Youraccount'
import Cart from './components/cart/Cart'
import ProtectedRoute from './protect/ProtectedRoute'
import Error from './components/error/Error'



function App() {
  return (
    <>



<BrowserRouter>
  

<Routes>
  {/* <Route path='/login' element={<Login />} /> */}
  <Route path='/' element={  <Home/> } />
  <Route path='/forget' element={<Forget />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='/login' element={<Login />} />
  <Route path='/home' element={<Home/>} />
  <Route path='/otp' element={<Otp />} />
  <Route path='/setnewpassword' element={<Setnewpassword />} />
  <Route path="/products" element={<Allproducts/>}/>
  <Route path="/details/:id" element={<Details />}/>
  <Route path='/you' element={<Youraccount/>}/>
  <Route path='/contactus' element={<Contactus />}/>
  <Route path='/cart' element={<ProtectedRoute> <Cart/> </ProtectedRoute>} />

<Route path='*' element={<Error/>}/>

  </Routes>

</BrowserRouter>


    </>
  )
}

export default App
