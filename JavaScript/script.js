add = function(a,b){
    return a+b
}   

subtract = function(a,b){
    return a-b
}

multiply = function(a,b){
    return a*b
}

divide = function(a,b){
    return a/b
}

operate = function(symbol,a,b){
    if (symbol === '+'){
        return add(a,b)
    } else if (symbol === '-'){
       return subtract(a,b)
    } else if (symbol === '*'){
        return multiply(a,b)
    } else if (symbol === '/'){
        return divide(a,b)
    }
}

clearing = function(){
    display.value = ''
}


const display = document.querySelector('input') 
const numberBtn = document.querySelectorAll('.number')
// functionBtns below
const addBtn = document.querySelector('#add')
const subtractBtn = document.querySelector('#subtract')
const multiplyBtn = document.querySelector('#multiply')
const divideBtn = document.querySelector('#divide')
const equalsBtn = document.querySelector('#equals')
const clearBtn = document.querySelector('#clear')

let num1 = display.value
let num2 
let operateBtn
let numberArray = []

numberBtn.forEach((button) =>{
    button.addEventListener('click', () =>{
        display.value += button.textContent
    })
})

addBtn.addEventListener('click', () =>{
    num1 = parseInt(display.value)
    clearing()
    operateBtn = '+'
})

subtractBtn.addEventListener('click', () =>{
    num1 = parseInt(display.value)
    clearing()
    operateBtn = '-'
})

multiplyBtn.addEventListener('click', () =>{
    num1 = parseInt(display.value)
    clearing()
    operateBtn = '*'
})

divideBtn.addEventListener('click', () =>{
    num1 = parseInt(display.value)
    clearing()
    operateBtn = '/'
})

clearBtn.addEventListener('click', clearing)    

equalsBtn.addEventListener('click', ()=>{
    num2 = parseInt(display.value)
    display.value = operate(operateBtn,num1,num2)
})







// Add event listener on all buttons to update display.value to their textcontent