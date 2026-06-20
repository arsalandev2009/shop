import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
  const token = localStorage.getItem('token');
  
    return (
    <div>
{token ? children : <Navigate to='/login'/>}
    </div>
  )
}

export default ProtectedRoute
