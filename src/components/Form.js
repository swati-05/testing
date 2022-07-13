import React from 'react';
import { Formik, Field } from 'formik';
import axios from 'axios';
const Form = () => {

  const urlstr = 'http://localhost:3333/posts';
  const handlePost = (values) => {

    axios.post(urlstr, values)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  return (
    <>

      <h1 class="text-3xl font-bold underline text-center text-cyan-700">
        API DOCUMENT INTERFACE
      </h1>
      <div className='ml-96 bg-slate-400 w-max px-8'>
        <Formik
          initialValues={{ category: '', revision: '', preCondition: '', postCondition: '', exepectedPayload: '', response: '', url: '', response: '',discontinueCheck:'',continueCheck:''}}
         
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              handlePost(values)

              setSubmitting(false);
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


            <form class="w-full max-w-lg py-12" onSubmit={handleSubmit}>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Category
                  </label>
                  <div class="relative">
                    <Field as="select" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name="category">
                      <option>Category</option>
                      <option>Trade</option>
                      <option>Water</option>
                      <option>Property</option>
                    </Field>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    REVISION NO.
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="revision" name="revision" placeholder=" Revision no      " onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.revision} />
                  <p class="text-red-500 text-xs italic"></p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    PRE CONDITION
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="preCondition" name="preCondition" placeholder=" Pre Condition"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.preCondition} />
                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    POST CONDITION
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="postCondition" name="postCondition" placeholder=" Post Condition"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.postCondition} />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    EXPECTED PAYLOAD
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="exepectedPayload" name="exepectedPayload" placeholder="Expected Payload"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.exepectedPayload} />

                </div>
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    RESPONSE FORMAT
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="response" name="response" placeholder="Response Format"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.response} />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    API URL
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="url" name="url" placeholder="http://localhost"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.url}
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    REMARK
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="remark" name="remark" placeholder="Remark"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.remark}
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    CREATED ON
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="date" name="createdOn" placeholder="Created On" />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    CREATED BY
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="date" name="createdBy" placeholder=" Created By" />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    VERSION
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" name="version" placeholder="Version"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3 py-5">
                  <button class=" text-3xl font-bold bg-cyan-200 hover:bg-cyan-600 px-2.5" type="submit" disabled={isSubmitting}>SUBMIT</button>
                </div>
              </div>
              <div class="flex justify-left">
                <div class="form-check">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="discontinueCheck" name="discontinueCheck" id="flexCheckIndeterminate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="1"
                  />
                  <label class="form-check-label inline-block text-gray-800">
                    DISCONTINUE
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="continueCheck" name="continueCheck" id="flexCheckIndeterminate"
                   onChange={handleChange}
                    onBlur={handleBlur}
                    value="0" />
                  <label class="form-check-label inline-block text-gray-800">
                    CONTINUE
                  </label>
                </div>
              </div>

            </form>

          )}
        </Formik>
      </div>
    </>
  )
};

export default Form;