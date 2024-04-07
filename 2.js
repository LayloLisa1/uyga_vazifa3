function sumOfCubes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3);
    }//Math.pow(i, 3) i qiymatini 3 darajasini qaytaradi ya'niy kubini.
    return sum;
}
console.log(sumOfCubes([1, 5, 9])); 
console.log(sumOfCubes([3, 4, 5]));
console.log(sumOfCubes([2]));     
console.log(sumOfCubes([]));     
