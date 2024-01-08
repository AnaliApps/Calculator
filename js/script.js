let equals = document.querySelector("#equals");
let display = document.querySelector("#disp")
let clear = document.querySelector("#clear");
let del = document.querySelector("#delete");
let btnPlus = document.querySelector("#add")
let btnMinus = document.querySelector("#subtract");
let btns = [...document.querySelectorAll(".btn")];
let btnsOp = [...document.querySelectorAll(".operator")]

const calculator =  {
    displayValue:0,
    firstNumber:[],
    secondNumber:[],
    step:false,
    operator:null
};

btns.forEach(item=>item.addEventListener("click",()=>{
    if(item.classList.contains("btnNum")){
        inputNum(item.value)
    }else if(item.classList.contains("operator")){
        handleOperator(item.value)  
    }else if(item.classList.contains("dot")){
        inputDecimal(item.value)
    }else if(item.classList.contains("del")){
        deleteLastNum();
    }else if(item.classList.contains("reset")){
        resetDisplay();
    }
}))
const handleOperator = (op) =>{    
    if(calculator.operator !== null){
        calculator.step = true;
        calculate();
        calculator.operator = null
        return;
    }
    calculator.step = true;
    calculator.operator = op;
    console.log(calculator.operator)
    calculate()
    
}
 const inputNum = (num) =>{
    let {operator,firstNumber,secondNumber} = calculator;
    if(!operator && calculator.step === false){
        firstNumber.push(num)
        displayValueFunc(firstNumber.join(""))
    }else{
        secondNumber.push(num)
        displayValueFunc(secondNumber.join(""))
        calculator.step = true;
    }
    console.log(firstNumber,secondNumber)
 }
const inputDecimal = (dot) =>{
    if(!calculator.firstNumber.includes(dot) && calculator.step === false){
        calculator.firstNumber.push(dot)
        return
    }
    if(!calculator.secondNumber.includes(dot) && calculator.step === true){
        calculator.secondNumber.push(dot)
        return
    }else if(calculator.secondNumber.includes(dot) && calculator.secondNumber[0] === "."){
        calculator.secondNumber.remove(".")
        return;
    }
}
const calculate = () =>{
    switch(calculator.operator){
        case "+":
            if(calculator.displayValue){
                calculator.firstNumber = []
                calculator.firstNumber.push(calculator.displayValue);
                calculator.step = true;
                calculator.secondNumber !== null ? calculator.secondNumber = []:inputNum(n)
                calculator.displayValue = parseFloat(calculator.firstNumber.join("")) + parseFloat(calculator.secondNumber.join(""))
            }
            calculator.displayValue = parseFloat(calculator.firstNumber.join("")) + parseFloat(calculator.secondNumber.join(""))
            displayValueFunc(calculator.displayValue)
            return calculator.displayValue;
        case "-":
            if(calculator.displayValue){
                calculator.firstNumber = []
                calculator.firstNumber.push(calculator.displayValue);
                calculator.step = true;
                calculator.secondNumber !== null ? calculator.secondNumber = []:inputNum(n)
                calculator.displayValue = parseFloat(calculator.firstNumber.join("")) - parseFloat(calculator.secondNumber.join(""))
            }
            calculator.displayValue = parseFloat(calculator.firstNumber.join("")) - parseFloat(calculator.secondNumber.join(""))
            displayValueFunc(calculator.displayValue)
            return calculator.displayValue;
        case "*":
            if(calculator.displayValue){
                calculator.firstNumber = []
                calculator.firstNumber.push(calculator.displayValue);
                calculator.step = true;
                calculator.secondNumber !== null ? calculator.secondNumber = []:inputNum(n)
                calculator.displayValue = parseFloat(calculator.firstNumber.join("")) * parseFloat(calculator.secondNumber.join(""))
            }
            calculator.displayValue = parseFloat(calculator.firstNumber.join("")) * parseFloat(calculator.secondNumber.join(""))
            displayValueFunc(calculator.displayValue)
            return calculator.displayValue;
        case "/":
            if(calculator.displayValue){
                calculator.firstNumber = []
                calculator.firstNumber.push(calculator.displayValue);
                calculator.step = true;
                calculator.secondNumber !== null ? calculator.secondNumber = []:inputNum(n)
                calculator.displayValue = parseFloat(calculator.firstNumber.join("")) / parseFloat(calculator.secondNumber.join(""))
            }
            calculator.displayValue = parseFloat(calculator.firstNumber.join(""))/ parseFloat(calculator.secondNumber.join(""))
            displayValueFunc(calculator.displayValue)
            return calculator.displayValue;
        case "%":
            if(calculator.displayValue){
                calculator.firstNumber = []
                calculator.firstNumber.push(calculator.displayValue);
                calculator.step = true;
                calculator.secondNumber !== null ? calculator.secondNumber = []:inputNum(n)
                calculator.displayValue = parseFloat(calculator.firstNumber.join("")) % parseFloat(calculator.secondNumber.join(""))
            }
            calculator.displayValue = parseFloat(calculator.firstNumber.join("")) % parseFloat(calculator.secondNumber.join(""))
            displayValueFunc(calculator.displayValue)
            return calculator.displayValue;
    }
}
const displayValueFunc = (n) =>{
    display = document.querySelector("#disp")
    display.value = n;
}
const deleteLastNum = () =>{
    if(!calculator.step){
        calculator.firstNumber.splice(calculator.firstNumber.length-1,1)
        displayValueFunc(calculator.firstNumber.join(""))
    }else if(calculator.step){
        calculator.secondNumber.splice(calculator.secondNumber.length-1,1)
        displayValueFunc(calculator.secondNumber.join(""))
    }
}
const resetDisplay = () =>{
    calculator.displayValue = "";
    calculator.firstNumber = [];
    calculator.secondNumber = [];
    calculator.operator = null;
    calculator.step = false
    displayValueFunc(calculator.displayValue)
}
equals.addEventListener("click",()=>{
    display = document.querySelector("#disp")
    displayValueFunc(display.value)
})
