function gameInit() {
    // random value generated
    const y = Math.floor(Math.random() * 10 + 1);

    // counting the number of guesses
    // made for correct Guess
    let guess = 1;
    const dom =  document.getElementById("submitguess")!;

    dom.onclick = function () {
        // eslint-disable-next-line
        const field = (<HTMLInputElement>document.getElementById("guessField")!);
        // number guessed by user
        let x = parseInt(field.value);

        if (x === y) {
            alert("CONGRATULATIONS !!! YOU GUESSED IT RIGHT IN "
                + guess + " GUESS ");
            // if guessed number is greater than actual number
        } else if (x > y) {
            guess++;
            alert("OOPS SORRY!! TRY A SMALLER NUMBER");
        } else {
            guess++;
            alert("OOPS SORRY!! TRY A GREATER NUMBER");
        }

    }
}

export default gameInit;