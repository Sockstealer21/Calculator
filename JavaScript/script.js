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


const display = document.querySelector('input') 
const numberBtn = document.querySelectorAll('.number')
const addBtn = document.querySelector('#add')
const subtractBtn = document.querySelector('#subtract')
const multiplyBtn = document.querySelector('#multiply')
const divideBtn = document.querySelector('#divide')
const equalsBtn = document.querySelector('#equals')
const clearBtn = document.querySelector('#clear')

numberBtn.forEach((button) =>{
    button.addEventListener('click', () =>{
        display.value += button.textContent
    })
})



// Add event listener on all buttons to update display.value to their textcontent