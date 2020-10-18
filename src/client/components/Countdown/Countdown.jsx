import React from 'react';
import PropTypes from 'prop-types';
import { getMinutes, getSeconds } from '../../util/Time/Time';

const propTypes = {
  seconds: PropTypes.number,
};

const defaultProps = {
  seconds: 0,
};

const Countdown = ({ seconds }) => {
  return (
    <div>
      {getMinutes(seconds)}:{getSeconds(seconds)}
    </div>
  );
};

Countdown.defaultProps = defaultProps;
Countdown.propTypes = propTypes;

export default Countdown;
