let currentNumber = "";
let perviousNumber = "";
let operator = "";

const  previousDisplayNum = document.querySelector(".previous-number");
const CurrentDisplayNum = document.querySelector(".current-number");;

const equal = document.querySelector(".btn-equals");
equal.addEventListener("click", calculate)

const decimal = document.querySelector(".btn-decimal");
decimal.addEventListener("click", ()=>{
    addDecimal();
})
const clear = document.querySelector(".btn-clear");
clear.addEventListener("click", clearCalculator);

const numberButtons =document.querySelectorAll(".btn-number");

const operators = document.querySelectorAll(".btn-operator");

numberButtons.forEach(btn => {
    btn.addEventListener("click" , (element)=>{
        handleNumber(element.target.textContent)
    });
});

operators.forEach(btn => {
    btn.addEventListener("click", (element)=>{
        handelOperator(element.target.textContent);
    })
}); 

function handleNumber (number){
    currentNumber += number;
    CurrentDisplayNum.textContent = currentNumber;
};



function handelOperator (op){

    if(perviousNumber === ""){
       perviousNumber = currentNumber ;
       operatorCheck(op);
    }else  if(perviousNumber === ""){
        perviousNumber = currentNumber;
        operatorCheck(op);
    }else{
        calculate();
    }
    operator = op;
    previousDisplayNum.textContent =  perviousNumber + operator;
    CurrentDisplayNum.textContent = "";
    
}

function operatorCheck(text){
    operator = text;
    previousDisplayNum.textContent =  perviousNumber + operator;
    CurrentDisplayNum.textContent = "0";
    currentNumber = "";
}

function calculate() {
    perviousNumber = Number(perviousNumber);
    currentNumber  = Number(currentNumber);

    if(operator === "+"){
        perviousNumber += currentNumber;
    }else if(operator === "-"){
        perviousNumber -= currentNumber;
    }else if(operator === "x"){
        perviousNumber *= currentNumber;
    }else if(operator === "/"){
        perviousNumber /= currentNumber;
    }
    previousDisplayNum.textContent = "";
    CurrentDisplayNum.textContent = perviousNumber;
}
function clearCalculator (){
    currentNumber = "";
    perviousNumber = "";
    CurrentDisplayNum.textContent = "0";
    previousDisplayNum.textContent = "";
}

function addDecimal(){
    if(!currentNumber.includes(".")){
        currentNumber+= ".";
        CurrentDisplayNum.textContent = currentNumber;
    }
}