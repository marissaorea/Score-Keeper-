var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span")
// var input = document.querySelector("input");

var p1Score = 0;

var p2Score = 0;

var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
	
	if(p1Score === winningScore) {
		p1display.classList.add("winner");
		gameOver = true;
	}
		p1display.textContent = p1Score; 

}
	
});


p2Button.addEventListener("click", function(){
	if(!gameOver) {
		p2Score++;

	if(p2Score === winningScore) {
		gameOver = true;
	}

	p2display.textContent = p2Score;

}

});

resetButton.addEventListener("click", function() {
	reset();
});

function reset () {
	p1Score = 0;
	p2Score = 0;

	p1display.textContent = p1Score;
	p2display.textContent = p2Score;
	p1display.classList.remove("winner"); // removes the color associated with the class winner in span elements. 
	p2display.classList.remove("winner");
	gameOver = false;

}

numInput.addEventListener("change", function() {
	winningScoreDisplay.textContent = numInput.value; 
	winningScore = Number(numInput.value);
	reset(); // calling the function inside of the function 

});

