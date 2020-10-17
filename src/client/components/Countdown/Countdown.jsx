import React, { useState } from 'react';

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

export default Countdown;
