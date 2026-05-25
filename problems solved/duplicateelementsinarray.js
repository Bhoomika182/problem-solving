function duplicateInAnArray(arr){
 let seen=new Set();
 let duplicates=new Set();
 for(let num of arr){
     if(seen.has(num)){
         duplicates.add(num)
     }else{
         seen.add(num)
     }
 }
 return duplicates
}
let DArray=duplicateInAnArray([1,2,2,3,4,4,5,5,6,7,7])
console.log(DArray)



function duplicateInAnArray(arr){
    let arr1=[];
    let count=0;
    for(let i=0;i<arr.length-1;i++){
       for(let j=i+1;j<arr.length;j++){
           if(arr[i]===arr[j]){
               arr1.push(arr[i])
               count++
           }
       }
        
    }
    return count
}
let DArray1=duplicateInAnArray([1,2,2,3,4,4,5])
console.log(DArray1)