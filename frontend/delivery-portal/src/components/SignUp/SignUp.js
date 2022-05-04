import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const axios = require('axios').default;

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
const BASE_URL = "http://localhost:5000/api/delivery/auth"
export default function SignUp() {
  const [city, setCity] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let body = {
      email: data.get('email'),
      password: data.get('password'),
      pincode: document.getElementById('pincode').value
    }
    console.log(body)
    axios.post(BASE_URL+"/registerRider", body)
    .then(response => {
      console.log(response);
    }).catch(function (error) {
      // handle error
      console.log(error);
    })
  };

  const fetchCity = async (event)=>{
    event.preventDefault();
    axios.get("https://api.postalpincode.in/pincode/"+ document.getElementById("pincode").value)
  .then(function (response) {
    // handle success
    setCity(response.data[0].PostOffice[0].District);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type={"tel"}
                  maxLength={"6"}
                  id="pincode"
                  label="Pincode"
                  name="Pincode"
                  inputProps={
                    {maxLength: 6}
                  }
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" onClick={(e)=>fetchCity(e)}>Fetch City</Button>
              </Grid>

              <Grid item xs={12} sm={10}>
                <TextField
                  required
                  fullWidth
                  placeholder='city'
                  id="city"
                  name="City"
                  value={city}
                  autoComplete="family-name"
                  disabled
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}