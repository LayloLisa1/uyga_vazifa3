function returnVowel(arr) {
    let vowels = 'aeiouAEIOU'; //unli harflarni belgilab oldim.vowels unli harflar degani

    return arr.map(word => {
        let result = '';
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (vowels.includes(char.toLowerCase())) {
                result += char.toLowerCase(); 
            }
        }

        return result;
    });
}
console.log(returnVowel(["Assalomu alaykum","salom","Najot ta'lim"])); 
console.log(returnVowel(["Toshkent"])); 
