const blastOff = (num) => {
  while (num > 0) {
    if (num <= 0) {
      console.log("Blastoff cannot be initiated. please try again");
    }
    console.log(num);
    num--;
  }
  console.log("Blastoff!");
};

// blastOff(20);
// blastOff(10);
// blastOff(5);
// blastOff(0);
blastOff(-10);
