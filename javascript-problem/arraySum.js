var num=[30,2,3,2,5,4,55,60,5];
var sum=0;
for(i=0;i<num.length;i++){
    var element=num[i];
    sum=sum+element;
}
console.log("the sum is:",sum);

function arraySum(num){
    for(i=0;i<num.length;i++){
        var element=num[i];
        sum=sum+element;
    }
    return sum;
}
var result=arraySum([30,2,3,2,5,4,55,60,5]);
console.log("the sum is:",result);