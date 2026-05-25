function frequencyOfElements(arr) {
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) count++;
        }
        freq[arr[i]] = count;
    }
    return freq;
}

let FArray = frequencyOfElements([1, 2, 2, 3, 4, 4, 5]);
console.log(FArray)