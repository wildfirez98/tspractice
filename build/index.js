"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("./utility");
const utility_2 = require("./utility");
const firstNumber = 2;
const secondNumber = 3;
let userName;
userName = "mrspotts";
let myName;
myName = "mrsspotts";
// display user welcome message                       
function showUser(user) {
    return `Welcome, ${user}!`;
}
function helloWorld(text) {
    return `Hello ${text}!`;
}
console.log((0, utility_1.add)(firstNumber, secondNumber));
console.log(showUser(userName));
console.log(helloWorld(myName));
console.log((0, utility_2.mult)(firstNumber, secondNumber));
