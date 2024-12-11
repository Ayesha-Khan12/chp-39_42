// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

// function power(a, b) {
//   let result = 1;
//   for (i = 0; i < b; i++) {
//     result = result * a;
//   }
//   return result;
// }
// let a = +prompt("Enter the base value (a):"); // Input base
// let b = +prompt("Enter the exponent value (b):"); // Input exponent
// let finalResult = power(a, b)
// document.write(`The result of <b>${a}</b> rased to the power of <b>${b}</b> is <b>${finalResult}</b>`);

// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
//    Leap years ..., 2012, 2016, 2020,

// function leapYear(){
// let userYear = +prompt("Please enter a year to check its year is leap or not leap...");
// if(userYear % 4 == 0 && userYear % 100 !=0 || userYear % 400 == 0){
//     alert("This year is leap year");
// }
// else{
//     alert("This year is not leap year");
// }
// }
// leapYear();

// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2

// function calculateArea(a, b, c) {
//   let S = (a + b + c) / 2;
//   let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//   return area.toFixed(2);
// }

// function determineTriangleType(a, b, c) {
//   let type;
//   if (a + b > c && a + c > b && b + c > a) {
//     switch (true) {
//       case a === b && b === c:
//         type = "Equilateral triangle";
//         break;
//         case a === b || b === c || c === a:
//         type = "Isosceles triangle"
//         break;
//         default:
//             type = "Scalene triangle"
//     }
// }
// else{
//     type = "Invalid Triangle"
// }
// return type;
// }
// let a = +prompt("Enter the length of side a:");
// let b = +prompt("Enter the length of side b:");
// let c = +prompt("Enter the length of side c:");

// let triangleType = determineTriangleType(a, b, c);
// if (triangleType !== "Invalid triangle") {
//   let area = calculateArea(a, b, c);
//   document.write(`This is a ${triangleType}. The area of the triangle is: ${area}`);
// } else {
//   document.write("The sides entered do not form a valid triangle.");
// }

// 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction and other are for average and percentage.
//  Call those functions from mainFunction and display result in mainFunction.

// function totalMarks(){
//     let subject1 = +prompt("Enter your subject English marks...");
//     let subject2 = +prompt("Enter your subject Urdu marks...");
//     let subject3 = +prompt("Enter your subject Math marks...");
//     let totalMarks = 300;
//     let obtainMarks = subject1 + subject2 + subject3;
//     let percentage = 0;
//     function average(){
//         let avg = obtainMarks / 3;
//         document.write(`The average marks are ${avg} <br>`);
//     }

//     function percentageCalc(){
//      percentage = (obtainMarks / 300) * 100;
//     document.write(`The percentage is ${percentage}% <br>`);
// }
// function grade(){
//     let grade ;
//     switch(true){
//         case percentage >= 90:
//         grade = "A+";
//         break;
//         case percentage >= 80:
//             grade = "A";
//             break;
//             case percentage >= 70:
//                 grade = "B";
//                 break;
//                 case percentage  >= 60:
//                     grade = "C";
//                     break;
//                     case percentage >= 50:
//                         grade = "D";
//                         break;
//                         default :
//                         grade = "Failed";
// }
// document.write(`The grade is ${grade} <br>`);
// }
// average();
// percentageCalc();
// grade();
// }

// totalMarks();

// 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now.

// function custom(){
//     let userString = prompt("Please enter a sentance");
//     let character = prompt("Please enter a character");
//     for(i = 0; i < userString.length; i++){
//         if(userString[i] === character){
//             return i;
//         }
//     }
//     return -1;
// }
// let result = custom();
// if(result != -1){
//     document.write(`The character was found at index: ${result}`)
// }
// else{
//     document.write("The character was not found in the string.")
// }

// 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

// function vowelRemover() {
//   let userSentence = prompt("Please enter a sentence not more than 25 character...");
//   let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let result = "";
//   for(i = 0 ; i < userSentence.length; i++){
//     if(!vowels.includes(userSentence[i])){
//         result += userSentence[i];
//     }
//   }
//   document.write(`Original Sentence: ${userSentence} <br>`);
//   document.write(`Sentence without vowels: ${result}`);
// }
// vowelRemover();

// 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text.
//  For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// function vowelcouple(){
//     let userInput = prompt("Please enter a sentence to check vowel and vowelcouple");
//     let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//     let count = 0;
//     let pairs = "";
//     for (i = 0; i < userInput.length -1; i++){
//         if (vowels.includes(userInput[i]) && vowels.includes(userInput[i + 1])){
//             count++
//             pairs += userInput[i] + userInput[i + 1] + " ";
//         }
//     }
//     document.write(`The number of vowel pairs is: ${count} <br>`);
//     document.write(`The vowels pairs are: <b>${pairs}</b>`)
// }
// vowelcouple();



// 8. The distance between two cities (in km.) is input through the keyboard.
//  Write four functions to convert and print this distance in meters, feet, inches and centimeters.

// function convertDistance() {
//     let distanceInKm = +prompt("Enter distance between two cities in kilometers:");

//     function toMeters(km) {
//         return km * 1000; 
//     }

//     function toCentimeters(km) {
//         return km * 100000; 
//     }

//     function toFeet(km) {
//         return km * 3280.84; 
//     }

//     function toInches(km) {
//         return km * 39370.1; 
//     }

//     document.write(`Distance in kilometers: ${distanceInKm} km<br>`);
//     document.write(`Distance in meters: ${toMeters(distanceInKm)} m<br>`);
//     document.write(`Distance in centimeters: ${toCentimeters(distanceInKm)} cm<br>`);
//     document.write(`Distance in feet: ${toFeet(distanceInKm)} ft<br>`);
//     document.write(`Distance in inches: ${toInches(distanceInKm)} in<br>`);
// }

// convertDistance();

// 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours.
//  Assume that employees do not work for fractional part of an hour.

// function calculateOvertimePay(){
//     let totalHour = +prompt("Plese enter your working hour...");
//     let overTime = 12;
//     let overTimeHour = 0;
//     let overTimePay = 0;
//     if(totalHour > 40){
//         overTimeHour = totalHour - 40;
//         overTimePay = overTimeHour * overTime;
//     }
//     document.write(`Total Hours Worked: ${totalHour} hours<br>`);
//     document.write(`Overtime Hours: ${overTimeHour} hours<br>`);
//     document.write(`Overtime Pay: Rs. ${overTimePay}`);
// }
// calculateOvertimePay();

// 10. A cashier has currency notes of denominations 10, 50 and 100.
//  If the amount to be withdrawn is input through the keyboard in hundreds,
//   find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

function calculateNotes() {
    let amount = +prompt("Enter the amount to withdraw in hundreds:");
    
    if (amount % 10 !== 0) {
        document.write("Amount must be a multiple of 10.");
        return;
    }

    let notes_100 = Math.floor(amount / 100); 
    let remaining_amount = amount % 100;    

    let notes_50 = Math.floor(remaining_amount / 50); 
    remaining_amount = remaining_amount % 50;         

    let notes_10 = Math.floor(remaining_amount / 10); 

    document.write(`Amount: Rs. ${amount}<br>`);
    document.write(`100 rupee notes: ${notes_100}<br>`);
    document.write(`50 rupee notes: ${notes_50}<br>`);
    document.write(`10 rupee notes: ${notes_10}`);
}

calculateNotes();
