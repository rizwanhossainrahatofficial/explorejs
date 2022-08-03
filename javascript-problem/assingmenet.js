function hotelcost(din){
    var totalcost=0;
    if(din<=10){
        var firstTenNight=din*100;
        
    }
    else if(din<=20){
        var firstTenNight=10*100;
        var remaining=din-10;
      var secondTenNightDiscount=(100*80)/100;
        var secondTenNight=remaining*secondTenNightDiscount;
 
         totalcost=firstTenNight+secondTenNight;


}
if(din<=30){
    var firstTenNight=10*100;
    var secondTenNight=10*80;
    var remaining=din-20;
    var thirdTenNightDiscount=(100*50)/100;
    var thirdTenNight=remaining*thirdTenNightDiscount;
    totalcost=firstTenNight+secondTenNight+thirdTenNight;

}
return totalcost;
}
var result=hotelcost(30);
console.log(result);
// friend array thake name sob thake boro take ber korte hobe
var friend=["salam","kalam","golamrabbanirafi","rofiq","borkkot","rizwanhossain"];
var longName=friend[0];
for(i=0;i<friend.length;i++){
    var element=friend[i];
    if(element.length>longName.length){
       longName=element;
    }
}
    
    console.log(longName);
    

// console.log(longName);
    