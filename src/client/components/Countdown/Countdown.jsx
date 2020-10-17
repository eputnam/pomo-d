import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  seconds: PropTypes.number,
};

const defaultProps = {
  seconds: 0,
};

const Countdown = ({ seconds }) => {
  const getMinutes = () => {
    if (seconds >= 60) {
      return Math.floor(seconds / 60);
    }

    return 0;
  };

  const getSeconds = () => {
    const secs = seconds - Math.round(getMinutes() * 60);
    if (secs < 10) return `0${secs}`;
    return secs;
  };

  return (
    <div>
      {getMinutes()}:{getSeconds()}
    </div>
  );
};

Countdown.defaultProps = defaultProps;
Countdown.propTypes = propTypes;

export default Countdown;
