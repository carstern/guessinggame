//Skapa kopplingar till html
//antal gissningar kvar
const guessesLeft = document.getElementById("guesses-left");
//starta spelet
const startGame = document.getElementById("startGame");
const gameDiv = document.getElementById("game");
//guess input
let guessInput = document.getElementById("guess");
//guess-btn
const guessBtn = document.getElementById("guessBtn");
//guess list
const guessList = document.getElementById("guessList");
//visa antalet gissningar
let numberOfGuesses;

//Generera en random siffra mellan 0-100 med mat random vid start
//lagra siffran
let correctAnswer;
let userGuess;
startGame.addEventListener("click", function () {
  correctAnswer = Math.floor(Math.random() * 101);
  console.log(correctAnswer); // skriv ut korrekt siffra i log
  // töm listan vid omstart
  guessList.textContent = ''; 
  numberOfGuesses = 5;
  //presentera antal gissningar kvar
  guessesLeft.textContent = `You have ${numberOfGuesses} guesses left!`;
  });

//skapa eventlistener på knappen
guessBtn.addEventListener("click", function () {
  //hämta gissning från input
  let userGuess = guessInput.value;
  console.log(userGuess);

  //jämför input med mathimport
  if (userGuess < correctAnswer) {
    console.log("Too low!");
    //minska antalet gissningar kvar
    numberOfGuesses--;
    guessesLeft.textContent = `You have ${numberOfGuesses} guesses left!`;
    //ge feedback i html
    //display tidigare gissningar
    const feedbackElement = document.createElement('li');
    feedbackElement.textContent = `${userGuess} is to low, try again!`;
    feedback.appendChild(feedbackElement);
  } else if (userGuess == correctAnswer){
    console.log("Correct!");
    numberOfGuesses--;
    guessesLeft.textContent = `You have ${numberOfGuesses} guesses left!`;
    const feedbackElement = document.createElement('li');
    feedbackElement.textContent = `${userGuess} is correct, well done!`;
    feedback.appendChild(feedbackElement);
  } else if (userGuess > correctAnswer) {
    console.log("Too high!");
    numberOfGuesses--;
    guessesLeft.textContent = `You have ${numberOfGuesses} guesses left!`;
    const feedbackElement = document.createElement('li');
    feedbackElement.textContent = `${userGuess} is too high`;
    feedback.appendChild(feedbackElement);
  } if (numberOfGuesses == 0){
        guessesLeft.textContent = `Game Over!`;
        gameDiv.style.backgroundColor = black;
  }

  if (userGuess == 666) {
    const tryAgainElement = document.createElement('button');
    tryAgainElement.textContent = `Hellraiser!`;
    feedback.appendChild(tryAgainElement);

    tryAgainElement.addEventListener('click', function(){
        console.log(correctAnswer);
        const cheatElement = document.createElement('li');
        cheatElement.textContent = correctAnswer;
        feedback.appendChild(cheatElement);
    })
}

});

// const feedback = document.quarySelector("p");
//när gissningarna är slut, avsluta spelet


