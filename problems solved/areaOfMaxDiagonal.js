function areaOfMaxDiagonal(arr) {
    let l = 0;
    let maxArea = 0;

    for (let i = 0; i < arr.length; i++) {

        let s = arr[i][0];
        let a = arr[i][1];

        let diagonal = Math.sqrt(s * s + a * a);
        let area = s * a;

        if (diagonal > l) {
            l = diagonal;
            maxArea = area;
        }
    }

    return maxArea;
}

const result = areaOfMaxDiagonal([[9,3],[8,6]]);
console.log(result);
