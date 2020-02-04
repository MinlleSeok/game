// define the time limit
let TIME_LIMIT = 60;

// define quotes to be used
let quotes_array = [
    "너 자신을 푸쉬행, 왜냠 아무도 너를 위해 그것을 해주지 않앙.",
    "실패는 조미료야, 그 맛을 내는.",
    "확신을 갖고 일어나구, 만족하며 잠들엉.",
    "힘들 수 도 있엉, 하지만 불가능이란 뜻은 아니얌.",
    "면빈이키우기",
    "당신의 일을 사랑하세용."
];

// selecting required elements
let timer_text;
let accuracy_text;
let error_text;
let cpm_text;
let wpm_text;
let quote_text;
let input_area;
let restart_btn;
let cpm_group;
let wpm_group;
// eslint-disable-next-line
let error_group;
// eslint-disable-next-line
let accuracy_group;

function initGame() {
    timer_text = document.querySelector(".curr_time");
    accuracy_text = document.querySelector(".curr_accuracy");
    error_text = document.querySelector(".curr_errors");
    cpm_text = document.querySelector(".curr_cpm");
    wpm_text = document.querySelector(".curr_wpm");
    quote_text = document.querySelector(".quote");
    input_area = document.querySelector(".input_area");
    restart_btn = document.querySelector(".restart_btn");
    cpm_group = document.querySelector(".cpm");
    wpm_group = document.querySelector(".wpm");
    error_group = document.querySelector(".errors");
    accuracy_group = document.querySelector(".accuracy");
}

let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
// eslint-disable-next-line
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer = null;

function updateQuote() {
    quote_text.textContent = null;
    current_quote = quotes_array[quoteNo];

    // separate each character and make an element
    // out of each of them to individually style them
    current_quote.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        quote_text.appendChild(charSpan)
    })

    // roll over to the first quote
    if (quoteNo < quotes_array.length - 1)
        quoteNo++;
    else
        quoteNo = 0;
}

function processCurrentText() {
    // get current input text and split it
    let curr_input = input_area.value;
    let curr_input_array = curr_input.split('');

    // increment total characters typed
    characterTyped++;

    errors = 0;

    let quoteSpanArray = quote_text.querySelectorAll('span');
    quoteSpanArray.forEach((char, index) => {
        let typedChar = curr_input_array[index]

        // character not currently typed
        if (typedChar == null) {
            char.classList.remove('correct_char');
            char.classList.remove('incorrect_char');
        
            // correct character
        } else if (typedChar === char.innerText) {
            char.classList.add('correct_char');
            char.classList.remove('incorrect_char');

            // incorrect character
        } else {
            char.classList.add('incorrect_char');
            char.classList.remove('correct_char');

            // increment number of errors
            errors++;
        }
    })

    // display the number of errors
    error_text.textContent = total_errors + errors;

    // update accuracy text
    let correctCharacters = (characterTyped - (total_errors + errors));
    let accuracyVal = ((correctCharacters / characterTyped) * 100);
    accuracy_text.textContent = Math.round(accuracyVal);

    // if current text is completely typed
    // irrespective of errors
    if (curr_input.length === current_quote.length) {
        updateQuote();

        // update total errors
        total_errors += errors;

        // clear the input area
        input_area.value = "";
    }
}

function startGame() {
    resetValues();
    updateQuote();

    // clear old and start a new timer
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

function resetValues() {
    timeLeft = TIME_LIMIT;
    timeElapsed = 0;
    errors = 0;
    total_errors = 0;
    accuracy = 0;
    characterTyped = 0;
    quoteNo = 0;
    input_area.disabled = false;

    input_area.value = "";
    quote_text.textContent = 'Click on the area below to start the game.';
    accuracy_text.textContent = 100;
    timer_text.textContent = timeLeft + 's';
    error_text.textContent = 0;
    restart_btn.style.display = "none";
    cpm_group.style.display = "none";
    wpm_group.style.display = "none";
}

function updateTimer() {
    if (timeLeft > 0) {
        // decrease the current time left
        timeLeft--;

        // increase the time elapsed
        timeElapsed++;

        // update the timer text
        timer_text.textContent = timeLeft + "s";
    } else {
        // finish the game
        finishGame();
    }
}

function finishGame() {
    // stop the timer
    clearInterval(timer);

    // disable the input area
    input_area.disabled = true;

    // show finishing text
    quote_text.textContent = "Click on restart to start a new game.";

    // display restart button
    restart_btn.style.display = "block";

    // calculate cpm and wpm
    let cpm = Math.round(((characterTyped / timeElapsed) * 60));
    let wpm = Math.round((((characterTyped / 5) / timeElapsed) * 60));

    // update cpm and wpm text
    cpm_text.textContent = cpm;
    wpm_text.textContent = wpm;

    // display the cpm and wpm
    cpm_group.style.display = "block";
    wpm_group.style.display = "block";
}

export { initGame, processCurrentText, resetValues, startGame };