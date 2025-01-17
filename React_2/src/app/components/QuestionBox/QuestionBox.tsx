'use client'

import React from 'react';
import Title from '@/app/components/Title/Title';
import Desc from '@/app/components/Desc/Desc';
import Body from '@/app/components/Body/Body';
import ActionButtons from '@/app/components/ActionButtons/ActionButtons';

interface QuestionProps {
    title?: string;
    desc?: string;
    type?: string;
    requried?: boolean;
    options?: object;
}

interface QuestionBoxProps {
    question: QuestionProps;
    questionLength: number;
    step: number;
    answer: string;
    setAnswer: (newAnswer: string) => void;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ question, questionLength, step, answer, setAnswer }) => {
    return (
        <>
            <Title>{question.title}</Title>
            <Desc>{question.desc}</Desc>
            <Body type="text" answer={answer} setAnswer={setAnswer}/>
            <ActionButtons questionLength={questionLength} step={step}/>
        </>
    )
}

export default QuestionBox;