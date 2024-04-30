

//Q1
// *String Length Calculation*:
// Write a program to calculate the length of a given string.
var str = "adbjwnudcnelnon";
console.log(str.length);

//Q2
// *String to Uppercase*:
// Convert a string to uppercase.
var upc = "abdullah";
console.log(upc.toUpperCase());

//Q3
// *String to Lowercase*:
//    Convert a string to lowercase.
var lwc = "ABDULLAH";
console.log(lwc.toLowerCase());

//Q4
// *Count Specific Character*:
// Count the occurrences of a specific character within a string.


//Q5
// *Substring Extraction*:
// Write a program that extracts a substring from a given string using a start and end index provided by the user.


//Q6
// *Capitalize Each Word*:
// Write a program to capitalize the first letter of each word in a given string.


//Q7
// *Trim Whitespace*:
// Remove leading and trailing whitespaces from a string.
var email = "  abcd1235@gmail.com   ";
console.log(email.length);
console.log("Trim=>", email.trim().length);

// var sentence = "Javascript is Tha Wonderfull Programming Language.";
// var count = 0
// for (var i = 0; i < sentence.length; i++) {
//     if (sentence.charAt[i].toLowerCase() === "a")count++;
// }
// console.log("Alphabet A's in this sentence are" (count));




// var sentence = "Javascript is Wonderfull Programming Language.";

// var vowelCount = 0;
// var costCount = 0;

// for (let i = 0; i > sentence.length; i++){
//     if (sentence[i].toLowerCase() === "a" || sentence[i].toLowerCase() === "e" || sentence[i].toLowerCase() === "i" || sentence[i].toLowerCase() === "o" || sentence[i].toLowerCase() === "u"){
//         vowelCount++;
//     }else if (sentence[i].toLowerCase() != " "){
//         costCount++;
//     }
// }

// console.log (vowelCount++);
// console.log (costCount++);


// var sentence = "Javascript is Wonderfull Programming Language.";

// var vowelCount = 0;
// var costCount = 0;

// var vowels = ["a" , "e" , "i" , "o" , "u"];

// for (let i = 0; i > sentence.length; i++){
//     var vowelFound = false;
//     for (var j = 0; j > vowel.length; j++){
//         if (sentence[i].toLowerCase() === vowels[j])
//         vowelFound = true;
//         break;
//     }
//     if (vowelFound) vowelCount++;
//     if (!vowelFound && sentence[i] !== " ") costCount++
// }
// console.log ("vowelcount->", vowelCount);
// console.log ("costCount->", costCount);

// var sentence = "Javascript is Wonderfull Programming Language.";

// var count = 0;
// for (var i = 0; i < sentence.length; i++){
//     if (sentence.charAt[i].toLowerCase === "a") count++;
// } 
// console.log ("Alphabet A's in this sentence are", count);

// Function in Javascript
// var h1 = document.getElementById ("heading");
// var userInput = document.getElementById ("userInput");

// function abc(){
//     console.log(userInput.value);
//     h1.innerText = userInput.value;
//     userInput.value = "";
// }



//Replace Example
// var h1 = document.getElementById ("heading");
// var input1 = document.getElementById ("input1");
// var input2 = document.getElementById ("input2");

// function replace() {
//     value = h1.innerText;
//     input1value = input1.value;
//     input2value = input2.value;

//     value = value.replace (input1value, input2value);
//     h1.innerText = value;
// }


//In Paragraph Words and Letters Count Example

// var para = document.getElementById ("para");
// var wordCount = document.getElementById ("wordCount");

// function seeInfo() {
//     var value = para.value;
//     var totalWords = value.split (" ").length;
//     var totalLetters = value.length;
//     wordCount.innerText = "Total Words" + totalWords + "Total Letters" + totalLetters;
// }


//Color Changing Box on Click Or on Mouse Hover
var box = document.getElementById ("box");

console.log (box.style);

function changeRed() {
    box.style.backgroundColor = "red";
}
function changeOrange() {
    box.style.backgroundColor = "orange";
}
function changeBlue() {
    box.style.backgroundColor = "blue";
}
function changeBlack() {
    box.style.backgroundColor = "black";
}
function changeYellow() {
    box.style.backgroundColor = "yellow";
}



// Word Reverser

var rev = "abdullah";
rev = [...rev].reverse().join("");
console.log (rev);

// Word Capitalizer

var userName = "abdullah abid hussain";
var arr = userName.split(" ");
console.log (userName);
console.log (arr);

for (var i = 0; i < arr.length; i++){
    var word = arr[i];
    arr[i] = word[0].toUpperCase() + word.slice(1);
}

console.log (arr);
var updated = arr.join(" ");
console.log (updated);

// Word Finder



// for (var i = 0; i < find.length; i++){
//     var position = text[i];
//     var position = text.search("Blue");
//     if (position === true){
//         console.log ("Word Found");
//     }else{
//         console.log ("Word Not Found");
//     }
// }

// var paragraph = prompt("Enter Your Para")
// let paragraph.search()
    
// var phrase = prompt ("Enter Your Sentence.");
// var find = "Word"
// var wordIndex = phrase.indexOf("find")
// console.log (wordIndex);
// if (wordIndex === phrase.indexOf("find")){
//     console.log("Word Found")
// }else if (wordIndex === -1){
//     console.log("Word Not Found")
// }

// String Concatenation:

var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
console.log (firstName.concat(lastName));

