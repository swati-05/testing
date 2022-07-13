 import React from 'react'
 import {useDispatch} from "react-redux"
import{login, logout} from "../features/User"

 function Login() {
  const dispatch = useDispatch( )
   return (
     <div>
     <button onClick={() => {
      dispatch(login({name:"hello",age:20,email:"hello@gmail.com"}))
     }}>Logins dfd </button>
  
     <button onClick={() => {
      dispatch(logout ())
     }}>logout </button>
        </div>
   )
 }
 
 export default Login