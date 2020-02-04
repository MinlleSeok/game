import React, { useEffect } from "react";
import initGame from "./game";

const Space: React.FC = () => {

    useEffect(() => initGame(), []);

    return (
        <canvas id="canvas1">
        </canvas>
    );
}

export default Space;