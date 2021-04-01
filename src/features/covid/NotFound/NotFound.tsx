import React from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import { HistoryType } from '../../../App';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const NotFound = ({ history }: HistoryType): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Box textAlign="center">
        <h1>404 - Not Found!</h1>
        <Button
          variant="contained"
          onClick={() => history.push('/japan')}
          className={classes.button}
        >
          TO COVID LIVE DASHBOARD JAPAN
        </Button>
        <Button
          variant="contained"
          onClick={() => history.push('/')}
          color="primary"
          className={classes.button}
        >
          TO COVID LIVE DASHBOARD WORLD
        </Button>
      </Box>
    </>
  );
};

export default NotFound;
