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
    calcArray.push(num)
    clearing()
    if (calcArray.length === 3){ // try to get the result and move it to the first value in the array and set the array length to 1
       num = parseInt(operate(calcArray[1],calcArray[0],calcArray[2])) 
       parseInt(num)
       calcArray.length = 0
       calcArray.push(num)
    }
    calcArray.push(operateBtn)
    
    console.log(calcArray)
}

const display = document.querySelector('input') 
const numberBtn = document.querySelectorAll('.number')
// functionBtns below
const addBtn = document.getElementById('+')
const subtractBtn = document.getElementById('-')
const multiplyBtn = document.getElementById('*')
const divideBtn = document.getElementById('/')
const equalsBtn = document.getElementById('=')
const clearBtn = document.getElementById('Clear')

let num = display.value
let operateBtn
let calcArray = []

numberBtn.forEach((button) =>{
    button.addEventListener('click', () =>{
        if(calcArray.length === 0){
            display.value = ''
        }
        display.value += button.textContent
    })
})

addBtn.addEventListener('click', ()=> {
    num = parseInt(display.value)
    operateBtn = '+'
    numberinsert()
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

clearBtn.addEventListener('click',() =>{
    calcArray.length = 0;
    clearing()
    console.log(calcArray) 
} )    

equalsBtn.addEventListener('click', ()=>{
    num2 = parseInt(display.value)
    calcArray.length = 0;
    clearing()
    console.log(calcArray) 
    display.value = operate(operateBtn,num,num2)
    
})







// Add event listener on all buttons to update display.value to their textcontent