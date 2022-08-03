var buisness =450;
var minister=550;
var sochib=250;
if(buisness>minister){
    if(buisness>sochib){
        console.log("buisness is bigger");
    }
    else{
        console.log("sochib  is bigger");
    }
}
else{
    if(minister>sochib){
        if(minister>buisness)
        console.log("minster is bigger");
    }
    else{
        console.log("sochib is bigger");
 
    }
}

var buisness =450;
var minister=550;
var sochib=7050;

var max=Math.max(buisness,minister,sochib);
console.log(max);