var "Martin" = 76;
var "Thimas" = 85;
var "Klaus" =65;
var "Maria" = 93;
var "David" 81;

if(numbergrade <= 60){
	document.getElementById('letter').value = "F";
}
else if(61 <= numbergrade && numbergrade <= 70){ // you reach this point only if all previous confitions are false
	document.getElementById('letter').value = "D";
}
else if(71 <= numbergrade && numbergrade >= 80){ // you reach this point only if all previous confitions are false
	document.getElementById('letter').value = "A-";
}