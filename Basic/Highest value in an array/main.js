function max(input) {
     if (toString.call(input) !== "[object Array]")  
       return false;
  return Math.max.apply(null, input);
	}

console.log(max([1,7,-3,9]));
alert(max([1,7,-3,9]));

