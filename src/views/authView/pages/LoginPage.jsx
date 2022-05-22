import {
  Box,
  Button,
  Stack,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Grid,
  Divider,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AuthAPI from "../../../shared/apis/AuthAPI";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../shared/contexts/AuthContext";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import { useLocation } from "react-router-dom";
import { SnackbarContext } from "../../../shared/contexts/SnackbarContext";
import backgroundUrl from "/images/authBackground.png";
import { LoadingContext } from "../../../shared/contexts/LoadingContext";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PasswordResetModal from "../components/PasswordResetModal";

const LoginPage = () => {
  const auth = useContext(AuthContext);
  const { snackbarDispatch } = useContext(SnackbarContext);
  const { loadingDispatch } = useContext(LoadingContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [showResendVerification, setShowResendVerification] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const loginHandler = async (event) => {
    loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: true } });
    event.preventDefault();
    const response = await AuthAPI.login(
      email,
      password,
      auth.login,
      (message) => {
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
    if (response.status === 403) {
      console.log("reached");
      setShowResendVerification(true);
    }
    loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
    history.push("/");
  };

  const verificationHandler = async () => {
    loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: true } });
    await AuthAPI.resendConfirmation(
      email,
      (message) => {
        snackbarDispatch({
          type: "SET_PARAMS",
          payload: {
            message: message,
            isOpen: true,
            severity: "info",
          },
        });
      },
      (message) => {
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
    loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
  };

  const handleOpen = (scrap) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const passwordResetHandler = async (email) => {
    handleClose();
    loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: true } });
    const response = await AuthAPI.sendResetPassword(
      email,
      () => {
        snackbarDispatch({
          type: "SET_PARAMS",
          payload: {
            message: "Password reset link has been sent into your email.",
            isOpen: true,
            severity: "success",
          },
        });
      },
      (message) => {
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
    if (response.status === 403) {
      console.log("reached");
      setShowResendVerification(true);
    }
    loadingDispatch({ type: "SET_PARAMS", payload: { isOpen: false } });
  };

  useEffect(() => {
    if (location.state?.toVerify) {
      snackbarDispatch({
        type: "SET_PARAMS",
        payload: {
          message: "Open verification email sent to you before logging in.",
          isOpen: true,
          severity: "info",
        },
      });
    }
  }, []);

  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item xs={0} md={6} sx={{ display: { xs: "none", md: "block" } }}>
        <img
          src={backgroundUrl}
          alt="Background image"
          style={{ height: "100%", objectFit: "cover", width: "100%" }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack
          component="form"
          spacing={2}
          noValidate
          autoComplete="off"
          alignItems="center"
          justifyContent="center"
          sx={{ margin: { xs: "0 2rem", md: "0 6rem" }, height: "100%" }}
        >
          <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
            Sign in
          </Typography>
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
            onClick={loginHandler}
            fullWidth
          >
            LOGIN
          </Button>
          <Button variant="text" onClick={handleOpen}>
            Forgot Password?
          </Button>
          {showResendVerification && (
            <Button variant="text" onClick={verificationHandler}>
              Resend Email Verification
            </Button>
          )}
          <Divider sx={{ width: "100%" }} />
          <Button
            variant="contained"
            size="large "
            onClick={() => history.push("/signup")}
            fullWidth
          >
            Create an Account
          </Button>
        </Stack>
      </Grid>
      <PasswordResetModal
        open={open}
        handleClose={handleClose}
        handleSubmit={passwordResetHandler}
      />
    </Grid>
  );
};

export default LoginPage;
