interface Time {
  ms: number;
  seconds?: boolean;
  human?: boolean;
}

export const time = ({ ms, seconds, human = true }: Time) => {
  // convert ms to seconds
  let sec = ms / 1000;

  // convert seconds to minutes and seconds
  let min = Math.floor(sec / 60);
  sec = Math.floor(sec % 60);

  // return time in seconds
  if (seconds) {
    return sec;
  }

  // check if minutes or seconds are less than 10 and add a 0
  // return time in human readable format
  if (human) {
    return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec} `;
  }
};
