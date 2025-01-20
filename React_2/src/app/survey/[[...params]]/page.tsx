'use client'

import React, { useState, use } from 'react';
import ProgressIndicator from '@/app/components/ProgressIndicator/ProgressIndicator';
import QuestionBox from '@/app/components/QuestionBox/QuestionBox';
interface SurveyProps {
  params: string[];
}

const Survey = ({ params }: {params: Promise<SurveyProps>}) => {
  const { params: resolvedParams } = use(params);
  const id = resolvedParams[0];
  const step = parseInt(resolvedParams[1]);
  
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
  
  const [answers, setAnswers] = useState<string[]>([]);

  console.log(id);

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

export default Survey;