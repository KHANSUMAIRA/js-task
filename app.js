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
//     UserName= prompt("Enter Your Name");
// username = UserName.toLowerCase();
// capitalized = username[0].toUpperCase();
// x = capitalized + USserName.slice(1);
// alert(x); 


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
worldCupSquad = ["Shadab Khan", "M.Haris", "Iftikar", "Mohammad Rizwan", "Babar Azam", "Sarfaraz Ahmed", "Faheem Ashraf", "Hassan Ali", "Shaheen Afridi", "Haris Rauf", "Mohammad Hasnain", "Imam ul haq", "M.Nawaz", "Asif Ali", "Imad Wasim"];
finalplayers = worldCupSquad.slice(4 , 15)
alert("Final team players for tomorrow's match:" + finalplayers);




















































//     if (nationality == "pakistani" || Nationality == "indian" ) {
//         if (Gender== "male" && Age > 18) {
//           alert ("You are eligible to vote");
//         }else if (Gender=="female" && age > 18) {
//           var maritalStatus = prompt("Enter your marital status");
//           if (maritalStatus=="married") {
//             alert ("You are eligible to vote");
//           } else {
//             alert ("You are not eligible to vote");
//           } 
//         }else {
//           alert ("You are not eligible to vote");
//         }
//       }