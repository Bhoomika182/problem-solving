function firstUniqueChar(str) {

 for(let i=0;i<str.length;i++){
         let count=0;
     for(j=0;j<str.length;j++){
         if(str[i]===str[j]){
             count++
         }
     
     }
        if(count===1){
             return str[i]
         }
 }
  return null;
}

let FArray = firstUniqueChar("bhoomika");
console.log(FArray);



function thirdUniqueChar(str) {
    let uniqueCount = 0;

    for (let i = 0; i < str.length; i++) {
        let count = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }

        if (count === 1) {
            uniqueCount++;
            if (uniqueCount === 3) {
                return str[i];
            }
        }
    }

    return null; 
}

let FArray1 = thirdUniqueChar("bhoomika");
console.log(FArray1); 