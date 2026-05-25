function countMatchingARule(arr, ruleKey, ruleValue) {

let count=0;
for(let i=0;i<arr.length;i++){
    let item=arr[i];
    
    if(
        (ruleKey==="type" && ruleValue===item[0])||
        (ruleKey==="color" && ruleValue===item[1])||
        (ruleKey==="name" && ruleValue===item[2])
        ){
            count++
        }
    
}
return count
   
}

// Test case
console.log(countMatchingARule(
    [["phone","blue","pixel"], ["computer","silver","lenovo"], ["phone","gold","iphone"]],
    "color",
    "silver"
));