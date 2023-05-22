// https://leetcode.com/problems/capitalize-the-title/

// 2129. Capitalize the Title

var capitalizeTitle = function (title) {
  const words = title.split(" ");
  const capitalizedWord = words.map((word) => {
    if (word <= 2) {
      return word.toLowerCase();
    } else {
      const firstLetter = word.charAt(0).toUpperCase();
      const remainingLetters = word.slice(1).toLowerCase();
      return firstLetter + remainingLetters;
    }
  });
  return capitalizedWord.join(" ");
};

console.log(capitalizeTitle("Hello this is Justen"));
