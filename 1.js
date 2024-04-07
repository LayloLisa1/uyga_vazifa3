function numberSplit(number) {
    let half1, half2;
    if (number % 2 === 0) {
        half1 = half2 = number / 2;
    } else {
        half1 = Math.floor(number / 2);//Math.floor(x) - X ni eng yaqin kichik butun soniga yaxlitlangan holda qaytaradi
        half2 = Math.ceil(number / 2); //Math.ceil(x) - X ni eng yaqin katta butun songa yaxlitlangan holda qaytaradi.
    }//ikkita kichik va katta butun sonlarni Math funksiyalari yordamida yaxlitlab oldim.
    return [half1, half2];
}

console.log(numberSplit(4)); 
console.log(numberSplit(10));
console.log(numberSplit(11)); 
console.log(numberSplit(-9)); 
