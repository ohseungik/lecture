'use client';

import React from 'react';

type TextInputProps = {
    name: string;
    value: string;
    setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({name, value, setValue} : TextInputProps) => {
    return (
        <input name={name} type="text" value={value} onChange={setValue}/>
    )
}

export default TextInput;