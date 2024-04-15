const getCurrentTime = () => {
  const time = new Date();
  const currentTime = time
    .toLocaleString()
    .split('.')
    .map((str) => str.trim());
  // currentTime 예시 [ '2024', '4', '3', '오후 2:58:40' ]
  const previousDate = new Date(time.getTime() - 24 * 60 * 60 * 1000);
  const baseDate = previousDate
    .toLocaleDateString()
    .split('.')
    .slice(0, 3)
    .map((str) => str.trim().padStart(2, 0))
    .join('');

  const baseTime = '2300'; // baseTime 은 2300 으로 고정

  const searchDate = time
    .toLocaleDateString()
    .split('.')
    .slice(0, 3)
    .map((str) => str.trim().padStart(2, 0))
    .join('-');

  return {
    year: currentTime[0],
    month: currentTime[1],
    date: currentTime[2],
    time: currentTime[3],
    baseDate, // ex : 20240403
    baseTime, // ex: 12 or 09
    searchDate, // ex: 2024-04-03
  };
};

export { getCurrentTime };
