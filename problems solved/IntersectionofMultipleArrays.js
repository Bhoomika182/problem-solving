function IntersectionofMultipleArrays(arr) {
    let res = [];

    for (let i = 0; i < arr[0].length; i++) {
        let num = arr[0][i];
        let presentInAll = true;

        for (let j = 1; j < arr.length; j++) {
            if (!arr[j].includes(num)) {
                presentInAll = false;
                break;
            }
        }

        if (presentInAll) {
            res.push(num);
        }
    }

    return res.sort((a, b) => a - b);
}

console.log(IntersectionofMultipleArrays([[3,1,4,5],[1,2,3,4],[3,4,5,6]]));