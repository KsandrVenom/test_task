"use strict";


let fibonacci = function (firstNumber, secondNumber) {
  let array = [];
  let sumEvenNumber = 0;
  array.push(firstNumber);
  array.push(secondNumber);

  for (let i = 0; (array[i] + array[i + 1]) < 4000000; i++) {
    array.push(array[i] + array[i + 1]);
  };

  for (let j = 0; j <= array.length - 1; j++) {
    if (!(array[j] % 2)) {
      sumEvenNumber += array[j];
    }
  };

  console.log(sumEvenNumber);
  console.log(array);

  return array;
};

fibonacci(0, 1);

fibonacci(1, 2);
