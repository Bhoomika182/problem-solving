function  CounttheNumberofConsistent(allowed, words) {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let isValid = true;

        for (let j = 0; j < word.length; j++) {
            if (!allowed.includes(word[j])) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            count++;
        }
    }

    return count;
};

console.log(CounttheNumberofConsistent("ab", ["ad","bd","aaab","baa","badab"]));