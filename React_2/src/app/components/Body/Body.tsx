'use client'

import React from 'react';
import TextInput from '@/app/components/TextInput/TextInput';
import TextAreaInput from '@/app/components/TextAreaInput/TextAreaInput';
import SelectInput from '@/app/components/SelectInput/SelectInput';

interface BodyProps {
    type?: string;
    answer: string;
    setAnswer: (newAnswer: string) => void;
    options?: object;
}

const Body = ({ type, answer, setAnswer, options }: BodyProps) => {
    let InputComponent: React.ElementType = () => null;
    
    if(type === 'text') {
        InputComponent = TextInput;
    } else if(type === 'textarea') {
        InputComponent = TextAreaInput;
    } else if(type === 'select') {
        InputComponent = SelectInput;
    }

    return (
        <>
            <InputComponent answer={answer} setAnswer={setAnswer} options={options}/>
        </>
    )
}

export default Body;