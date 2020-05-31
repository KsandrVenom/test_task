"use strict";

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  };
};

let ari = new Node('Ari');
let malcolm = new Node('Malcolm', ari);
let pete = new Node('Pete', malcolm);
let ricky = new Node('Ricky', pete);
let sean = new Node('Sean', ricky);

let arrayListThree = [];

let head = sean;

while (head) {
  arrayListThree.push(head.data);
  head = head.next;

};

console.log(arrayListThree);

