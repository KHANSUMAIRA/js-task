// // TASK 1
// // let Zakatpercentage = 0.025
// // let userInput = +prompt ("Enter any amount");
// // let Result = userInput * Zakatpercentage
// // alert("Your Zakat value is" + Result);


// // TASK 2 
// var userinput1 = +prompt ("Enter your Familymember");
// // Fitrah Amount 
// var Weat = 320 ;
// var Barlay = 450;
// var Dates = 2100;
// var Raisins = 2800;
// var userinput2 = +prompt ("Select any one method \n 1.Weat : 320 \n 2.Barlay : 450 \n 3.Dates : 2100 \n 4.Raisins : 2800");
// if (userinput2=="1") {
//     var total = userinput1 * Weat
//     alert ("your fitrah amount is :" + total)
// }
//  else if ( userinput2=="2") {
//     var total = userinput1 * Barlay
//     alert ("your fitrah amount is :" + total)
// } 
// else if (userinput2=="3") {
//     var total = Userinput1 * Dates
//     alert ("your fitrah amount is :" + total)
// }
//  else if (userinput2=="4") {
//     var total = userinput1 * Raisins
//     alert ("your fitrah amount is :" + total)
// }


//    // TASK 3 
// var msg1 = document.getElementById("message1");
// var msg2 = document.getElementById("message2");
// var msg3 = document.getElementById("message3");
// var answer = 5;
// var no_of_guesses = 0;
// var guessed_nums = [];
// var user_guess = +prompt("Guess number between 1 to 10");
// if(user_guess < 1 || user_guess > 10){
//     alert("Please enter a number between 1 and 10")
// } else{
//     guessed_nums.push(user_guess);
//     no_of_guesses+= 1;
//     if(user_guess < answer) {
//         alert("Your guess is too low");
//         alert("No . of guesses:" + no_of_guesses);
//         alert("Guessed numbers are:" + guessed_nums);
//     }
//      else if(user_guess > answer){
//         alert("Your guess is too high");
//         alert("No . of guesses:" + no_of_guesses);
//         alert("Guessed numbers are:" + guessed_nums);
//      } else if (user_guess == answer) {
//         alert("Congratulation you guess a number")
//      }
//     }
//     // TASK 4
function CapitalLetter(){
    UserName= prompt("Enter Your Name");
username = UserName.toLowerCase();
capitalized = username[0].toUpperCase();
x = capitalized + UserName.slice(1);
console.log(x); 
}
CapitalLetter()


//     //TASK 5
// var userinput = prompt ("Enter your name");
// // alert ("Userinput [0]");
// // userinput [0] = (user[0].UpperCase);
// // alert ( userinput );
// contactnumbers=[];
// contactnames=[];
// contactnumbers.push (prompt("Enter 1 contact number:"));
// contactnames.push (prompt("Enter 1 contact name:"));
// contactnumbers.push (prompt("Enter 2 contact number:"));
// contactnames.push (prompt("Enter 2 contact name:"));
// contactnumbers.push (prompt("Enter 3 contact number:"));
// contactnames.push (prompt("Enter 3 contact name:"));
// alert("names" + contactnames , "numbers" + contactnumbers);


// //TASK 6
// products = ["Sooper", "Chocolato", "Rio", "Marle", "Chocday"];
// position = parseInt(prompt("Enter the position of the product to remove ):\n 1: Sooper \n 2 : Chocolato \n 3: Rio  \n 4: Marle  \n 5: Chocday" ));
 
//  removedProduct = products.splice(position - 1, 1)[0];

//  alert(`Removed product: ${removedProduct}`);
//  alert(`Remaining products: ${products.join(", ")}`);

//  alert(`Total number of remaining products: ${products.length};`)

// // TASK 7

//  Nationality = prompt("Enter Your Nationality");
//  Gender = prompt("Enter your Gender");
//  Age= +prompt("Enter Your Age");
//  if(
//      nationality == "Pakistani" || nationality == "Pakistani" && nationality == "Indian" || nationality == "indian");
//  {
//      if( gender == "Male" || gender=="Male" && age >= 18)
//      alert("Eligible for Vote")
//  }
//  if (gender == "Female"|| gender == "Female" && age >=18){
//     married= prompt(" Are you  Married ?")
//     if (married === "yes") {
//      alert("You are Eligible to Vote.");
//    } 
//    else {
//      alert("You are not Eligible to Vote.");
//   }
//  }
//  else {
//      alert("You Are Not Eligiable ");
//  }; 

