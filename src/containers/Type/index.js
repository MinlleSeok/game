import React, { useEffect } from "react";
import { initGame, processCurrentText, resetValues, startGame } from "./game";
import "./style.css";

const Type = () => {

    useEffect(() => {
        initGame();
    }, []);
    
    return (
        <div className="container">
            <div className="heading">
                Simple Speed Typing
            </div>
            <div className="header">
                <div className="wpm">
                    <div className="header_text">WPM</div>
                    <div className="curr_wpm">100</div>
                </div>
                <div className="cpm">
                    <div className="header_text">CPM</div>
                    <div className="curr_cpm">100</div>
                </div>
                <div className="errors">
                    <div className="header_text">Errors</div>
                    <div className="curr_errors">0</div>
                </div>
                <div className="timer">
                    <div className="header_text">Time</div>
                    <div className="curr_time">60s</div>
                </div>
                <div className="accuracy">
                    <div className="header_text">% Accuracy</div>
                    <div className="curr_accuracy">100</div>
                </div>
            </div>
            <div className="quote">
                Click on the area below to start the game.
            </div>
            <textarea className="input_area"
                placeholder="start typing here..."
                onInput={processCurrentText}
                onFocus={startGame}>
            </textarea>
            <button className="restart_btn"
                onClick={resetValues}>
                Restart
            </button>
        </div>)
}

export default Type;