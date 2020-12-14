import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/core';
import { getMinutes, getSeconds } from '../../util/Time/Time';
import { TIME_SET } from '../../state/CommonPropTypes';

const propTypes = {
  timeSet: TIME_SET.isRequired,
  onClick: PropTypes.func.isRequired,
};

const TimeSetButton = ({ timeSet, onClick }) => {
  return (
    <Button style={{ width: '100%' }} onClick={() => onClick(timeSet)}>
      {getMinutes(timeSet.startTime)}:{getSeconds(timeSet.startTime)}
    </Button>
  );
};

TimeSetButton.propTypes = propTypes;

export default TimeSetButton;
