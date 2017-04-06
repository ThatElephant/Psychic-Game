<script type="text/javascript">
var wins = 0;
var losses = 0;
var lives = 15;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var myLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log("The letter is: " + myLetter);

document.getElementById("wins").innerHTML += wins;
document.getElementById("losses").innerHTML += losses;
document.getElementById("lives").innerHTML += lives;

document.onkeyup = function() {
    var userGuess = event.key.toLowerCase().trim();
  if (userGuess.length <= 0) { return; }

    console.log("User pressed: " + userGuess);

    if (userGuess == myLetter) {
      wins++;
    lives = 15;
      document.getElementById("message").innerHTML = "It was " + userGuess + "! Nice job!";
        document.getElementById("wins").innerHTML = wins;
    document.getElementById("guesses").innerHTML = "";
        document.getElementById("lives").innerHTML = lives; 
    myLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    	console.log("The new letter is: " + myLetter);
    } else { 
      document.getElementById("message").innerHTML = "It wasn't " + userGuess + "!";
    document.getElementById("guesses").innerHTML += userGuess;
      lives--;
        document.getElementById("lives").innerHTML = lives; 
    }
  	if (lives <= 0) {
      losses++;
    lives = 15;
    document.getElementById("message").innerHTML = "You lost. Sorry.";
    document.getElementById("guesses").innerHTML = "";
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("lives").innerHTML = lives; 
    myLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    	console.log("The new letter is: " + myLetter);
    }
};
</script>