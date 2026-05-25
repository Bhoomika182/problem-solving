function FinalPricesWithaSpecialDiscountinaShop(arr) {
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<=arr[i]){
            arr[i]=arr[i]-arr[j];
            break;
        }
    }
}
return arr
}

console.log(FinalPricesWithaSpecialDiscountinaShop([8, 4, 6, 2, 3]));