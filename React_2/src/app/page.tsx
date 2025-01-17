'use client'

import React, { useState } from 'react';
import ProgressIndicator from '@/app/components/ProgressIndicator/ProgressIndicator';
import QuestionBox from '@/app/components/QuestionBox/QuestionBox';

const Home = () => {
  const question = [
    {
        title: '질문1',
        desc: '설명1',
        type: 'text',
        requried: false,
        options: {}
    },
    {
        title: '질문2',
        desc: '설명2',
        type: 'text',
        requried: true,
        options: {}
    }
  ]

  const step = 0;

  const [answers, setAnswers] = useState<string[]>([]);

  return (
    <>
      <ProgressIndicator />
      <QuestionBox
        question={question[step]}
        questionLength={question.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer: string) => {
          setAnswers((answer) => {
            const newAnswers = [...answer];
            newAnswers[step] = newAnswer;
            return newAnswers;
          })
        }}
      />
    </>
  );

}

export default Home;