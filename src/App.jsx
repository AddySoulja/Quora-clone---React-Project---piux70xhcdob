import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";
import Error from "./components/pages/Error/Error";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { logInUser, logOutUser } from "./components/redux/slices/userAuth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase/firebase";
import "./App.css";
import ProtectedRoute from "./components/pages/protected-routes/ProtectedRoute";
import LoginPage from "./components/pages/users/LogInPage";
import SignUpPage from "./components/pages/users/SignUpPage";
import AddQuestion from "./components/pages/add-a-question/AddQuestion";
import AnsQuestion from "./components/pages/ans-a-question/AnsQuestion";
//------------------------------------------------------------------------//
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ProtectedRoute>
      // </ProtectedRoute>
      <Homepage />
    ),
  },
  {
    path: "/log-in",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/add-a-question",
    element: (
      // <ProtectedRoute>
      // </ProtectedRoute>
      <AddQuestion />
    ),
  },
  {
    path: "/answer-a-question",
    element: (
      // <ProtectedRoute>
      // </ProtectedRoute>
      <AnsQuestion />
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
]);
//--------------------------------------------------------------------------//
const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const handleAuthState = (user) => {
  //     if (user) {
  //       dispatch(
  //         logInUser({
  //           username: user.username,
  //           email: user.email,
  //           password: user.password,
  //         })
  //       );
  //       return;
  //     }
  //     dispatch(logOutUser());
  //   };
  //   const logOut = onAuthStateChanged(auth, handleAuthState);
  //   return () => logOut();
  // }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
