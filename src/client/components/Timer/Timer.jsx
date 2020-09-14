import React from 'react';
import {bool, number} from 'prop-types';
import {Heading, Stack} from '@chakra-ui/core';

const propTypes = {
  isRunning: bool.isRequired,
  currentCount: number.isRequired,
};

const defaultProps = {
};

const Timer = ({ currentCount, isRunning }) => (
  <div className="page-title">
    {currentCount}
  </div>
);

Timer.propTypes = propTypes;
Timer.defaultProps = defaultProps;

export default Timer;
