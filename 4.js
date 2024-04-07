function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function findPrimeNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            return arr[i];
        }
    }
    return null; // agar tub son topilmasa
}

console.log(findPrimeNumber([1, 4, 9, 12, 3]));      // ➞ 3
console.log(findPrimeNumber([123, 42, 93, 21, 11])); // ➞ 123
