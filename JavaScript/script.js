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

numberBtn.forEach((button) =>{
    button.addEventListener('click', () =>{
        display.value += button.textContent
    })
})
    

// Add event listener on all buttons to update display.value to their textcontent