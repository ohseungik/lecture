'use client'

import React from 'react';
import "@/app/components/TextInput/TextInput.css";

interface TextInputProps {
    answer: string;
    setAnswer: (newAnswer: string) => void;
    options?: {
        placeholder?: string;
    };
}

const TextInput = ({ answer, setAnswer, options }: TextInputProps) => {
    return (
      <input
        type="text"
        value={answer || ""}
        onChange={(event) => setAnswer(event.target.value)}
        className='TextInput'
        placeholder={options?.placeholder}
      />
    );
}

export default TextInput;