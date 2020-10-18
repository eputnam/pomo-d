export const getMinutes = seconds => {
  if (seconds >= 60) {
    return Math.floor(seconds / 60);
  }

  return 0;
};

export const getSeconds = seconds => {
  const secs = seconds - Math.round(getMinutes(seconds) * 60);
  if (secs < 10) return `0${secs}`;
  return secs;
};
