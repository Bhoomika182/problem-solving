function countSpecialQuadruplets(arr) {
    let count = 0;
    const n = arr.length;

    for (let a = 0; a < n - 3; a++) {
        for (let b = a + 1; b < n - 2; b++) {
            for (let c = b + 1; c < n - 1; c++) {
                for (let d = c + 1; d < n; d++) {
                    if (arr[a] + arr[b] + arr[c] === arr[d]) {
                        count++;
                    }
                }
            }
        }
    }

    return count;
}

console.log(countSpecialQuadruplets([1,1,1,3,5])); 