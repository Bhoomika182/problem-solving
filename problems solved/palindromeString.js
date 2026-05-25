function palindrome(str){
let str1=str;
let revstr="";
for(let i=str.length-1;i>=0;i--){
    revstr+=str[i]

}
    if(revstr===str1){
        console.log(revstr,"is a palindrome")
    }else{
        console.log(revstr,"is not a palindrome")
    }
}
let palindromestr=palindrome("hello")