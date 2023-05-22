// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

console.log(titleCase("I'm a little tea pot"));

// Learning guides

const newArray = array.map(callback(element, index, array) {
    // Transformation logic
    return transformedElement;
  });

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mappedNumbers = number.map((val) => val * 2);
console.log(mappedNumbers);
