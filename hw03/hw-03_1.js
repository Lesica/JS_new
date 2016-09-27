var str="";
var CONST=8;
for(var i=0; i<CONST; i++){
    for(var j=0; j<CONST;j=j+2){
        i%2==0?str=str+" #":str=str+"# ";
    }
    str=str+"\n\r";
}
console.log(str);