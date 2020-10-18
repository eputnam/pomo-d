import React, { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/core';
import Countdown from '../Countdown/Countdown';
import { TIME_SET } from '../../state/CommonPropTypes';

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
  timeSet: TIME_SET,
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
        <ButtonGroup style={{ width: '100%' }}>
          <Button
            style={{ width: 'calc(100%/3 * 2 - 4px)' }}
            variantColor={startButtonColor}
            onClick={onClick}
          >
            {startButtonText}
          </Button>
          <Button
            style={{ width: 'calc(100%/3 - 4px)' }}
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
