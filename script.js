const time = new Date();
const currentTime = time
  .toLocaleString()
  .split('.')
  .map((str) => str.trim());
