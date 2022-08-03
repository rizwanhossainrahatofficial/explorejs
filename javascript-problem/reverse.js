function reverseString(str){
    var reverse="";
    for(i=0; i<str.lenght;i++){
        var char=str[i];
        reverse=char+reverse;
    }
    return reverse;
}

var statement="im rizwan hossain rahat";
var forAlien=reverseString(statement);
console.log(forAlien);