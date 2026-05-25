function mergeSortedArray(num1, m, num2, n) {
    let i = m - 1; 
    let j = n - 1; 
    let k = m + n - 1; 

    while (j >= 0) {
        if (i >= 0 && num1[i] > num2[j]) {
            num1[k] = num1[i];
            i--;
        } else {
            num1[k] = num2[j];
            j--;
        }
        k--;
    }

    return num1;
}

console.log(mergeSortedArray([1,2,3,0,0,0], 3, [2,5,6], 3));





function mergeArray(arr1,arr2) {
 
    let mergedArray = arr1.concat(arr2);
    return mergedArray.sort((a, b) => a - b);
}

let FArray = mergeArray([1,2,4,5,7,8,10],[3,6,9]);
console.log(FArray);