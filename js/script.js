let leftOperand = '0',operator = '',rightOperand = '0',selectedVal = [],res = '',result='';
let periodRight;
let periodLeft;
let display = document.querySelector("#disp");
let equals = document.querySelector("#equals");
let clear = document.querySelector("#clear");
let del = document.querySelector("#delete");
let btns = [...document.querySelectorAll(".btn")];
function add(a,b){
    let sum = (parseFloat(a)+parseFloat(b)).toFixed(1);
    display.value = `${a} + ${b} = ${sum}`;;
    return sum;
}

function subtract(a,b){
    let diff = (parseFloat(a)-parseFloat(b)).toFixed(1);
    display.value = `${a} - ${b} = ${diff}`
    return diff;
}

function multiply(a,b){
    let prod = (parseFloat(a)*parseFloat(b)).toFixed(1);
    display.value = `${a} * ${b} = ${prod}`
    return prod;
}

function divide(a,b){
    if(b === 0){
        return "Infinity";
    }
    let division = (parseFloat(a) / parseFloat(b)).toFixed(1);
    display.value = `${a} / ${b} = ${division}`
    return division;
}
function mod(a,b){
    let mod = (parseFloat(a) % parseFloat(b)).toFixed(1);
    display.value = `${a} % ${b} = ${mod}`
    return mod;
}
btns.forEach(item=>{item.addEventListener("click",()=>{
    selectedVal.push(item.value);
    switch(item.value){
        case '+':
            operator = '+';
            break;
        case '-':
            operator = '-';
            break;
        case '*':
            operator = '*';
            break;
        case '/':
            operator = '/';
            break;
        case '%':
            operator = '%';
            break;
        default:
            break;
    }
    handleClick(selectedVal,operator);
})});

function handleClick(num,op){
    leftOperand = num.slice(0,num.indexOf(op)).join("");
    console.log(leftOperand)
    rightOperand = num.slice(num.indexOf(op)+1,).join("");
    console.log(rightOperand)
    display.value = num.join("");
    console.log(display.value)
    return `leftOperand ${leftOperand} , rightOperand ${rightOperand}`
}
function checkOccurrence(str,dot){
    let count = 0;
    str.forEach(item =>{
        if(item === dot){
            count++;
        }
    })
    return count
}
function show(value){
    leftOperand = value
    console.log(leftOperand)
    selectedVal.push(leftOperand);
    console.log(selectedVal)
    let r = '';
    let l = '';
    selectedVal.forEach((item,index)=>{
        if(item === operator){
            r = selectedVal.slice(index+1,-1)
            l = selectedVal.slice(0,index)
        }
    })
    periodRight = checkOccurrence(r,".");
    periodLeft = checkOccurrence(l,".");
    result = selectedVal.slice(-1).join("");
    selectedVal = [];
    selectedVal.push(result);
    console.log(value)
    return
}

equals.addEventListener("click",()=>{
    switch(operator){
        case '+':
            display.value = `${add(leftOperand,rightOperand)}`;
            show(display.value)
            break;
        case '-':
            display.value = `${subtract(leftOperand,rightOperand)}`;
            show(display.value);
            break;
        case '*':
            display.value = `${multiply(leftOperand,rightOperand)}`;
            show(display.value);
            break;
        case '/':
            display.value = `${divide(leftOperand,rightOperand)}`;
            show(display.value);
            break;
        case '%':
            display.value = `${mod(leftOperand,rightOperand)}`;
            show(display.value);
            break;
        default:
            break;
    }
})
clear.addEventListener("click",()=>{
    display.value = "";
    selectedVal = [];
});
del.addEventListener("click",()=>{
    res = selectedVal.slice(0,-1).join("");
    display.value = res;
    selectedVal = res.split("");
})



