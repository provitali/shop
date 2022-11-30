import { createSlice} from "@reduxjs/toolkit";


 const userSlice=createSlice({

    name:"countsum",
    initialState:{value:[]},
    reducers:{
       
        addCountSum:(state,action)=>{state.value.push(action.payload);},




    }

})


export default userSlice.reducer;
export const{addCountSum}=userSlice.actions;