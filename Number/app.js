
var number = 0.5;
//round
console.log(Math.round(number));
//floor
console.log(Math.floor(number));
//ceil
console.log(Math.ceil(number));

//number ko string may convert kardeta hai
console.log(typeof number);
console.log(typeof number.toString());


//string to number mein convert krna
//1. + lagado pehle
//2. Number() ke function mein dedo
//3. parseInt() ye decimal ko covert nahn krta
//4. parseFloat() ye decimal ko bhe covert krta he

var price = "340a45.4";
//+ lagane par
console.log("+=>" , +price);
//Number() may lagne k baad
console.log(Number(price));
//parseInt() may lagane k  baad
console.log("parseInt=>" , parseInt(price.replace("a" , "")));
//parseFloat() may lagane k baad
console.log("parseFloat=>" , parseFloat(price));

//decimal ki length control karne k liye
var divide = 10 / 3;
console.log(divide.toFixed(2));


//for genetrate OTP number
var heading = document.getElementById("random");

function generateOTPNumber() {
    var random = Math.round(Math.random() * 10000);
    heading.innerText = random;
}


//for generate dice number

var user_number = document.getElementById("user_number");
var random_number = document.getElementById("random_number");
var result = document.getElementById("result");
var info_box_result = document.getElementById("info_box_result");
var win_html = document.getElementById("win");
var loss_html = document.getElementById("loss");
var total = document.getElementById("total");
var msg = document.getElementById("msg");

var count = 10;
var win = 0;
var loss = 0;

function tryMyLuck(userNumber) {
  // alert(userNumber);
  var randomNumber = Math.random() * 6;
  var ceil = Math.ceil(randomNumber);
  console.log(ceil);
  user_number.innerText = userNumber;
  random_number.innerText = ceil;

  // total count mein se aik minus krdo
  total.innerText = --count;
  
  if (ceil === userNumber) {
    console.log("user wins");
    result.innerText = "You won";
    info_box_result.style.backgroundColor = "Green";
    result.style.color = "White";
    // total count mein se aik minus krdo
    win_html.innerText = ++win;
  } else {
    result.innerText = "You Loss";
    info_box_result.style.backgroundColor = "red";
    result.style.color = "White";
    loss_html.innerText = ++loss;
  }

  checkResult();
}

function checkResult() {
  if (count == 0) {
    if (win >= 3) {
      msg.innerText = "Congrats! You won";
    } else {
      msg.innerText = "Sorry! You loss try again";
    }
    count = 10;
    win = 0;
    loss = 0;
    total.innerText = count;
    win_html.innerText = loss;
    loss_html.innerText = win;
  }
}