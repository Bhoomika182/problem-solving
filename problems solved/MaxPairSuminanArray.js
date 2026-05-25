function MaxPairSuminanArray(arr){
    let maxSum = -1;

    function largestDigit(num) {
        let maxDigit = 0;
        while (num > 0) {
            let digit = num % 10;
            if (digit > maxDigit) maxDigit = digit;
            num = Math.floor(num / 10);
        }
        return maxDigit;
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(largestDigit(arr[i]) === largestDigit(arr[j])){
                let sum = arr[i] + arr[j];
                if(sum > maxSum){
                    maxSum = sum;
                }
            }
        }
    }

    return maxSum;
}


console.log(MaxPairSuminanArray([2536,1613,3366,162])); 
console.log(MaxPairSuminanArray([51,71,17,24,42]));  
console.log(MaxPairSuminanArray([112,131,411]));  