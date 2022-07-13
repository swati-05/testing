import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App1 from './App1';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import useReducer from "./features/User";
import themeReducer from "./features/Theme"
import ProfileDemoReducer from './features/ProfileDemo';
import { BrowserRouter } from "react-router-dom";

// import App2 from './App2';
import App3 from './App3';

const store = configureStore({
  reducer: {
    user: useReducer,
    theme: themeReducer,
    profile: ProfileDemoReducer,
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}

      {/* <App /> */}
      {/* <App1 /> */}
      {/* <App2 /> */}
      <Provider store={store}>
    
    <App3 />
  
 
  </Provider>
  
  
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
