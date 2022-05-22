import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Grid,
  Divider,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthAPI from "../../../shared/apis/AuthAPI";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import { SnackbarContext } from "../../../shared/contexts/SnackbarContext";
import backgroundUrl from "/images/authBackground.png";
import { LoadingContext } from "../../../shared/contexts/LoadingContext";
import { PhoneRounded, Visibility, VisibilityOff } from "@mui/icons-material";

const SignupPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { snackbarDispatch } = useContext(SnackbarContext);
  const history = useHistory();
  const { loadingDispatch } = useContext(LoadingContext);

  const signupHandler = async (event) => {
    event.preventDefault();
    loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: true } });
    await AuthAPI.signup(
      { firstname, lastname, contactNo, email, password },
      (isSuccess) => {
        loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
        history.push({ pathname: "/login", state: { toVerify: isSuccess } });
      },
      (message) => {
        loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
        snackbarDispatch({
          type: "SET_PARAMS",
          payload: {
            message: message,
            isOpen: true,
            severity: "error",
          },
        });
      }
    );
  };

  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item xs={0} md={6} sx={{ display: { xs: "none", md: "block" } }}>
        <img
          src={backgroundUrl}
          alt="Background image"
          style={{ height: "100%", objectFit: "cover", width: "100%" }}
        />
      </Grid>
      <Grid item xs={0} md={6}>
        <Stack
          component="form"
          spacing={2}
          noValidate
          autoComplete="off"
          alignItems="center"
          justifyContent="center"
          sx={{ margin: { xs: "0 2rem", md: "0 6rem" }, height: "100%" }}
        >
          <Typography variant="h3" sx={{ marginBottom: "1.5rem" }}>
            Sign up for an account
          </Typography>
          <TextField
            id="firstname"
            label="First Name"
            type="text"
            variant="outlined"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            fullWidth={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: "#f1effb" }}
          />
          <TextField
            id="lastname"
            label="Last Name"
            type="text"
            variant="outlined"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            fullWidth={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: "#f1effb" }}
          />
          <TextField
            id="contactNo"
            label="Contact No."
            type="number"
            variant="outlined"
            onChange={(e) => setContactNo(e.target.value)}
            value={contactNo}
            fullWidth={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneRounded />
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: "#f1effb" }}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            fullWidth={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: "#f1effb" }}
          />
          <TextField
            id="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            fullWidth={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: "#f1effb" }}
          />
          <Button
            variant="contained"
            size="large"
            onClick={signupHandler}
            fullWidth
          >
            SIGNUP
          </Button>
          <Divider sx={{ width: "100%" }} />
          <Button
            variant="contained"
            size="large"
            onClick={() => history.push("/login")}
            fullWidth
          >
            Already have an Account?
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SignupPage;
