import React, { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/core';
import Countdown from '../Countdown/Countdown';

const Timer = () => {
  const twentyFiveMinutesOfSeconds = 60 * 25;

  const [time, setTime] = useState(twentyFiveMinutesOfSeconds);
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
    setTime(0);
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

export default Timer;
