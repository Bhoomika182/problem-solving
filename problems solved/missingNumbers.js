function missingNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length - 1; i++) {
       for (let j = arr[i] + 1; j < arr[i + 1]; j++) {
            result.push(j);
        }
    }

    return result;
}

let FArray = missingNumbers([1,2,4,5,7,8,10]);
console.log(FArray);