
function findWordsContaining(arr,x){
    let indexes=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(x)) {
            indexes.push(i);
        }

    }
   return indexes
}
const input = findWordsContaining(["leet", "code"], "e");
console.log(input)