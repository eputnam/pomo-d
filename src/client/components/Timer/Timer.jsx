import React, { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import Countdown from '../Countdown/Countdown';

/**
 *
 * TimeSet = {
 *   id: numeric id
 *   time: starting time
 * }
 *
 *  load a TimeSet into the timer, it sets the starting time.
 *
 *  Future: time sets could load in a color theme
 */

const defaultProps = {
  timeSet: { startTime: 25 * 60 },
};

const propTypes = {
  timeSet: PropTypes.exact({
    startTime: PropTypes.number,
  }),
};

const Timer = ({ timeSet }) => {
  const [time, setTime] = useState(timeSet.startTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [timerId, setTimerId] = useState(0);

  const playTimer = () => {
    let currentTime = time;
    setIsPaused(false);
    setIsStopped(false);
    setIsRunning(true);
    const id = setInterval(() => {
      setTime((currentTime -= 1));
    }, 1000);
    setTimerId(id);
  };

  const pauseTimer = () => {
    clearInterval(timerId);
    setIsPaused(true);
    setIsRunning(false);
    setIsStopped(false);
  };

  const clearTimer = () => {
    clearInterval(timerId);
    setIsRunning(false);
    setIsStopped(true);
    setTime(timeSet.startTime);
  };

  let startButtonText = 'GO';
  let startButtonColor = 'green';
  const stopButtonText = 'STOP';
  let stopButtonColor = 'red';
  let onClick = playTimer;

  if (isRunning) {
    startButtonText = 'PAUSE';
    startButtonColor = 'yellow';
    onClick = pauseTimer;
  } else if (isPaused) {
    startButtonText = 'GO';
    startButtonColor = 'green';
    onClick = playTimer;
  } else if (isStopped) {
    stopButtonColor = 'gray';
  }

  return (
    <>
      <div style={{ margin: '10px 0' }}>
        <ButtonGroup>
          <Button
            style={{ width: '250px' }}
            variantColor={startButtonColor}
            onClick={onClick}
          >
            {startButtonText}
          </Button>
          <Button
            variantColor={stopButtonColor}
            isDisabled={isStopped}
            onClick={clearTimer}
          >
            {stopButtonText}
          </Button>
        </ButtonGroup>
      </div>
      <Countdown seconds={time} />
    </>
  );
};

Timer.defaultProps = defaultProps;
Timer.propTypes = propTypes;

export default Timer;
