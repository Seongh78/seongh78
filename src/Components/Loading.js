/**
 *
 */

import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from './';

/**
 *
 */
const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <Container>
      <h1>Loading...</h1>
    </Container>
  );
};

export default Loading;
