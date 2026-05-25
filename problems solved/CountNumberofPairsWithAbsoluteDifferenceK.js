function CountNumberofPairsWithAbsoluteDifferenceK(arr,k){
    let count=0;
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            let sum=Math.abs(arr[i]-arr[j])
            if(sum==k){
                count++
            }
        }
    }
    return count
};

console.log(CountNumberofPairsWithAbsoluteDifferenceK([1,2,2,1], 1))