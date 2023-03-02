import React, { useState } from "react";
import Pad from "./Pad";
import { bank1 } from "./App";

function Pads() {
    const keypadCode = Object.keys(bank1);
    const [audioName, setAudioName] = useState(null);

    const playSound = (e) => {
        setAudioName(e.name);
    };

    return (
        <div id="div-pads">
            {keypadCode.map((pad, index) => {
                return (
                    <Pad
                        id={pad + index}
                        key={pad + index}
                        handleClick={playSound}
                        element={pad}
                        power={power}
                    />
                );
            })}
            <div id="display">{audioName}</div>
        </div>
    );
}

export default Pads;
