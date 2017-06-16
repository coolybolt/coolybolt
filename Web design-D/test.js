   document.addEventListener("keydown", checkKeyUp, false);
   function checkKeyUp(e) {
   	var keyCode = e.keyCode;
    	if(keyCode === 76){
        console.log("You pressed L!");
	   isLPressed = true;
    	}
	if(keyCode === 65){
        console.log("You pressed A!");
	   isAPressed = true;
    	}
   }