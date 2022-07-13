
import { Formik, useFormik } from 'formik'
import React from 'react'
import { useMemo } from 'react';
import User from '../features/User';
import { connect } from "react-redux";
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object ({
    username: Yup.string().required('Enter UserName'),
    password: Yup.string().required('Enter Password')
})
function Login(props) {
    const notify = (toastData) => {
        // toastData.dismiss();
        toast.error(toastData)
    };
    const formik = useFormik({
        intialValues:{
            username: '',
            password: ''
        },
        onSubmit: values => {
            authUser()
        },
        validationSchema
    })
    let authState = 0
    const userList = useMemo(() => User,[])
    const navigate = useNavigate()
    const authUser = (e) => {
      userList.map((user) => {
        if (user.password === formik.values.username){
            if(user.password === formik.values.password){
                authState++
            }
        }
      })  
    }
    if (authState > 0){
        window.localStorage.setItem('user',JSON.stringify({'username': formik.values.username, 'password': formik.values.password}))
        props.LOGIN()
        authState = 0
        navigate('/home')
    }else {
        notify('wrong Credentials')
    }
  return (
    <>
    <form onSubmit={Formik.handleSubmit}>
    <div class="text-center">
     <h1 class="font-bold text 3xl">LOGINs </h1>
     <h1 >UserName</h1>
     <input type="text" {...formik.getFieldProps('username')} class="bg-slate-100"></input>
     <h1 >Password</h1>
     <input type="text" {...formik.getFieldProps('password')} class="bg-slate-100"></input><br/><br/>     
     <button type='submit' class="bg-sky-400 w-40">Login</button>
     </div>
     </form>
    </>
  )

}
const mapStateToProps = (state) => {
    return{
        RightNavCloseStatus: state.RightNavCloseStatus,
        isLoggedIn: state.isLoggedIn
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
       LOGIN: (data2) => dispatch({type: "LOGIN"}) 
    };

};

export default  connect(mapStateToProps,mapDispatchToProps)(Login);