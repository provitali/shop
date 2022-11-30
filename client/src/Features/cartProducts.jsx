import { createSlice } from "@reduxjs/toolkit";





const userSlice=createSlice({
       
       name:"cartproducts",
       initialState:{value:[]},
       reducers:{

          addCartProducts:(state,action)=>{state.value.push(action.payload);},

          deleteCartProducts:(state,action)=>{state.value=state.value.filter(product=>product.id!==action.payload.id)}

       }    





})

export default userSlice.reducer;
export const {addCartProducts,deleteCartProducts}=userSlice.actions;