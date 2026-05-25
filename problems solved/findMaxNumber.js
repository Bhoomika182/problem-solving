function findMax(arr) {
let MaxNumber=arr[0]
for(let i=0;i<arr.length;i++){
 MaxNumber = Math.max(MaxNumber, arr[i]);}
return MaxNumber
}

let FArray = findMax([1,2,300,4,200,5,6,71,3,100]);
console.log(FArray);