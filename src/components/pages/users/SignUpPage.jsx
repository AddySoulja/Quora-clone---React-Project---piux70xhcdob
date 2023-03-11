import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { SignUp } from "../../firebase/userAuthMethods/UserAuth";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./User.css";
import { addUser } from "../../firebase/firebaseMethods";
import {
  emailRegex,
  handleMouseDownPassword,
  passwordRegex,
  usernameRegex,
} from "./form-utils";

const initialError = {
  username: "",
  email: "",
  password: "",
};

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [usernameValue, setUsernameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState(initialError);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(initialError);

    let isValid = true;

    if (!usernameRegex.test(usernameValue)) {
      setError((prevState) => {
        return { ...prevState, username: "Username is invalid" };
      });

      isValid = false;
    }

    if (!emailRegex.test(emailValue)) {
      setError((prevState) => {
        return { ...prevState, email: "E-mail is invalid" };
      });

      isValid = false;
    }

    if (!passwordRegex.test(passwordValue) || passwordValue.length < 6) {
      setError((prevState) => {
        return {
          ...prevState,
          password:
            "Password must be alpha-numeric and at least 6 characters long",
        };
      });

      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const user = await SignUp(emailValue, passwordValue);
    await addUser(user.user.uid, {
      username: usernameValue,
      email: emailValue,
    });
    navigate("/log-in");
  };

  return (
    <div className="user-page-layout">
      <div className="login-signup-layout">
        <h1 style={{ lineHeight: 0 }}>Sign Up</h1>
        <h5>Quora clone by Aditya Kumar</h5>
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ m: 1, width: "40ch" }} variant="standard">
            <TextField
              error={error.username !== ""}
              id="filled-error-helper-text"
              label="Username"
              helperText={error.username}
              variant="standard"
              autoFocus={true}
              color="secondary"
              value={usernameValue}
              onChange={(e) => setUsernameValue(e.target.value)}
            />
            <TextField
              error={error.email !== ""}
              id="filled-error-helper-text"
              label="E-Mail"
              helperText={error.email}
              variant="standard"
              required
              color="secondary"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              type="email"
              sx={{ marginTop: "12px" }}
            />
            <Input
              id="standard-adornment-password"
              color="secondary"
              error={error.password !== ""}
              value={passwordValue}
              helperText={error.password}
              onChange={(e) => setPasswordValue(e.target.value)}
              sx={{ marginTop: "18px" }}
              label="Password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <Button
              sx={{ width: "120px", margin: "auto", marginTop: "30px" }}
              color="secondary"
              variant="contained"
              type="submit"
            >
              SIGN UP
            </Button>
          </FormControl>
        </form>
        <h4>
          Already have an account? <Link to="/log-in">Log in here!</Link>
        </h4>
      </div>
    </div>
  );
};

export default SignUpPage;
