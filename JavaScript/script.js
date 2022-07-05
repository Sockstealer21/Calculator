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

numberinsert = function(){
    numberArray.push(num)
    clearing()

}

const display = document.querySelector('input') 
const numberBtn = document.querySelectorAll('.number')
// functionBtns below
const addBtn = document.getElementById('+')
const subtractBtn = document.getElementById('-')
const multiplyBtn = document.getElementById('*')
const divideBtn = document.getElementById('/')
const equalsBtn = document.etElementById('=')
const clearBtn = document.getElementById('Clear')

let num = display.value
let operateBtn
let numberArray = []

numberBtn.forEach((button) =>{
    button.addEventListener('click', () =>{
        display.value += button.textContent
    })
})

addBtn.addEventListener('click', () =>{
    num = parseInt(display.value)
    clearing()
    operateBtn = '+'
})

subtractBtn.addEventListener('click', () =>{
    num = parseInt(display.value)
    clearing()
    operateBtn = '-'
})

multiplyBtn.addEventListener('click', () =>{
    num = parseInt(display.value)
    clearing()
    operateBtn = '*'
})

divideBtn.addEventListener('click', () =>{
    num = parseInt(display.value)
    clearing()
    operateBtn = '/'
})

clearBtn.addEventListener('click', clearing)    

equalsBtn.addEventListener('click', ()=>{
    num2 = parseInt(display.value)
    display.value = operate(operateBtn,num,num2)
})







// Add event listener on all buttons to update display.value to their textcontent