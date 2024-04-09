const getCurrentTime = () => {
  const time = new Date();
  const currentTime = time
    .toLocaleString()
    .split('.')
    .map((str) => str.trim());
  // currentTime 예시 [ '2024', '4', '3', '오후 2:58:40' ]
  const fullDate = time
    .toLocaleDateString()
    .split('.')
    .slice(0, 3)
    .map((str) => str.replace(' ', 0))
    .join('');

  const hours = new Date().getHours();
  const formattedHours = hours < 10 ? `0${hours}` : hours;

  return {
    year: currentTime[0],
    month: currentTime[1],
    date: currentTime[2],
    time: currentTime[3],
    fullDate, // ex : 20240403
    formattedHours, // ex: 12 or 09
  };
};

export { getCurrentTime };
