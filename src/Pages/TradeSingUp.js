import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik } from 'formik';
import axios from 'axios';

export default function TradeSingUp() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleLoginProcess =(values) =>{
        alert(values);
        console.log(values)
        axios.post('http://localhost:3000/user', values)
    .then (function(response){
     console.log(response)
    })
    .catch(function (error){
      console.log(error)
    })
    .then (function (){

    });
    }
    

    return (
        <div >
            <Button variant="outlined" onClick={handleClickOpen} >
                Register
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>

                    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div class="max-w-md w-full space-y-8">
                            <div>
                                <img class="mx-auto h-20 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png" alt="Workflow" />
                                <h2 class="mt-6 text-center text-3xl font-extrabold text-sky-600">Create new account</h2>
                                <p class="mt-2 text-center text-sm text-gray-600">
                                    {/* Or
                                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a> */}
                                </p>
                            </div>
                            <Formik
                                initialValues={{ username: '', password: '', confirmpassword: ''}}
                               
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);

                                        handleLoginProcess(values)
                                    }, 400);
                                    
                                    // Formik.resetForm();
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
                                                <label for="username" class="sr-only">Name</label>
                                                <input id="text" name="username" type="text"  value={values.username} required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="name " onChange={handleChange} onBlur={handleBlur} />
                                            </div>
                                            <div>
                                                <label for="password" class="sr-only">Password</label>
                                                <input id="password" name="password" type="password" value={values.password} autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" onChange={handleChange} onBlur={handleBlur} />
                                            </div>
                                            <div>
                                                <label for="password" class="sr-only">Confirm Password</label>
                                                <input id="password" name="confirmpassword" type="password" value={values.confirmpassword} autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="confirmpassword" onChange={handleChange} onBlur={handleBlur} />
                                            </div>
                                        </div>                          
                                        <div>
                                            <button type="submit" disabled={isSubmitting} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
                                                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                                    <svg class="h-5 w-5 text-gray-200 group-hover:text-slate-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                              Save
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
