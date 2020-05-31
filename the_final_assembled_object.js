"use strict";



function uni(listFirst, listSecond) {

  let finalObject = {
  };

  for (let i = 0; i <= listFirst.length - 1; i++) {
    if (listSecond[i]) {
      finalObject[listFirst[i]] = listSecond[i];
    } else {
      finalObject[listFirst[i]] = null;
    };
  }
  return console.log(finalObject);

};

uni(arrayListTwo, arrayListThree);
uni(arrayListThree, arrayListTwo);