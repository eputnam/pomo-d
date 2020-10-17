import React, { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/core';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [timerId, setTimerId] = useState(0);

  const playTimer = () => {
    let currentTime = time;
    setIsPaused(false);
    setIsStopped(false);
    setIsRunning(true);
    const id = setInterval(() => setTime((currentTime += 1)), 1000);
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

  let startButtonText;
  let startButtonColor;
  let onClick;
  let stopButtonText;
  let stopButtonColor;

  startButtonText = 'GO';
  startButtonColor = 'green';
  stopButtonText = 'STOP';
  stopButtonColor = 'red';
  onClick = playTimer;

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
      <div className="page-title">{time}</div>
    </>
  );
};

export default Timer;
