// import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent } from "react";
// import { getAuthToken, setAuthToken } from "@hr/services";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  //   const REGISTER_USER = gql`
  //     mutation RegisterUser($username: String!, $password: String!) {
  //       signup(username: $username, password: $password)
  //     }
  //   `;

  //   const [registerUser, response] = useMutation(REGISTER_USER);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // registerUser({
    //   variables: {
    //     username: data.get("email"),
    //     password: data.get("password"),
    //   },
    //   onCompleted: (data: any) => {
    //     if (data?.login) {
    //     //   setAuthToken(data.login);
    //     }
    //     alert('Registered successfully')
    //     navigate("/auth/login");
    //   },
    //   onError: (error) => {
    //     alert(error)
    //   }
    // });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ height: "70vh" }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
          borderRadius: 2,
          background: "#edf4f4",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs />
            <Grid item>
              <Typography
                onClick={() => {
                  navigate("/login");
                }}
                sx={{ color: "#1769aa", fontSize: "14px", cursor: "pointer" }}
              >
                Already have an account? Sign In.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
