"use client";

import React, { useCallback, useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);

    const countHandler = useCallback((event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        event.stopPropagation();

        const target = event.target as HTMLButtonElement;

        if (target.id === "increase") {
            setValue(value + 1);
        } else {
            setValue(value - 1);
        }
    }, [value]);

    return (
        <>
            value : {value}
            <button id="increase" onClick={countHandler}>+</button>
            <button id="decrease" onClick={countHandler}>-</button>
        </>
    )
}

export default Counter;