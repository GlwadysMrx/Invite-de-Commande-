document.querySelector("body").addEventListener("keydown", function(element) {
	if(element.key == "Enter") {
		let inputBis = document.querySelector(".base-input").value;
		document.querySelector(".base-input").value = "";
		displayResponse(inputBis);
	}
})

function displayResponse(inputBis) {
	if(inputBis == "hello") {
		showResponse("Hi!");
	} else {
		showResponse("What ?");
		
	}
}

function showResponse(output) {
	document.querySelector(".screen").innerHTML = output;
	
}