import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Field } from 'formik';
import axios from 'axios';

function Firmdetail() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleLoginProcess = (values) => {
        alert(values);
        console.log("data",values)
        axios.put('http://localhost:3000/firmDetail/1', values)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
            .then(function () {

            });
    }
    return (
        <>
            <div >
                <Button variant="outlined" onClick={handleClickOpen} >
                  FIRM DETAIL
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogContent>
                          <div>
                                <h2 class="mt-6 text-center text-3xl font-extrabold text-sky-600">FIRM DETAIL</h2>
                               
                            </div>
                        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                            <div class="max-w-md w-full space-y-8">
                              
                                <Formik
                                    initialValues={{ firmName: '', holdingNo: '', wardNo: '', estbDate: '' }}

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
                                                <div class="md:flex md:items-center mb-6">
                                                    <div class="md:w-1/3">
                                                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                                                        FIRM NAME
                                                        </label>
                                                    </div>
                                                    <div class="md:w-2/3">
                                                        <input  onChange={handleChange} onBlur={handleBlur} name="firmName" value={values.firmName} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text"  />
                                                    </div>
                                                </div>
                                                <div class="md:flex md:items-center mb-6">
                                                    <div class="md:w-1/3">
                                                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                                                        HOLDING NO.
                                                        </label>
                                                    </div>
                                                    <div class="md:w-2/3">
                                                        <input  onChange={handleChange} onBlur={handleBlur} name="holdingNo" value={values.holdingNo} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text"  />
                                                    </div>
                                                </div><br/>
                                                
                                                <div class="md:flex md:items-center mb-6">
                                                <div class="md:w-1/3">
                                                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                                                        WARD NO.
                                                        </label>
                                                </div>        
                                                <div  class="md:w-2/3">
                                                <div class="relative">
                                                    <Field as="select" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="wardNo" placeholder="ward no.">
                                                        <option>select</option>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                    </Field>
                                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                    </div>
                                                </div>
                                                </div>
                                                </div>
                                               
                                                <div>
                                                <div class="md:flex md:items-center mb-6">
                                                    <div class="md:w-1/3">
                                                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                                                        FIRM ESTABLISHMENT DATE
                                                        </label>
                                                    </div>
                                                    <div class="md:w-2/3">
                                                        <input  onChange={handleChange} onBlur={handleBlur} name="estbDate" value={values.estbDate} class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="date"  />
                                                    </div>
                                                </div>
                                                   
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
                                        </form>
                                    )}
                                </Formik>

                            </div>

                        </div>
                    </DialogContent>

                </Dialog>
            </div>

        </>
    )
}

export default Firmdetail