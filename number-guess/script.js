var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
var answer = Math.floor(Math.random() * 100) + 1;

var no_of_guesses = 0;
var guesses_num = [];

function play() {
    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Please enter number between 1 to 100 !!!!")
    } else {
        guesses_num.push(user_guess);
        no_of_guesses += 1;
        if (user_guess < answer) {
            msg1.textContent = "Your Guess is too low.."
            msg2.textContent = "No. of Guesses: " + no_of_guesses;
            msg3.textContent = "Guessed Numbers are :" + guesses_num;
        } else if (user_guess > answer) {
            msg1.textContent = "Your Guess is too High.."
            msg2.textContent = "No. of Guesses: " + no_of_guesses;
            msg3.textContent = "Guessed Numbers are :" + guesses_num;
        } else if (user_guess == answer) {
            msg1.textContent = "Yayy!! Your Guess is right.."
            msg2.textContent = "No. of Guesses: " + no_of_guesses;
            msg3.textContent = "Guessed Numbers are :" + guesses_num;
        }
    }
}