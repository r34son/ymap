import React, { useState } from 'react';
import Fade from '@material-ui/core/Fade';
import Map from './Map'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Fade in={!show}>
        <Paper
          component={Box}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100vw"
          height="100vh"
          style={{ backgroundColor: "blue" }}
        >
          <Button
            size="large"
            onClick={() => setShow(prev => !prev)}
          >
            Карта Симферополя
          </Button>
        </Paper>
      </Fade>
      <Fade in={show} timeout={2000}>
        <Paper component={Box} width="100vw" height="100vh">
          <Map />
        </Paper>
      </Fade>
    </>
  );
}

export default App;
