

//Q1
// *String Length Calculation*:
// Write a program to calculate the length of a given string.
// var str = "adbjwnudcnelnon";
// console.log(str.length);

//Q2
// *String to Uppercase*:
// Convert a string to uppercase.
// var upc = "abdullah";
// console.log(upc.toUpperCase());

//Q3
// *String to Lowercase*:
//    Convert a string to lowercase.
// var lwc = "ABDULLAH";
// console.log(lwc.toLowerCase());

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
// var email = "  abcd1235@gmail.com   ";
// console.log(email.length);
// console.log("Trim=>", email.trim().length);

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
// var box = document.getElementById ("box");

// console.log (box.style);

// function changeRed() {
//     box.style.backgroundColor = "red";
// }
// function changeOrange() {
//     box.style.backgroundColor = "orange";
// }
// function changeBlue() {
//     box.style.backgroundColor = "blue";
// }
// function changeBlack() {
//     box.style.backgroundColor = "black";
// }
// function changeYellow() {
//     box.style.backgroundColor = "yellow";
// }



// // Word Reverser

// var rev = "abdullah";
// rev = [...rev].reverse().join("");
// console.log (rev);

// // Word Capitalizer

// var userName = "abdullah abid hussain";
// var arr = userName.split(" ");
// console.log (userName);
// console.log (arr);

// for (var i = 0; i < arr.length; i++){
//     var word = arr[i];
//     arr[i] = word[0].toUpperCase() + word.slice(1);
// }

// console.log (arr);
// var updated = arr.join(" ");
// console.log (updated);

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

// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// console.log (firstName.concat(lastName));






// var days = document.getElementById("days");
// var hours = document.getElementById("hours");
// var minutes = document.getElementById("minutes");
// var seconds = document.getElementById("seconds");

// var dd = document.getElementById("dd");
// var hh = document.getElementById("hh");
// var mm = document.getElementById("mm");
// var ss = document.getElementById("ss");

// var day_dot = document.querySelector("day_dot");
// var hr_dot = document.querySelector("hr_dot");
// var min_dot = document.querySelector("min_dot");
// var sec_dot = document.querySelector("sec_dot");

// var endDate = "06/17/24 00:00:00";
// var x = setInterval(function(){
//     var now = new Date(endDate).getTime();
//     var countDown =new Date().getTime();
//     var distance = now - countDown;
    
//     var d = Math.floor(distance / 1000 / 60 / 60 / 24);
//     var h = Math.floor(distance / 1000 / 60 / 60);
//     var m = Math.floor(distance / 1000 / 60);
//     var s = Math.floor(distance / 1000);

//     //Output the result in element with id
//     days.innerText = d + "<br><span>Days</span>";
//     hours.innerText = h + "<br><span>Hours</span>";
//     minutes.innerText = m + "<br><span>Minutes</span>";
//     seconds.innerText = s + "<br><span>Seconds</span>";

//     //Animate Stroke
//     dd.style.strokeDashoffset = 440 - (440 * d) / 365;
//     //365 Days in a year
//     hh.style.strokeDashoffset = 440 - (440 * h) / 24;
//     //24 Hours in a day
//     mm.style.strokeDashoffset = 440 - (440 * m) / 60;
//     //60 Minutes in a hour
//     ss.style.strokeDashoffset = 440 - (440 * s) / 365;
//     //60 Seconds in a minute


//     //Animate circle dots
//     day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
//     //360deg / 365days = 0.986
//     hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
//     //360deg / 24hours = 15
//     min_dot.style.transform = `rotateZ(${m * 0.986}deg)`;
//     //360deg / 60minutes = 6
//     sec_dot.style.transform = `rotateZ(${s * 0.986}deg)`;
//     //360deg / 60seconds = 6

//     //if the countdown is over, write some text
//     if(distance < 0){
//         clearInterval(x);
//         document.getElementById("time").style.display = 'none'
//         document.querySelector(".eid").style.display = 'block';
//     }
// })




var days = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var dd = document.getElementById('dd');
var hh = document.getElementById('hh');
var mm = document.getElementById('mm');
var ss = document.getElementById('ss');

var day_dot = document.querySelector('day_dot');
var hr_dot = document.querySelector('hr_dot');
var min_dot = document.querySelector('min_dot');
var sec_dot = document.querySelector('sec_dot');

var endDate = '06/17/2024 00:00:00';
//Date format mm/dd/yyyy
var x = setInterval(function(){
    var now = new Date(endDate).getTime();
    var countDown = new Date().getTime();
    var distance = now - countDown;

    //Time calculation for days, hours, minutes, seconds
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance %  (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / (1000));

    //Output the result in element with id
    days.innerHTML = d + "<br><span>Days</span>";
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";

    //Animate stroke
    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    //365 Days in a year
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    //24 Hours in a day
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    //60 Minutes in a hour
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    //Animate circle dots
    day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
    //360 deg / 365days = 0.986
    hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
    //360deg / 24hours = 15
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;
    //360deg / 60minutes
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
    //360deg / 60seconds

    //if countdown is over, write some text
    if(distance < 0){
        clearInterval(x);
        document.getElementById("time").style.display = 'none';
        document.querySelector(".eidMubarak").style.display = 'block';
    }
})
