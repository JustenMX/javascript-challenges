// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
// Human Readable Duration Format
// 4 Kyu

function formatDuration(seconds) {
  // 60 seconds = 1 min
  // years, days, hours, min, seconds
  const min = seconds / 60;
}

// tests
console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
