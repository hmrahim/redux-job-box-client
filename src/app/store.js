import { createUserWithEmailAndPassword } from "firebase/auth";
import authSlice from "./features/authSlice";
import apiSlice from "./features/apiSlice";
const { configureStore, createAsyncThunk, getDefaultMiddleware } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        auth:authSlice
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware)

})

export default store