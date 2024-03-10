import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLogin:false,
  }
export const SliceLogin= createSlice({
    name: 'login',
    initialState,
    reducers: {
     setIsLogin(state,action){
        state.isLogin=action.payload;
     }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {setIsLogin} = SliceLogin.actions
  
  export default SliceLogin.reducer