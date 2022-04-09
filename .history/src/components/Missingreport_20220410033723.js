import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
export class Missingreport extends Component {
  state = {};
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
//       <Grid container spacing={3}>
//       <div className="page">
//         <div className="col-sm-3">
//           <h1 className="heading">Add your Image</h1>
//           <div className="img-holder">
//             <img src={profileImg} alt="" id="img" className="img" />
//           </div>
//           <input
//             type="file"
//             accept="image/*"
//             name="image-upload"
//             id="input"
//             onChange={this.imageHandler}
//           />
//           <div className="label">
//             <label className="image-upload" htmlFor="input">
//               <i className="material-icons">add_photo_alternate</i>
//               Choose your Photo
//             </label>
//           </div>
          
//         </div>
//         </div>
       
//         <Grid item xs={12} md={6} sx={{padding:"100px" }}>
//           <TextField
//             required
//             id="Name"
//             label="Name "
//             fullWidth
//             autoComplete=""
//             variant="standard"
//           />
//         </Grid>
// {/*         
//         <div className="col-sm-6">
//         <form>
//           <input type="text" name="first name" placeholder=" First Name" />
//           <input type="text" name="last name" placeholder=" Last Name" />
//           <input type="text" name="Age" placeholder="Age" />
//           <input type="text" name="Gender" placeholder="Gender" />
//           <input type="number" name="Phone" placeholder="Phone number" />
        
//           <input type="email" name="email" placeholder="Email-id" />
//           <input type="text" name="desc" placeholder = " Description"/>
//     </form>
//         </div>
//        */}
//       </Grid >
 <Grid container component="main" sx={{ height: '100vh' }}>

        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
         <div className="col-sm-3">
           <h1 className="heading">Add your Image</h1>
           <div className="img-holder">
             <img src={profileImg} alt="" id="img" className="img" />
           </div>
           <input
             type="file"
             accept="image/*"
             name="image-upload"
             id="input"
             onChange={this.imageHandler}
           />
           <div className="label">
           
           </div>
          
         </div>
    

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
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
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
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
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
                <Link href="#" variant="body2">
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
}

export default Missingreport;
