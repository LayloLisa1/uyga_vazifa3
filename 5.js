function multiplyWithoutOperator(arr) {
    let result = 0;
    let num1 = arr[0];
    let num2 = arr[1];

    for (let i = 0; i < num2; i++) {
        result += num1;
    }
//num2 ni num1 marta qushib boradi.shunda kupaytma ishlatmasdan algoritm tuzsak buladi.
//Pythondagi masala kabi.
    return result;
}

console.log(multiplyWithoutOperator([3, 4])); 
console.log(multiplyWithoutOperator([2, 4])); 
console.log(multiplyWithoutOperator([2, 5]));
