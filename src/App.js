import React from 'react';
import { Typography, Toolbar, AppBar, IconButton, Card, CardContent, Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import style from './styling.module.css';
import logo from './static/logo.png';
import doge from './static/doge.jpg';

function App() {
  return (
    <React.Fragment>
      <div>

        <AppBar className={style.toolbar} position='relative'>
          <Toolbar className={style.toolbar}>
            <IconButton color="inherit" target="_blank" href="https://github.com/JSun14">
              <GitHubIcon fontSize="large" />
            </IconButton>
            <img src={logo} className={style.logo} alt="Logo" />
            <IconButton color="inherit" target="_blank" href="https://www.linkedin.com/in/jerry-sun-50b660182/">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid container xs={12}>
          <Grid item xs={5} >
            <Card elevation={0} square={true} >
              <CardContent className={style.intro}>
                <Typography variant="h4" className={style.whitetext}>
                  <b>Hi I'm Jerry. Welcome to my website. It's currently under developement.</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={7}>
            <Card elevation={0} square={true}>
              <CardContent >
                <img src={doge} className={style.doge} alt="Doggos" />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default App;
