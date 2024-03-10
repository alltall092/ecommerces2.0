import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    products:[],
    productId:null,
  }
export const DetallesSlice= createSlice({
    name: 'detalles',
    initialState,
    reducers: {
     setProducts(state,action){
        state.products=action.payload;
     },
    


     setProductById(state,action){
const productById=state.products.filter(x=>x.id===action.payload.id);
state.productId=productById;

     }
    },
  })
  export const getProductsById=()=>dispatch=>{
    axios.get('http://localhost:8000/api/v1/products/').then(res=>
    dispatch(setProducts(res.data.flat()))).catch(error=>console.log(error.response))

}
  // Action creators are generated for each case reducer function
  export const {setProducts,setProductById,setProductId} = DetallesSlice.actions
  
  export default DetallesSlice.reducer