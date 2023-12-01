import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";



const initialState= {
    email:"",
    role:"",
    isLoading:true,
    isError:false,
    error:""

}

export const createUser = createAsyncThunk("auth/createUser", async({email,password})=>{
    const data = await createUserWithEmailAndPassword(auth,email,password)
    return data.user.email
})
export const loginUser = createAsyncThunk("auth/loginUser", async({email,password})=>{
    const data = await signInWithEmailAndPassword(auth,email,password)
    return data.user.email
})

const authSlice = createSlice({
name:"auth",
initialState,
reducers:{
    logout:(state,action)=> {
        state.email= ""
    },
    setUser: (state,action)=> {
        state.email = action.payload
        state.isLoading = false
    },
    toggleLoading:(state)=> {
        state.isLoading=false
    }

},
extraReducers:(builder)=> {
    builder
    .addCase(createUser.pending,(state,action)=>{
        state.isLoading= true
        state.isError = false
        state.error = ""
    })
    .addCase(createUser.fulfilled,(state,action)=>{
        state.isLoading= false
        state.email = action.payload
        state.isError = false
        state.error = ""
    })
    .addCase(createUser.rejected,(state,action)=>{
        state.isLoading= false
        state.isError = true
        state.email = ""
        state.error = action.error.messages
    })
    .addCase(loginUser.pending,(state,action)=>{
        state.isLoading= true
        state.isError = false
        state.error = ""
    })
    .addCase(loginUser.fulfilled,(state,action)=>{
        state.isLoading= false
        state.email = action.payload
        state.isError = false
        state.error = ""
    })
    .addCase(loginUser.rejected,(state,action)=>{
        state.isLoading= false
        state.isError = true
        state.email = ""
        state.error = action.error.messages
    })

}

})


export const {logout,setUser,toggleLoading} = authSlice.actions

export default authSlice.reducer