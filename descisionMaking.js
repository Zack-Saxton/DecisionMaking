let randomNum = Math.floor(Math.random()*5)+1;

if (randomNum >=4 ) {
    console.log("Greater than or equal to 4");

} else if (randomNum > 1){
    console.log("Equal to 2 or 3");
}else {
    console.log("Equal to one");
}

if (randomNum != 3){
    console.log("Not equal to 3");
}

if (randomNum !== 3 && randomNum !== 5){
    console.log("Not equal to 3 or 5");
}

if (randomNum === (2 || 4)){
    console.log("equal two or equal to 4");
}

randomNum >= 4 ? console.log("greater than or equal to 4"): console.log("less than 4");

console.log(randomNum >= 4 ?  "Greater thand or equal to 4 ": "less than 4");

switch (randomNum) {
   

    
    case 1: 
    console.log("one");
    break;
    case 2: 
    console.log("two");
    break;
    case 3: 
    console.log("three");
    break;
    case 4: 
    console.log("four");
    break;
    default:
    case 5:



}

console.log(randomNum);