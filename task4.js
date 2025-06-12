

let num=121
function myFun(num){
let str=num.toString()
let st=str.split("").reverse().join('')
return str==st
}
console.log(myFun(121));





function palindrome(num) {
    let str = num.toString();
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return str == reversed;
}

console.log(palindrome("121"));
console.log(palindrome("-121"));



