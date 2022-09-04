import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Button from '@mui/material/Button';
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
const Login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showUser, setShowUser] = useState(false);

  const handleSubmit = (e) => {
    setShowUser(false);
    e.preventDefault();
    if (validateEmail(email)) {
      console.log(showUser && email);
      setShowUser(true);
      setError("");
      console.log(showUser && email);
      return;
    }
    setError("Email is not valid");
    return false;
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setShowUser(false);
  };

  return (
    <div>
      <h2>We will Test the Login Form Component</h2>
      <Stack sx={{ width: "50%", marginLeft: "25%" }} spacing={2}>
        {showUser && (
          <Alert data-testid="user" severity="success">
            {email}
          </Alert>
        )}
        {error && (
          <Alert data-testid="error" severity="error">
            {error}
          </Alert>
        )}
      </Stack>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch", "& button": { m: 1 } },
        }}
        noValidate
        onSubmit={handleSubmit}
        method="Get"
        autoComplete="off"
      >
        <div>
          <TextField
            id="email"
            label="Email"
            type="text"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
          />
        </div>
        <div>
          <TextField
            size="medium"
            data-testid="submit"
            type="submit"
            disabled={Password === ""}
          />

          <TextField
            size="medium"
            data-testid="reset"
            onClick={resetForm}
            type="reset"
          />
        </div>
      </Box>
    </div>
  );
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (regex.test(email)) {
    return true;
  }
  return false;
};

export default Login;
