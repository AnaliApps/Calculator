let leftOperand = '0',operator = '',rightOperand = '0',selectedVal = [],res = '',result='';
let display = document.querySelector("#disp");
let equals = document.querySelector("#equals");
let clear = document.querySelector("#clear");
let del = document.querySelector("#delete");
let btns = [...document.querySelectorAll(".btn")];
// const numberFormatter = new Intl.NumberFormat('en-US', {
//   style: 'decimal',
//   minimumFractionDigits: 2,
//   maximumFractionDigits: 2
// });
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
// let btnPeriod = document.querySelector("#period");
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
    // if(leftOperand.includes(".")){
    //     btnPeriod.setAttribute("disabled","");
    // }else if(rightOperand.includes(".")){
        
    //     btnPeriod.setAttribute("disabled","")
    // }
    // btnPeriod.removeAttribute("disabled")
    console.log(rightOperand)
    display.value = num.join("");
    console.log(display.value)
    return `leftOperand ${leftOperand} , rightOperand ${rightOperand}`
}
function show(value){
    leftOperand = value
    console.log(leftOperand)
    selectedVal.push(leftOperand);
    console.log(selectedVal)
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
// btnPeriod.addEventListener("click",()=>{
//     let l = leftOperand.includes(".")
//     let r = rightOperand.includes(".")
//     if(l){
//         btnPeriod.disabled = true;
//     }else if(r){
//         btnPeriod.disabled = true;
//     }
//     btnPeriod.disabled = false;
//     console.log(`left ${l} and right ${r}`)
// })


