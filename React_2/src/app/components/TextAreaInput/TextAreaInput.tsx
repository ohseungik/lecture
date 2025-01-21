import React from 'react';
import "@/app/components/TextAreaInput/TextAreaInput.css";

interface TextAreaInputProps {
    answer: string;
    setAnswer: (newAnswer: string) => void;
    options?: {
        placeholder?: string;
    };
}

const TextAreaInput = ({ answer, setAnswer, options }: TextAreaInputProps) => {
    return (
      <input
        type="text"
        value={answer || ""}
        onChange={(event) => setAnswer(event.target.value)}
        className='TextAreaInput'
        placeholder={options?.placeholder}
      />
    )
}

export default TextAreaInput;