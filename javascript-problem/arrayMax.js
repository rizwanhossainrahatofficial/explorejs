var marks=[56,60,84,57,90,92,95,75];
var max=marks[0];
for(i=0;i<marks.length;i++){
    var element=marks[i];
   if(element>max){
       max=element;
   }
}
console.log(max);