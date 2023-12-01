import { RouterProvider, useOutlet } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import auth from "./firebase.config";
import { setUser, toggleLoading } from "./app/features/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
       
      }else{
        dispatch(toggleLoading())
      }
    })
  }, []);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
