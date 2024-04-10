const getCurrentTime = () => {
  const time = new Date();
  const currentTime = time
    .toLocaleString()
    .split('.')
    .map((str) => str.trim());
  // currentTime 예시 [ '2024', '4', '3', '오후 2:58:40' ]
  const baseDate = time
    .toLocaleDateString()
    .split('.')
    .slice(0, 3)
    .map((str) => str.trim().padStart(2, 0))
    .join('');

  const hours = new Date().getHours();
  const baseTime = hours < 18 ? `${hours}00` : `${hours}00`;

  return {
    year: currentTime[0],
    month: currentTime[1],
    date: currentTime[2],
    time: currentTime[3],
    baseDate, // ex : 20240403
    baseTime, // ex: 12 or 09
  };
};

export { getCurrentTime };
