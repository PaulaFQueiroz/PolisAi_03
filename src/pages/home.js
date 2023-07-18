import React from 'react';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core';
import { useTheme, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center',
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    marginBottom: theme.spacing(4),
    color: '#666',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(0, 1),
    borderRadius: theme.spacing(3),
    fontWeight: 'bold',
    textTransform: 'none',
    boxShadow: 'none',
    width: '200px', // Adjust the width as per your preference
  },
}));

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        {/* Centered Content */}
        <Grid item xs={12}>
          <div className={classes.buttonContainer}>
            <Typography variant="h4" className={classes.title}>
              PolisAi
            </Typography>
            <Typography variant="body1" className={classes.description}>
              Transforming AI policy-making through democratic oversight and citizen engagement.
            </Typography>
            <div className={classes.buttonGroup}>
              <Button variant="contained" color="primary" className={classes.button}>
                Learn more
              </Button>
              <Button variant="contained" color="secondary" className={classes.button}>
                Search
              </Button>
            </div>
          </div>
        </Grid>

        {/* Text Field Alone (for small screens) */}
        {isSmallScreen && (
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.title}>
              PolisAi
            </Typography>
            <Typography variant="body1" className={classes.description}>
              Transforming AI policy-making through democratic oversight and citizen engagement.
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Home;



/*

import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { useTheme, useMediaQuery, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  image: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
}));

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        //{ Left Column }
        {!isSmallScreen && (
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">PolisAi</Typography>
            <Typography variant="body1">
            Transforming AI Policy-Making through Democratic Oversight and Citizen Engagement.
            </Typography>
          </Grid>
        )}

  //{ Right Column }
<Grid item xs={12} sm={6}>
  <div className={classes.buttonContainer}>
    <img
      src={process.env.PUBLIC_URL + '/ai.jpg'}
      alt="Company Logo"
      className={classes.image}
    />
    <Button variant="contained" color="primary">
      Button 1
    </Button>
    <Button variant="contained" color="secondary">
      Button 2
    </Button>
  </div>
</Grid>


        //{ Text Field Alone (for small screens) }
        {isSmallScreen && (
          <Grid item xs={12}>
            <Typography variant="h4">Company Name</Typography>
            <Typography variant="body1">
              Description of the company and its mission.
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Home;



*/