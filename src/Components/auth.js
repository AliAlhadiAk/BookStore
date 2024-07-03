import { createSlice } from "@reduxjs/toolkit";
import { CgLogOut } from "react-icons/cg";


const authSlice = createSlice({
    name:"auth",
    initialState:{isloggedIn:false,role:"USER"},
    reducers:{
        login(state){
            state.isloggedIn=true
        },
        logout(state){
            state.isloggedIn=false
        },
        changeRole(state,action){
            const role = action.payload
            state.role = role;
        }
    }
});
export const authActions = authSlice.actions;
export default authSlice.reducer