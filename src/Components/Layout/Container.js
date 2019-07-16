/**
 *
 */

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Sidebar } from '../../Components';
import PropTypes from 'prop-types';

const styles = {
  typo: {
    // backgroundColor: '#00000011',
    // height: '100vh',
    zIndex: 0,
    padding: 20,
    paddingLeft: 5,
    paddingRight: 5
  }
};

/**
 *
 */
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: 10
  },
  control: {
    padding: theme.spacing(2)
  }
}));

/**
 *
 */
export default function SimpleContainer(props) {
  const classes = useStyles();
  const contentColumn = props.sidebar ? 9 : 12;
  console.log('contentColumn : ', contentColumn);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" style={{ zIndex: 0 }}>
        <Typography component="div" style={styles.typo}>
          <Grid container spacing={1}>
            {props.sidebar && (
              <Grid item xs={3}>
                {props.sidebarRender(classes)}
              </Grid>
            )}
            <Grid item xs={contentColumn}>
              <Paper className={classes.paper}>{props.children}</Paper>
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

/**
 *
 */
SimpleContainer.propTypes = {
  sidebar: PropTypes.bool
};

/**
 *
 */
SimpleContainer.defaultProps = {
  sidebar: false,
  sidebarRender: classes => (
    <Paper className={classes.paper}>
      <Sidebar />
    </Paper>
  )
};
