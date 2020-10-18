import React from 'react';
import { Button } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import { getMinutes, getSeconds } from '../../util/Time/Time';

const propTypes = {
  startTime: PropTypes.number.isRequired,
};

const TimeSetButton = ({ startTime }) => {
  return (
    <Button style={{ width: '100%' }}>
      {getMinutes(startTime)}:{getSeconds(startTime)}
    </Button>
  );
};

TimeSetButton.propTypes = propTypes;

export default TimeSetButton;
