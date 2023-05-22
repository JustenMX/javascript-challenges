// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

// DNA to RNA

const DNAtoRNA = (dna) => {
  const conversion = dna
    .split("")
    .map((x) => (x == "T" ? "U" : x))
    .join("");
  return conversion;
};

console.log(DNAtoRNA("TTTT"));
