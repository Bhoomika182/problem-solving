function floodFill(arr, sr, sc, color) {
    let original = arr[sr][sc];

    if (original === color) return arr;

    function fill(r, c) {
        if (r < 0 || c < 0 || r >= arr.length || c >= arr[0].length) return;

        if (arr[r][c] !== original) return;

        arr[r][c] = color;

        fill(r + 1, c);
        fill(r - 1, c);
        fill(r, c + 1);
        fill(r, c - 1);
    }
    fill(sr, sc);
    return arr;
}
console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));