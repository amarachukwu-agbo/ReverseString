'use strict';
function reverseString(stringValue){
	if (stringValue === ""){
		return null
	}
	else{
		var reversedString = "";
		for(var counter=stringValue.length-1 ; counter >= 0; counter--){
			reversedString += stringValue[counter];
		}
		if (reversedString === stringValue){
			return true
		}
		else{
			return reversedString
		}
	}
}

module.exports=reverseString