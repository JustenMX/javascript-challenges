// First convert the string into an array with only the words.
// Then compare each words.length (after removing special characters from word) and sort these lengths in descending order.
// return the first element from that sorted array.

// Have the function LongestWord(sen) take the sen paramenter being passed abnd return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty

// input: "fun&!! time"
// output: time

const LongestWord = (sen) => {
  const senRegex = sen.replace(/[^\w\s]/g, "").split(" ");
  //console.log(senRegex);
  let longestWord = "";
  let longestLength = 0;
  for (let i = 0; i < senRegex.length; i++) {
    const word = senRegex[i];
    if (word.length > longestLength) {
      longestWord = word;
      longestLength = word.length;
    }
  }
  return longestWord;
};

console.log(LongestWord("Hell0 &^%^&^%what is this maannn?"));
