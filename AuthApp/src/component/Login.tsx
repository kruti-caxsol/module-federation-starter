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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { setAuthToken } from "services/AuthUtils";
import useAuthStore from "./store.tsx";

interface LoginData {
  getToken: string;
}

const LOGIN_MUTATION = gql`
  mutation GetToken($username: String!, $password: String!) {
    getToken(username: $username, password: $password)
  }
`;

function LoginCard() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const setZustandToken = useAuthStore((state) => state.setAuthToken);
  const authToken = useAuthStore((state) => state.authToken);
  console.log(authToken, "abc");
  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data: LoginData) => {
      const token = data.getToken;
      localStorage.setItem("authToken", token);
      setZustandToken(token);
      navigate("/dashboard");
    },
    onError: (err) => {
      setError(err.message);
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const random = await login({
        variables: {
          username: email,
          password,
        },
      });
      if (random.data) {
        setAuthToken(random.data.getToken);
      }
    } catch (err) {
      setError("Failed to log in");
    }
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
          Sign in
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
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
          {error && <Typography color="error">{error}</Typography>}
          <Grid container>
            <Grid item>
              <Typography
                onClick={() => {
                  // navigate("/register")
                }}
                sx={{ color: "#1769aa", fontSize: "14px", cursor: "pointer" }}
              >
                Do not have an account? Sign Up
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginCard;
