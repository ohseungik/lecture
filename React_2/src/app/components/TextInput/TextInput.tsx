'use client'

import React from 'react';

interface TextInputProps {
    answer: string;
    setAnswer: (newAnswer: string) => void;
}

const TextInput = ({ answer, setAnswer }: TextInputProps) => {
    return (
      <input
        type="text"
        value={answer || ""}
        onChange={(event) => setAnswer(event.target.value)}
      />
    );
}

export default TextInput;