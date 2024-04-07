function multiply(arr) {
    return function innerFunction(num) {
        if (arr.length === 0) {
            return [];
        } else {
            const multipliedArray = arr.map(element => element * num);
            return multipliedArray;
        }
    };
}

console.log(multiply([1, 2, 3])(2));
console.log(multiply([4, 6, 5])(10));
console.log(multiply([1, 2, 3])(0)); 
