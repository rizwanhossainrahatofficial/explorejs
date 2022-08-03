function factorial(num){
    var fact=1;
    for(var i=1;i<=num;i++){
        fact=fact*i
    }
    return fact;
}
var result=factorial(5);
console.log(result);

// recursive way te korar jonno first a stoping condition rakhte hobe
// 5!=5*4*3*2*1

function factorialRecursive(num){
    if(num==1){
        return 1;
    }
    else{
        return num*factorialRecursive(num-1);
    }
}

var result=factorialRecursive(5);
console.log(result);