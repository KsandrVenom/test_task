"use strict";

let listTwo = {
  thing: "table",
  next: {
    thing: "chair",
    next: {
      thing: "pens",
      next: {
        thing: "pencil case",
        next: {
          thing: "plate",
          next: {
            thing: "tablecloth",
            next: null
          }
        }
      }
    }
  }
};

let arrayListTwo = [];

while (listTwo) {
  arrayListTwo.push(listTwo.thing);
  listTwo = listTwo.next;
};

console.log(arrayListTwo);