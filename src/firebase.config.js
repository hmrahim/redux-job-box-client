
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGgSqK1H1NiASZLNEFJFNax_ELuuvUym0",
  authDomain: "job-box-9365d.firebaseapp.com",
  projectId: "job-box-9365d",
  storageBucket: "job-box-9365d.appspot.com",
  messagingSenderId: "977930156464",
  appId: "1:977930156464:web:9abb4c1a45fa98089e7e75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth