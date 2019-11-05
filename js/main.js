(() => {

	console.log('fired!');

	let player_lives = 5,
		player = document.querySelector("#weapon"),
		computer,
		trigger = document.querySelector("#play"),
		status = document.querySelector(".winlose"),
		computer_lives = 5;


	const choices = ["rock", "paper", "scissors"];

	function playGame() {
		console.log('clicked the button');

		computer = choices[Math.floor(Math.random() * choices.length)];
		
		let player_choice = player.value;

		console.log("computer:", computer, "player:", player_choice);
		

		// This is a comment. Check for a tie
		if(computer == player_choice) {
			// tie - no one wins
			status.textContent = "Tie! You live to shoot another day!";
		} else {
			status.textContent = "Something Else!";
		}

}	

	trigger.addEventListener("click", playGame);	
})();