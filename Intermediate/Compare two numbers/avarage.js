

if(numbergrade <= 60){
	document.getElementById('letter').value = "F";
}
else if(61 <= numbergrade && numbergrade <= 70){ // you reach this point only if all previous confitions are false
	document.getElementById('letter').value = "D";
}
else if(71 <= numbergrade && numbergrade <= 80){ // you reach this point only if all previous confitions are false
	document.getElementById('letter').value = "C";
}
else if(81 <= numbergrade && numbergrade <= 90){ // you reach this point only if all previous confitions are false
	document.getElementById('letter').value = "B";
}
else if(91 <= numbergrade && numbergrade <= 100){ // you reach this point only if all previous confitions are false
	document.getElementById('letter').value = "A";
}



console.log(letter);
