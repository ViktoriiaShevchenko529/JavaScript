const findLongestWord = function(string) {
    let findLongestWord;
    let words = 0;
    let LongestWord;
    return string.split(" ").length;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'