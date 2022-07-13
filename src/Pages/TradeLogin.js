import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik } from 'formik';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate  } from "react-router-dom";

export default function TradeLogin() {
    
    const [mydata, setData] = useState()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        axios.get('http://localhost:3000/user/1')
        .then(function (response) {
            // handle success
            // console.log("usename",response.data.username);
            setData(response)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    }, [1])
    

    const handleLoginProcess = (values) => {

      
            // console.log("State Data",mydata.data.username)
            // console.log("State Data",mydata.data.password)

        if (values.username == mydata.data.username && values.password == mydata.data.password) {
            console.log("Success")
            window.location.href="/google";
        } else {
            console.log("Failed to login")
        }

        // console.log("the valuev", values)

    }

    return (
        <div >
            <Button variant="outlined" onClick={handleClickOpen} >
                Login
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>

                    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div class="max-w-md w-full space-y-8">
                            <div>
                                <img class="mx-auto h-20 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png" alt="Workflow" />
                                <h2 class="mt-6 text-center text-3xl font-extrabold text-sky-600">Login in to your account</h2>
                                <p class="mt-2 text-center text-sm text-gray-600">
                                    {/* Or
                                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a> */}
                                </p>
                            </div>
                            <Formik
                                initialValues={{ username: '', password: '' }}
                                // validate={values => {
                                //     const errors = {};
                                //     if (!values.username) {
                                //         errors.username = 'Required';
                                //     } {
                                //         errors.email = 'Invalid username';
                                //     }
                                //     return errors;
                                // }}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        // alert(JSON.stringify(values, null, 2));
                                        // console.log("df",values)
                                        setSubmitting(false);

                                        handleLoginProcess(values)
                                    }, 400);
                                }}

                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                    /* and other goodies */
                                }) => (
                                    <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
                                        <input type="hidden" name="remember" value="true" onChange={handleChange} onBlur={handleBlur} />
                                        <div class="rounded-md shadow-sm -space-y-px">
                                            <div>
                                                <label class="sr-only">username</label>
                                                <input name="username" type="text" value={values.username} required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="username " onChange={handleChange} onBlur={handleBlur} />
                                            </div>
                                            <div>
                                                <label for="password" class="sr-only">password</label>
                                                <input id="password" name="password" type="password" value={values.password} autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" onChange={handleChange} onBlur={handleBlur} />
                                            </div>
                                        </div>

                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" onChange={handleChange} onBlur={handleBlur} />
                                                <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
                                            </div>

                                            <div class="text-sm">
                                                <a href="#" class="font-medium text-sky-600 hover:text-sky-500"> Forgot your password? </a>
                                            </div>
                                        </div>

                                        <div>
                                            <button type="submit" disabled={isSubmitting} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                                    <svg class="h-5 w-5 text-gray-200 group-hover:text-slate-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                                LOGIN
                                            </button>
                                        </div>
                                    </form>)}
                            </Formik>

                        </div>

                    </div>
                </DialogContent>

            </Dialog>
        </div>
    );
}
