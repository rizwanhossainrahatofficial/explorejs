var speech="im rizwan hossain rahat. i work hard to become a web developer."
var count=0;
for (i=0;i<speech.length;i++){
    var char=speech[i];
   
    if(char==" "){
        count++;
    }
}
count++;
console.log(count);