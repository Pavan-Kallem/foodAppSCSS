import React from "react";
import '../sass/mButton.scss';

export const MButton = (prop) => {
    
    return (
        <>
            <button onClick={prop.buttonClick} className="main-button">{prop.buttonName}</button>
        </>
    )
}