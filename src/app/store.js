import { createUserWithEmailAndPassword } from "firebase/auth";
import authSlice from "./features/authSlice";
const { configureStore, createAsyncThunk } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        auth:authSlice
    }

})

export default store