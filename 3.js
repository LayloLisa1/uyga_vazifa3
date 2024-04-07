function minMax(arr) {
    if (arr.length === 0) return [];

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }

    return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5]));  
console.log(minMax([2334454, 5]));   
console.log(minMax([-10, 0, 100, -500])); 
console.log(minMax([]));     
