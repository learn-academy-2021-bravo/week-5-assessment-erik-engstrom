// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("codeWord", () => {

    // the test method describes in plain words what the function should be doing.
    test("returns the word if the word contains the letter a", () => {
  
      //the expect checks the expected output of the function return is what is actually returned. 
      expect(codeWord(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(codeWord(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(codeWord(secretCodeWord3)).toEqual("3cc3ntr1c")

    })
  })

// b) Create the function that makes the test pass.
// USe the .replace method to include the characters to replace and what to change them to. 
const codeWord = (string) => {
  return string.replace(/[a,e,i,o]/g, 4, 3, 1, 0);
}
// // I'm able to get all the vowels replaced, but am having trouble passing through the correct replacement number. I'm only getting the 4 passed into the variables or the 0 but not the 3 or 1. 

console.log(codeWord(secretCodeWord1));
console.log(codeWord(secretCodeWord2));
console.log(codeWord(secretCodeWord3));

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Cherry", "Kiwi"]
// Expected output: ["Apple", "Banana"]
var arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Banana", "Peach"]

// describe the function name 
describe("includesA", () => {

  // the test method describes in plain words what the function should be doing.
  test("returns the word if the word contains the letter a", () => {

    //the expect checks the expected output of the function return is what is actually returned. 
    expect(includesA(arrayOfWords1)).toEqual(["Apple", "Banana"])
    expect(includesA(arrayOfWords2)).toEqual(["Mango", "Orange", "Apricot", "Peach"])
  })
})

// b) Create the function that makes the test pass.

// need to create a function that returns an array of strings if that string contains the letter 'a'
//  the .include method may be able to be used here.

const includesA = array => {
  // set an empty array to collect the results
    let arr = []
    iterate over the array
    for( i=0; i<array.length; i++){
      // use the .include method to find the letter a in the string
      if (array.includes('a','A')){
        return array[i]
      }
    }
}
console.log(includesA(arrayOfWords1))
console.log(includesA(arrayOfWords2))
// I'm receiving an undefined error which usually means that the function is not working or the return is not returning anything. I've tried to debug it and multiple other combinations but can't get this piece working.




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
// // describe the function name 
describe("fullHouse", () => {

  // the test method describes in plain words what the function should be doing.
  test("evaluate an array to determine if a full house exists in the array", () => {

    //the expect checks the expected output of the function return is what is actually returned. 
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

// b) Create the function that makes the test pass.

// declare a function that can count how many duplicates are in an array 
const fullHouse = (arr) => {
  // set empty array to collect the results
  let count = []
  // iterate over array looking for duplicates
  for(let i of arr){
    count[i] = (count[i] || 0) + 1;
  }
  // need to evalute the values from the count and determine if the values return 2 and 3 duplicates
  let vals = Object.values(count);
  if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
    return true;
  }
  else {
    return false
  };
}
console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))

