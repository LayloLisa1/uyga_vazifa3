function findMissingNumber(nums) {
    const n = nums.length;
    let sum = (n * (n + 1)) / 2;

    for (let num of nums) {
        sum -= num;
    }
    return sum;
}
console.log(findMissingNumber([3, 0, 1]));
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); 
