import {
  Lock,
  PersonRounded,
  PhoneRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import UserAPI from "../../../shared/apis/UserAPI";
import { AuthContext } from "../../../shared/contexts/AuthContext";
import { LoadingContext } from "../../../shared/contexts/LoadingContext";
import { SnackbarContext } from "../../../shared/contexts/SnackbarContext";

const SettingsPage = () => {
  const { userId, firstname, lastname, contactNo, updateLocalUserData } =
    useContext(AuthContext);
  const [newFirstName, setFirstName] = useState(firstname);
  const [newLastName, setLastName] = useState(lastname);
  const [newContactNo, setContactNo] = useState(contactNo);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { snackbarDispatch } = useContext(SnackbarContext);
  const { loadingDispatch } = useContext(LoadingContext);

  const editAccountHandler = () => {
    UserAPI.editAccount(
      {
        firstname: newFirstName,
        lastname: newLastName,
        contactNo: newContactNo,
      },
      loadingDispatch,
      snackbarDispatch,
      () => {
        updateLocalUserData(newFirstName, newLastName, newContactNo);
      },
      userId
    );
  };

  const editPasswordHandler = () => {
    if (confirmPassword === newPassword) {
      UserAPI.changePassword(
        newPassword,
        loadingDispatch,
        snackbarDispatch,
        userId
      );
    } else {
      snackbarDispatch({
        type: "SET_PARAMS",
        payload: {
          message: "New Password and Confirm Password not match",
          isOpen: true,
          severity: "error",
        },
      });
    }
  };

  return (
    <Container sx={{ marginTop: "1rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title="Edit Profile"
              sx={{ backgroundColor: "primary.light" }}
            />
            <CardContent>
              <Stack
                component="form"
                spacing={2}
                noValidate
                autoComplete="off"
                alignItems="center"
                justifyContent="center"
                sx={{ margin: { xs: "0 2rem", md: "0 6rem" }, height: "100%" }}
              >
                <TextField
                  id="firstName"
                  label="First Name"
                  type="text"
                  variant="outlined"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={newFirstName}
                  fullWidth={true}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonRounded />
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
                  onChange={(e) => setLastName(e.target.value)}
                  value={newLastName}
                  fullWidth={true}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonRounded />
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
                  value={newContactNo}
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
                <Button variant="contained" onClick={editAccountHandler}>
                  Save Changes
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title="Edit Profile"
              sx={{ backgroundColor: "primary.light" }}
            />
            <CardContent>
              <Stack
                component="form"
                spacing={2}
                noValidate
                autoComplete="off"
                alignItems="center"
                justifyContent="center"
                sx={{ margin: { xs: "0 2rem", md: "0 6rem" }, height: "100%" }}
              >
                <TextField
                  id="newPassword"
                  label="New Password"
                  type={showNewPassword ? "text" : "password"}
                  variant="outlined"
                  onChange={(e) => setNewPassword(e.target.value)}
                  value={newPassword}
                  fullWidth={true}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ backgroundColor: "#f1effb" }}
                />
                <TextField
                  id="confirmPassword"
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  variant="outlined"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  fullWidth={true}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ backgroundColor: "#f1effb" }}
                />
                <Button variant="contained" onClick={editPasswordHandler}>
                  Save Changes
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SettingsPage;
