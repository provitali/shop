import { createSlice} from "@reduxjs/toolkit";


export const userSlice=createSlice({
   
     name:"counters",
     initialState:{value:[]},
     reducers:{
       addCounter:(state,action)=>{state.value.push(action.payload);},

       deleteCounter:(state,action)=>{state.value=state.value.filter(counter=>counter.id!==action.payload.id)}

     },




});

export const {addCounter,deleteCounter}=userSlice.actions;
export default userSlice.reducer;