import React, { useEffect } from "react";
import gameInit from "./game";

const Guess: React.FC = () => {

    useEffect(() => gameInit(), []);
    
    return (
        <div className="form">
            <label htmlFor="guessField">
                Enter a guess :
            </label>
            <input type="text" id="guessField" className="gueeField" />
            <input type="submit" value="Submit guess" className="guessSubmit" id="submitguess" />
        </div>
    );
}

export default Guess;