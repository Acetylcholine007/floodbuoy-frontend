import { createTheme, ThemeProvider } from "@mui/material";
import { indigo, amber } from "@mui/material/colors";

import AuthContextProvider from "./shared/contexts/AuthContext";
import { useAuth } from "./shared/hooks/useAuth";
import MainContainer from "./containers/MainContainer";
import AuthContainer from "./containers/AuthContainer";
import SnackbarContextProvider from "./shared/contexts/SnackbarContext";
import LoadingContextProvider from "./shared/contexts/LoadingContext";

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: amber,
  },
});

function App() {
  const {
    token,
    login,
    logout,
    userId,
    accountType,
    lastname,
    firstname,
    contactNo,
    defaultBuoy,
    updateLocalUserData
  } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <SnackbarContextProvider>
        <LoadingContextProvider>
          <AuthContextProvider
            value={{
              isLoggedIn: !!token,
              token: token,
              userId: userId,
              accountType: accountType,
              lastname: lastname,
              firstname: firstname,
              contactNo: contactNo,
              defaultBuoy: defaultBuoy,
              login: login,
              logout: logout,
              updateLocalUserData: updateLocalUserData
            }}
          >
            {!!token && <MainContainer />}
            {!token && <AuthContainer />}
          </AuthContextProvider>
        </LoadingContextProvider>
      </SnackbarContextProvider>
    </ThemeProvider>
  );
}

export default App;
