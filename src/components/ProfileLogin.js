import React from 'react'
import {useDispatch} from "react-redux"
import{login, logout} from "../features/User"
import {property} from "../features/ProfileDemo"

function ProfileLogin() {
 const dispatch = useDispatch();
 const propertyData = {height:20,age:50,weight:67}
//  const loginData = {height:"redux",age:20,weight:"hello@gmail.com"};
  return (
    <div>
    {/* <button onClick={() => {
     dispatch(login(loginData))
    }}>Login </button>
 
    <button onClick={() => {
     dispatch(logout ())
    }}>logout </button> */}

<button onClick={() => {
     dispatch(property(propertyData))
    }}>get property </button>

    
       </div>
  )
}

export default ProfileLogin