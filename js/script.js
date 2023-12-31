let leftOperand = '0',operator = '',rightOperand = '0',selectedVal,res = '';
let display = document.querySelector("#disp");
function add(a,b){
    let sum = parseInt(a)+parseInt(b);
    display.value = `${a} + ${b} = ${sum}`
    return sum;
}

function subtract(a,b){
    let diff = parseInt(a) - parseInt(b)
    display.value = `${a} - ${b} = ${diff}`
    return a - b;
}

function multiply(a,b){
    let prod = parseInt(a) * parseInt(b)
    display.value = `${a} * ${b} = ${prod}`
    return prod;
}

function divide(a,b){
    if(b === 0){
        return "Infinity";
    }
    let division = (parseInt(a) / parseInt(b)).toFixed(4);
    display.value = `${a} / ${b} = ${division}`
    return division;
}
let equals = document.querySelector("#equals");
let clear = document.querySelector("#clear");
let del = document.querySelector("#delete");
let btns = [...document.querySelectorAll(".btn")];
btns.forEach(item=>{item.addEventListener("click",()=>{
    selectedVal = item.value;
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
        default:
            break;
    }
    handleClick(selectedVal,operator);
})});

function handleClick(num,op){
    if(num !== ''){
        res += num
    }else if(op !== ''){
        op = operator
    }
    leftOperand = res.split(op)[0];
    rightOperand = res.split(op)[1];
    console.log(res)
    display.value = `${leftOperand} ${op} ${rightOperand}`
    return `leftOperand ${leftOperand} , rightOperand ${rightOperand}`
}
equals.addEventListener("click",()=>{
    switch(operator){
        case '+':
            display.value = `${add(leftOperand,rightOperand)}`;
            break;
        case '-':
            display.value = `${subtract(leftOperand,rightOperand)}`;
            break;
        case '*':
            display.value = `${multiply(leftOperand,rightOperand)}`;
            break;
        case '/':
            display.value = `${divide(leftOperand,rightOperand)}`;
            break;
        default:
            break;
    }
})

clear.addEventListener("click",()=>{
    display.value = "";
    res = "";
});
del.addEventListener("click",()=>{
    res = res.split('').slice(0,-2).join("");
    display.value = res;
})

