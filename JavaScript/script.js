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
    if(calcArray[1] === '/' && calcArray[2] === 0){
        display.value = 'WHAT ARE YOU DOING'
        calcArray.length = 0;
    }
    if (calcArray.length === 3){ // try to get the result and move it to the first value in the array and set the array length to 1 
        num = +parseFloat(operate(calcArray[1],calcArray[0],calcArray[2])).toFixed(4) 
       parseFloat(num).toFixed(4)
       calcArray.length = 0
       calcArray.push(num)
       display.value = calcArray[0]
    } 
    calcArray.push(operateBtn)
    if (calcArray[0] === '/' || calcArray[0] === '+' || calcArray[0] === '-' || calcArray[0] === '*') calcArray.length = 0
    funcCalled = true
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
let funcCalled = false
let answer 

numberBtn.forEach((button) =>{
    button.addEventListener('click', () =>{
        if(funcCalled){
            clearing()
            funcCalled = false
        }
        display.value += button.textContent
    })
})

addBtn.addEventListener('click', ()=> {
    num = +parseFloat(display.value).toFixed(4)
    operateBtn = '+'
    numberinsert()
})

subtractBtn.addEventListener('click', () =>{
    num = +parseFloat(display.value).toFixed(4)
    operateBtn = '-'
    numberinsert()
})

multiplyBtn.addEventListener('click', () =>{
    num = +parseFloat(display.value).toFixed(4)
    operateBtn = '*'
    numberinsert()
})

divideBtn.addEventListener('click', () =>{
    num = +parseFloat(display.value).toFixed(4)
    operateBtn = '/'
    numberinsert()
})

clearBtn.addEventListener('click',() =>{
    calcArray.length = 0;
    clearing()
    console.log(calcArray) 
    funcCalled = true
} )    

equalsBtn.addEventListener('click', ()=>{
    num2 = parseFloat(display.value)
    calcArray.length = 0;
    clearing()
    console.log(calcArray) 
    display.value = +parseFloat(operate(operateBtn,num,num2)).toFixed(4)
    funcCalled = true
    if(display.value === undefined){
        calcArray.length = 0;
        clearing()
    }
    if (operateBtn === '/' && num2 === 0) display.value = 'STOP THAT NOW!'
})









// Add event listener on all buttons to update display.value to their textcontent