import React from 'react';
import { Button } from '@chakra-ui/core';
import { getMinutes, getSeconds } from '../../util/Time/Time';
import { TIME_SET } from '../../state/CommonPropTypes';

const propTypes = {
  timeSet: TIME_SET.isRequired,
};

const TimeSetButton = ({ timeSet }) => {
  return (
    <Button style={{ width: '100%' }}>
      {getMinutes(timeSet.startTime)}:{getSeconds(timeSet.startTime)}
    </Button>
  );
};

TimeSetButton.propTypes = propTypes;

export default TimeSetButton;
