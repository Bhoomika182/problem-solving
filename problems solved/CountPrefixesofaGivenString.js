function CountPrefixesofaGivenString(arr,s){
    let count=0;
    for(let i=0;i<arr.length;i++){
   if (s.startsWith(arr[i])) {
         count++
     }
    }
    return count
}


console.log(CountPrefixesofaGivenString(["a","b","ab","bc","abc"],"abc"))