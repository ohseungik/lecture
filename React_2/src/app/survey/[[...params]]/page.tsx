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
        options: {
          placeholder: "placeholder 입니다."
        }
    },
    {
        title: '질문2',
        desc: '설명2',
        type: 'textarea',
        requried: true,
        options: {
          placeholder: "placeholder 입니다."
        }
    },
    {
        title: '질문3',
        desc: '설명3',
        type: 'select',
        requried: true,
        options: {
          items: ['답변1', '답변2', '답변3', '답변4']
        }
    }
  ]
  
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

export default Survey;