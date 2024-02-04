import logo from "../../public/images/logo.png";
import { Box, TextField, Button } from "@mui/material";
import "../../App.css";
import { useContext, useState } from "react";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

function Login() {
  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, setError] = useState(null);
  const [login, setLogin] = useState(loginInitialValues);

  const { setUser } = useContext(DataContext);
  const navigate = useNavigate();
  const handleCreateAccount = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onInputChange = (evt) => {
    setSignup({ ...signup, [evt.target.name]: evt.target.value });
  };

  const onValueChange = (evt) => {
    setLogin({ ...login, [evt.target.name]: evt.target.value });
  };

  const signupUser = async () => {
    if (
      signup.name.trim() === "" ||
      signup.username.trim() === "" ||
      signup.password.trim() === ""
    ) {
      setError("Please fill in all fields properly.");
      return;
    }

    try {
      let res = await API.userSignup(signup);
      if (res.isSuccess) {
        setError(null);
        setSignup(signupInitialValues);
        toggleAccount("login");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error during signup API call:", error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  const handleLogin = async () => {
    if (login.username.trim() === "" || login.password.trim() === "") {
      setError("Please fill in all fields properly");
      return;
    }
    try {
      let res = await API.userLogin(login);
      if (res.isSuccess) {
        setError(null);
        setLogin(loginInitialValues);
        sessionStorage.setItem("accessToken", `Bearer ${res.data.accessToken}`);
        sessionStorage.setItem(
          "refreshToken",
          `Bearer ${res.data.refreshToken}`
        );
        setUser({ username: res.data.username, name: res.data.name });
        navigate("/");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error during signup API call:", error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <Box className="login-container">
      <img src={logo} alt="login" />
      {account === "login" ? (
        <div className="login-inputs">
          <TextField
            variant="standard"
            placeholder="enter username"
            name="username"
            value={login.username}
            onChange={onValueChange}
          />
          <TextField
            variant="standard"
            placeholder="enter password"
            name="password"
            type="password"
            value={login.password}
            onChange={onValueChange}
          />
          {error && <p>{error}</p>}
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          <Button onClick={handleCreateAccount}>Create an account</Button>
        </div>
      ) : (
        <div className="login-inputs">
          <TextField
            variant="standard"
            onChange={onInputChange}
            placeholder="enter name"
            name="name"
            type="text"
          />
          <TextField
            variant="standard"
            onChange={onInputChange}
            placeholder="enter username"
            name="username"
            type="text"
          />
          <TextField
            variant="standard"
            onChange={onInputChange}
            placeholder="enter password"
            name="password"
            type="password"
          />
          {error && <p>{error}</p>}
          <Button variant="contained" onClick={signupUser}>
            Sign-Up
          </Button>
          <Button onClick={handleCreateAccount}>Already have an account</Button>
        </div>
      )}
    </Box>
  );
}

export default Login;
