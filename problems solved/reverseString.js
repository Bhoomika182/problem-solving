function reverseString(str){
    let revstr="";
    for(let i=str.length-1;i>=0;i--){
      revstr=revstr+str[i]
    }
    return revstr
}
let reverse=reverseString("hello")
console.log(reverse)