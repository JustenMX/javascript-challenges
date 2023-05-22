// https://leetcode.com/problems/counter-ii/?utm_campaign=PostD3&utm_medium=Post&utm_source=Post&gio_link_id=xRxVYOXo

// 2665. Counter II

// const createCounter = (init) => {
//   let display = [];
//   const increment = (init) => {
//     return display.push(init + 1);
//   };
//   const decrement = (init) => {
//     return display.push(init - 1);
//   };
//   const reset = (init) => {
//     return display.push(init);
//   };
// };

const createCounter = (init) => {
  let currentValue = init;
  return {
    //
    increment() {
      currentValue++;
      return currentValue;
    },
    //
    decrement() {
      currentValue--;
      return currentValue;
    },
    //
    reset() {
      currentValue = init;
      return currentValue;
    },
  };
};

const counter = createCounter(5);

console.log(counter.increment()); // Output: 6
console.log(counter.increment()); // Output: 7
console.log(counter.decrement()); // Output: 6
console.log(counter.reset()); // Output: 5
