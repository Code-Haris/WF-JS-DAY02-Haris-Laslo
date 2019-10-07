function product(input){
 if (toString.call(input) !== "[object Array]")
    return false;
  
         var total   =   1;
  
       for(var i=0;i<input.length;i++){
               if(isNaN(input[i])){
                 continue;
               }
                total   *=  Number(input[i]);
            }
          return total;
        }
console.log(product([1,3,7,10,2]));
alert(product([1,3,7,10,2]))
