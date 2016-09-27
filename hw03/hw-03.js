
var str="";
for(var i=0; i<5; i++){
    for(var j=0; j<=i;j++){
        str=str+"#";
    }
str=str+"\n\r";
}
console.log(str);


/* ЗАПАСНОЙ ВАРИАНТ. ВЕРНЕЕ, ПЕРВЫЙ, НО КОНСОЛЬ ЕГО ВЫДАЕТ СТРАННО
for(var i=0; i<5; i++) {
    for (var j = 0; j <= i; j++) {
        console.log("#");
    }
    console.log("\n\r");
}

*/


