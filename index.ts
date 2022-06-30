import { add } from "./utility"
import { mult } from "./utility"

const firstNumber = 2
const secondNumber = 3

let userName
userName = "mrspotts"

let myName 
myName = "mrsspotts"

// display user welcome message                       
function showUser(user: string):string {
    return `Welcome, ${user}!`
} 

function helloWorld(text: string):string {
    return `Hello ${text}!`
}

console.log(add(firstNumber, secondNumber))
console.log(showUser(userName)) 
console.log(helloWorld(myName))
console.log(mult(firstNumber, secondNumber))