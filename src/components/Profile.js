  import React from 'react'
  import {useSelector} from "react-redux"

  function Profile() {
    const user= useSelector((state)=> state.user.value)
    const themeColor= useSelector((state)=> state.theme.value)

    const profile = useSelector((state) =>state.profile.value)
    return (
      <div style={{color: themeColor}}>
        {/* <h1>profile page</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p> */}

        <h1>profile property</h1>
        <p>height: {profile.height}</p>
        <p>age: {profile.age}</p>
        <p>weight: {profile.weight}</p>
      </div>
    )
  }
  
  export default Profile