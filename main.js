// function to display content
function displayContent(content) {
    result.value += content
}

// clear input 
clearCalc = function () {
    result.value = ""
}

// result 
calcOutput = function () {
    result.value = eval(result.value)
}

// backspace 
removeLastDigit = function () {
    result.value=result.value.slice(0,-1)
}