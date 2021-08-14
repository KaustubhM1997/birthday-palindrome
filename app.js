
//reverse function done

function reverseStr(str){  // exercise 1


    var listOfChars = str.split(''); // ['h', 'e'.....]

    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join('');

    return reversedStr;

}

// console.log(reverseStr('hello'))

function isPalindrome(str) {     // exercise 2

    var reverse = reverseStr(str)

    if(reverse === str){
        return true;
    }

    else {

        return false;
    }

}

// console.log(isPalindrome('242'))
// console.log(isPalindrome('Kaustubh'));



function convertDateToStr(date){    //exercise 3: converting a date fromnumber to string


    //Palindrome is done as a string and not a number. Hence, we need to have the entire thing as a string. If we keep them as numbers, they would just add up in exercise 4 which we don't want. 

    var dateStr = { day: '', month: '', year: ''}; // converts number to string

    if(date.day < 10){

        dateStr.day = '0' + date.day;
    }

    else {

        dateStr.day = date.day.toString();
    }

    if(date.month < 10){

        dateStr.month = '0' + date.month;  // .toString not required here because when we add a string and a number the entire thing becomes a string (typecasting and concatenation)
    }

    else {

        dateStr.month = date.month.toString();  // .toString() used to convert a number to a string
    }

    dateStr.year = date.year.toString();

    return dateStr;



}
// var date = {

//     day: 5,
//     month: 11,
//     year: 2020
// }


// console.log(convertDateToStr(date));

function getAllDateFormats(date) {  //exercise 4: takes a date and returns all 6 variations


    var dateStr = convertDateToStr(date); // we get an array here from the previous function which is stored in the var. Here we convert the date object which is in number format to a string format

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;


    //returning all variations in the form of an array

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];


}

//Excercise 5: We check all the date formats from the previous function and run the isPalindrome function over all of them to check if any of them are palindrome

function checkPalindromeForAllDateFormats(date){

    var listofPalindromes = getAllDateFormats(date);  // this would return an array of all date formats


    var flag = false; // a small flag that would be false by default and we check for true below

    for(var i=0; i < listofPalindromes.length; i++){

        if(isPalindrome(listofPalindromes[i])){  //We check for Palindrome here using our earlier function and we pass each date format using 'i'

            flag = true; // if flag is true then we just want to break the function or the for loop here as we won't check for any further date formats
            break;


        }
    }

    return flag; // returning whether the date format is Pal or not using true or false

}

//Exercise 6: Get next palidrome date and how far is it from the current date input or how many days are there in between


function getNextDate(date){ //it basically increments the date put by the user and gets us next date. Has nothing to do with Palindrome

    var day = date.day + 1; //example: going from 8th August to 9th August
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // array goes from 0 to 11

    if(month === 2){ //check for Feb
        // if Feb then check for leap year
        if(isLeapYear(year)){

            if(day > 29) {

                day = 1; //if the day is greater than 29 it's going to go to the 1st of next month
                month++; //increment the month


            }


        }
        else {

            //check for other months

            if(day > 28){

                day = 1; // if not a leap year it would still go the 1st on next month as feb as 28 days
                month++;
            }


        }


    }

    else {
        //check if the day that we increased exceeds the max days in a month
        if(day > daysInMonth[month - 1]){ //as the array goes from 0 to 11 and not 1 to 12 we do minus 1

            day = 1; //meaning we go to the next month's first day
            month++;

            //this works for all months except feb as that is a lear year and we have another function for that


        }
    }

    //edge case: when month is 12 and gets incremented by 1 due to the getnextdate function making it 13 which is invalid

if(month > 12){
    month = 1; //making it Jan
    year++;

}

return {  //returing the date after taking care of all edge cases

    day: day,
    month: month,
    year: year
}


}

//check for leap year

function isLeapYear(year){

    if(year % 400 === 0){

        return true;
    }

    if(year % 100 === 0){

        return false;
    }

    if(year % 4 === 0){
        return true;
    }

      return false;
    
}

function getNextPalindromeDate(date) {  //finding the next palindrome date

    var ctr = 0; // to keep a count of how far the palindrome date is
    var nextDate = getNextDate(date);

    while(1){ // an infinite loop that would run till we get the next pal date
    ctr++; // to keep a track of how far is it or basically how many times is this loop iterating

    var isPalindrome = checkPalindromeForAllDateFormats(nextDate) // to check if it's pal

    if(isPalindrome){

        break;
    }

    //if not Palindrome, we want to check the next date using the next date function

    nextDate = getNextDate(nextDate);

    }

    return [ctr, nextDate];

}

//Exercise 7: Get Previous date and previous palidrome date as well. Then compare the gap for next and previous and display whichever is shorter or nearest to the user. 


// palindrome is not required for level one, but is a bonus so do it!



//Wiring the UI

var dateInput = document.querySelector('#bday-input');

var showBtn = document.querySelector('#show-btn');

var outputDiv = document.querySelector("#result");

function clickHandler(e){
    var bdayStr = dateInput.value;

    //the bday string shouldn't be empty

    if(bdayStr !== ''){ //this means if the bday string is empty then do perform any logic. Which means if the the date is not selected this logic won't run

        var listofDate = bdayStr.split('-'); //to remove the hyphens in the date format that we saw by printing this


        // console.log(listofDate);

        //building our date object

        var date = { //the above string was in yyyymmdd format so we take care of it in this object and convert it to ddmmyyyy format

            day: Number(listofDate[2]),// position of day in the list of date string

            month: Number(listofDate[1]),

            year: Number(listofDate[0])

        }

        // console.log(date); // we get the ddmmyyyy format

        //since we now want to check pal and add the date, we need to convert the string to a number foramt which we do above


        var isPalindrome = checkPalindromeForAllDateFormats(date);

        // console.log(isPalindrome); // we check pal or not here

        if(isPalindrome){

            outputDiv.innerText = 'Yay! Your birthday is Palindrome!!'

        }

        else { //if input date is not plaindrome then we get the next pal date here for the user and show how far it is

            var [ctr, nextDate] = getNextPalindromeDate(date); // this function returns two values in the form of an array for which we built the logic above


            //we've used template literals and ternary oprator here
            outputDiv.innerText = `The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${ctr} days!`
        }

    }










}

showBtn.addEventListener('click', clickHandler);




// var date = {

//     day: 1,
//     month: 12,
//     year: 2020,
// }

// // console.log(isLeapYear(2021));

// // console.log(getNextDate(date));

// console.log(getNextPalindromeDate(date));