//TASK 8
// worldCupSquad = ["Shadab Khan", "M.Haris", "Iftikar", "Mohammad Rizwan", "Babar Azam", "Sarfaraz Ahmed", "Faheem Ashraf", "Hassan Ali", "Shaheen Afridi", "Haris Rauf", "Mohammad Hasnain", "Imam ul haq", "M.Nawaz", "Asif Ali", "Imad Wasim"];
// finalplayers = worldCupSquad.slice(4 , 15)
// alert("Final team players for tomorrow's match:" + finalplayers);

// pratice

//  var things = new
// Array("chair","table","door","apple","wall");
//  document.write(things.length);

//  var things = new
// Array("chair","table","door","apple","wall");
//  things.push('testing');

//  for(var i=0; i<things.length; i++)
//  { document.write(things[i] + ""); } 

//  var things = new
// Array("chair","table","door","apple","wall");
//  things.splice(2);

//  for(var i=0; i<things.length; i++)
//  { document.write(things[i] + " "); }

//  var things = new
// Array("chair","table","door","apple","wall");
//  things.splice(2);

//  for(var i=0; i<things.length; i++)
//  { document.write(things[i] + " "); }

//  var things = new
// Array("chair","table","door","apple","wall");
//  things.pop();
//  for(var i=0; i<things.length; i++)
//  { document.write(things[i] + " "); } 
// w?atching)"

// var username =+prompt( "Your Name Please","SUMERA")
// var user = "SUMERA"
// var fuser = "SUMERA"
// var originalNum = 23;
// var n;
//  var newNum = num++;
// ewNum = originalNum + 7
// {document.write("originalNum") + newNum}


//  var num = 10;
//  var popularNumber = num + 200;

//  var num = 1


// var username = "Sumaira";
// console.log(username)
// var username =prompt ("Your Name please", "Sumera")
// var username = "sumera"
// if(username == "sumera"){
//     console.log("thanks for joining")
// }
    
//  elareed"){se(username == "F
 
//     console.log("not defind")
//  } 
//  else if(username == "humera"){
//     console.log("sleeping")}
//  var originalNum = 23;
//  var newNum = originalNum + 7
//     console.log("223 + 7")

// // task 05 \\

// calculate date of birth

// function Calculate_age() {
//    var birth_date = new Date 
//    {document.getElementById("birth_date") + value};
//    var output_value = document.getElementById("birth_date") + value;
//    document.getElementById

// calculate age

//   calculationage (userBirthdate)
//   {
//    var current = new Date()
//    var Myage = current-userBirthdate
//    return Myage/(1000*60*60*24*365.25)}
//    var MyDOB = new Date("january 07,1994 05:00")
//    var Myage = calculationage(MyDOB)
//    console.log(Myage)
//    capitaization


   

//    function capitalLetter() {
//       // taking user input
//       let userInput = prompt('Enter', 'name');
//       // capitalizing initial letter and Lower Case other letters
//       let firstLetter = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
//       console.log('Initial letter is capitalized of ' + firstLetter);
//   }
//   // calling function
//   capitalLetter();


// generate OTP
// function generateOTP()
// {
//    var OTP = (Math.random()*4234)*(Math.floor(Math.random()*342468));
//    console.log(OTP);

// }
// generateOTP()
// var myOTP = generateOTP()
// console.log(myOTP)



// // function leapyear()
// {
// let x ;
// x = prompt("Enter current year");
// if(x%4==0) {
//    alert("Leap year" , x);
// }else {
//    alert("NOT Leap year" ,)
// }
// }
// leapyear()

// var user = "sumera"
// switch(user){
// case"sumera":
// console.log("yes")}
// break ;
// case"RAbbia";{
// console.log("happy")}
// break ;
// case"humaira";
// console.log("yes")
/* <h1>Hello</h1>
function mymouse(){
    console.log("mouse event")} */

//  LEAP YEAR

//     function comingLeapYear() {
//       let currentYear = new Date().getFullYear()

//       for (let i = currentYear; i <= currentYear + 10; i++) {
//           if (i % 4 === 0 && (i % 100 != 0 || i % 400 === 0)) {
//               console.log('Current year ' + i + ' is a leap year')
//           }
//          //  else {
//          //      console.log('Current year ' + i + ' is not a leap year')
//          //  }
//       }
//   }

//   comingLeapYear()









