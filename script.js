console.log(
  new Date()
    .toLocaleDateString()
    .split('.')
    .slice(0, 3)
    .map((str) => str.trim().padStart(2, 0))
    .join(''),
);
