var id=[5,4,6,2,5,2,1,6,8,2,8,6];
var uniqueName=[];
for(i=0;i<id.length;i++){
    var element=id[i];
    var index=uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);

    }

}
console.log(uniqueName);