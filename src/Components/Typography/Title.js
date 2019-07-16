/**
 *
 */

import React from 'react';
import propTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

/**
 * Title
 * @param {*} props
 */
const Title = props => {
  const { size, text, children } = props;
  return (
    <>
      <Typography variant={size} component={size} gutterBottom>
        {text}
      </Typography>
      {children && (
        <Typography variant="body2" gutterBottom>
          {children}
        </Typography>
      )}
    </>
  );
};

/**
 *
 */
Title.propTypes = {
  size: propTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  text: propTypes.string,
  children: propTypes.string
};

/**
 *
 */
Title.defaultProps = {
  size: 'h5',
  text: '',
  children: ''
};

export default Title;
