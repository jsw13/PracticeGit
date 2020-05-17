// app.js

function addNum(x,y) {
    return(x + y)
}

function subtractNum(x,y) {
    return(x - y)
}

function multiplyNum(x,y) {
    return(x * y)
}

console.log(addNum(1,2))
console.log(subtractNum(10,9))

module.exports = {
    addNum
}