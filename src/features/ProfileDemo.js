import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {height:0,age:0,weight:0}
 
 export const profileSlice = createSlice({
    name:"profile",
    initialState:{value:initialStateValues},
    reducers:{
        property: (state, action) =>{
         state.value=action.payload;
        },
    },
 });
 export const {property} = profileSlice.actions

 export default profileSlice.reducer  