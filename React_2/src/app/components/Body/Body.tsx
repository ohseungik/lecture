'use client'

import React from 'react';
import TextInput from '@/app/components/TextInput/TextInput';

interface BodyProps {
    type?: string;
    answer: string;
    setAnswer: (newAnswer: string) => void;
}

const Body = ({ type, answer, setAnswer }: BodyProps) => {
    let InputComponent: React.ElementType = () => null;
    
    if(type === 'text') {
        InputComponent = TextInput;
    }

    return (
        <>
            <InputComponent answer={answer} setAnswer={setAnswer}/>
        </>
    )
}

export default Body;