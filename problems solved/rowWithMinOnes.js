function  rowWithMinOnes (arr) {
       let maxOnes = 0;
    let rowIndex = 0;
 for(let i=0;i<arr.length;i++){
     let count=0;
     for(let j=0;j<arr[i].length;j++ ){
         if(arr[i][j]===1){
             count++
         }
          if(count>maxOnes){
       maxOnes = count;
            rowIndex = i;
          }
     }
     
 }
return [rowIndex,maxOnes]
};
console.log(rowWithMinOnes([[0,1],[1,0]]))