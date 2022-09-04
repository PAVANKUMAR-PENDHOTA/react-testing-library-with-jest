import React,{useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Button from '@mui/material/Button';
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
// import { validateEmail } from './Login';

const Registration = () => {

    const [userName, setUserName]=useState();
    const [mobile, setMobile]=useState();
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const [confPassword, setConfPassword]=useState();
    const [error, setError]=useState();
    const [showUser, setShowUser]=useState(false);

    const handleSubmit= (e)=>{
        setShowUser(false);
        e.preventDefault();
        if(validateEmail(email) && password == confPassword){
            setShowUser(true);
            setError("");
            // console.log(email);
        }
        else{
                setError("email is not valid");
                setShowUser(false);
        }
    }

    const resetForm = () =>{
        setUserName("");
        setMobile("");
        setEmail("");
        setPassword("");
        setConfPassword("");
        setShowUser(false);
    }

  return (
    <div>
        <h2>We will Test the Registration Form Component</h2>
      <Stack sx={{ width: "50%", marginLeft: "25%" }} spacing={2}>
        {showUser && (
          <Alert data-testid="user1" severity="success">
          {email}
          </Alert>
          
        )}
        {error && (
          <Alert data-testid="error1" severity="error">
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
            id="userName"
            label="UserName"
            type="text"
            autoComplete="off"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </div>

        <div>
          <TextField
            id="mobile"
            label="Mobile"
            type="text"
            autoComplete="off"
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
          />
        </div>

        <div>
          <TextField
            id="email1"
            label="Email"
            type="text"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <TextField
            id="password1"
            label="Password"
            type="password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <TextField
            id="confirmPassword"
            label="ConfirmPassword"
            type="password"
            autoComplete="off"
            onChange={(e) => setConfPassword(e.target.value)}
            value={confPassword}
          />
        </div>
        <div>
          <TextField
            size="medium"
            data-testid="submit"
            type="submit"
            // disabled={password === ""}
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
}

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (regex.test(email)) {
      return true;
    }
    return false;
  };

export default Registration
