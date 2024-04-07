function formatPhoneNumber(numbers) {
    let phoneNumber = numbers.join('');
    let formattedNumber = `(${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6)}`;

    return formattedNumber;
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); 
console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); 
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])); 
