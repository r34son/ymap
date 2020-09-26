import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import Map from './Map'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import fizteh from './logos/fizteh.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginBottom: theme.spacing(2),
  },
}));
const App = () => {
  const [show, setShow] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Fade
        in={!show}
        timeout={{ enter: 0, exit: 3000 }}
        unmountOnExit
      >
        <Paper
          component={Box}
          position="absolute"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100vw"
          height="100vh"
          zIndex={1}
          style={{
            background: 'linear-gradient(to right, #45a247, #283c86)'
          }}
        >
          <Avatar alt="FTI" src={fizteh} className={classes.avatar} />
          <Button
            size="large"
            onClick={() => setShow(prev => !prev)}
          >
            Карта Симферополя
          </Button>
        </Paper>
      </Fade>
      <Map />
    </>
  );
}

export default App;
