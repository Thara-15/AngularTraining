type CategoryWords = {
  [category: string]: string[];
};

const wordsByCategory: CategoryWords = {
  "Programming": ["typescript", "javascript", "frontend", "backend", "developer", "variable", "function", "interface", "object", "class"],
  "Fruits": ["apple", "banana", "mango", "orange", "strawberry", "blueberry", "pineapple", "grape", "peach", "cherry"],
  "Animals": ["elephant", "tiger", "lion", "giraffe", "kangaroo", "dolphin", "penguin", "zebra", "rabbit", "monkey"],
  "Countries": ["india", "canada", "brazil", "france", "germany", "italy", "australia", "japan", "china", "mexico"]
};

let selectedCategory = "";
let selectedWord = "";
let guessedLetters: string[] = [];
let wrongGuesses = 0;
const maxWrongGuesses = 6;

const wordDisplay = document.getElementById("word-display") as HTMLElement;
const categoryDisplay = document.getElementById("category") as HTMLElement;
const messageDisplay = document.getElementById("message") as HTMLElement;
const resetButton = document.getElementById("reset") as HTMLButtonElement;
const keyboardContainer = document.getElementById("keyboard") as HTMLElement;
const remainingDisplay = document.getElementById("remaining") as HTMLElement;

function pickRandomWord() {
  const categories = Object.keys(wordsByCategory);
  selectedCategory = categories[Math.floor(Math.random() * categories.length)];
  const words = wordsByCategory[selectedCategory];
  selectedWord = words[Math.floor(Math.random() * words.length)];
}

function updateWordDisplay() {
  const display = selectedWord
    .split("")
    .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
  wordDisplay.textContent = display;

  if (!display.includes("_")) {
    messageDisplay.textContent = "🎉 You Win!";
    disableAllKeys();
  }
}

function handleGuess(letter: string, button: HTMLButtonElement) {
  button.disabled = true;

  if (selectedWord.includes(letter)) {
    guessedLetters.push(letter);
    updateWordDisplay();
  } else {
    wrongGuesses++;
    remainingDisplay.textContent = `Remaining guesses: ${maxWrongGuesses - wrongGuesses}`;

    if (wrongGuesses === 3) {
      categoryDisplay.textContent = `Category: ${selectedCategory}`;
    }

    if (wrongGuesses >= maxWrongGuesses) {
      messageDisplay.textContent = `💀 Game Over! The word was "${selectedWord}"`;
      disableAllKeys();
    }
  }
}

function disableAllKeys() {
  const keys = document.querySelectorAll(".key") as NodeListOf<HTMLButtonElement>;
  keys.forEach(key => key.disabled = true);
}

function createKeyboard() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  keyboardContainer.innerHTML = "";
  letters.forEach(letter => {
    const button = document.createElement("button");
    button.textContent = letter;
    button.className = "key";
    button.addEventListener("click", () => handleGuess(letter, button));
    keyboardContainer.appendChild(button);
  });
}

function startGame() {
  guessedLetters = [];
  wrongGuesses = 0;
  messageDisplay.textContent = "";
  categoryDisplay.textContent = "Category: ???";
  remainingDisplay.textContent = `Remaining guesses: ${maxWrongGuesses}`;

  pickRandomWord();
  updateWordDisplay();
  createKeyboard();
}

resetButton.addEventListener("click", startGame);

startGame();
