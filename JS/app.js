'use strict';
function q1(){
let yourName = prompt('What\'s your name ?');
return yourName;
}
let yourName = q1();

function q2(){
let yourAge = prompt('Is your age is greater than 12!');
return yourAge;
}
let yourAge=q2();

function q3(){
let feBack=prompt('Are you a student ?');
return feBack;
}
let feBack=q3();

function q4(){
let question = prompt('Do you know me ?');
return question;
}
let question=q4();

function q5(){
let movie1=prompt('Am i from Irbid ?');
return movie1;
}
let movie1=q5();

function q6(){
let kids = prompt(' Do you have kids ?');
}
let kids = q5();
alert ('your name is: ' + yourName + ' \,  and your age is: ' + yourAge +' \, your answer abut if you a student was: ' +feBack);

console.log(movie1);
console.log(kids);

movie1= movie1.toLowerCase();
kids= kids.toUpperCase();

console.log(movie1);
console.log(kids);

switch(movie1){
    case 'yes' :
    case 'y' :
        alert('I  will show you some anime movies or cartons');
        break;
    case 'no' :
    case 'n' :
        alert('I will show you some action films');
        break;
    default:
        alert('Welcome to my website');
}
 let scoure=0;

function q6(){
let sum = prompt('What is the result of this equation (7*4-5^2+10) ? You have only four attempts.');
sum = parseInt(sum);
var i =1;
for (i=1 ; i< 4 ; i++){
    if (sum > '17'){
        alert ('The answer incorrect\, and it is too high !');
    }else if (sum < '8' ){
        alert ('The answer is incorrect\, and it is too low \!');
    }else if( sum == '13' ){
        alert ('Yes, your answer is correct \.');
        scoure++;
        break;
    } else{
        alert ('you must answer again !')
    }
    console.log(sum);
    sum = prompt('Reanswer the question (7*4-5^2+10)');
    sum = parseInt (sum);
    }
    if (sum != '13' ){
alert ('the answer is (13)')
    }
    console.log(sum);
}
q6();

function q7(){
    let myJob =['painter ', ' songer ' ,' Traveler ',' engineer ' , ' artst ' , ' doctor ' , ' salseman ' , ' carpenter ' , ' programmer ' , ' Farmer '];
    
       let correctAns = prompt('What do you think my job is : '+ myJob);
   
       for (let g=0 ; g<6 ; g++){
correctAns = correctAns.toLowerCase();
 
        if (correctAns == 'programmer'){
            alert('Yes , I am ' + correctAns);
            console.log(typeof(correctAns));// to know what is the type of correctAns
        scoure++;
            break;
        }else if( correctAns == 'engineer'){
        alert('Yes , I am ' + correctAns);
            console.log(correctAns);
            scoure++;
            break;
    }else{
correctAns= prompt ('Please Try again. What do you think my job is : '+ myJob ).toLowerCase();

    }
}

alert('your scoure is :' + scoure )

if (correctAns == 'programmer' ){ 
alert (' Welcome to my webpage , Yes i am programmer');
}else if (correctAns== 'engineer'){
alert (' Welcome to my webpage ,yes I am ' + correctAns);
}else {
    alert ('I am engineer and programmer');
}
}
q7();
