function recurse(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * recurse(num - 1);
  }
}

console.log(recurse(5));
