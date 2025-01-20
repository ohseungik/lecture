'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

const ActionButtons: React.FC<{ questionLength: number, step: number }> = ({ questionLength, step }) => {
    const router = useRouter();
    const isLastStep = questionLength - 1 === step;

    const handleNext = () => {
        if (isLastStep) {
            router.push('/completion'); // 제출 페이지로 이동
        } else {
            router.push(`${step + 1}`); // 다음 질문으로 이동
        }
    };

    const handlePrevious = () => {
        router.push(`${step - 1}`); // 이전 질문으로 이동
    };

    return (
        <div>
            {step === 0 || <button onClick={handlePrevious}>이전</button>}
            <button onClick={handleNext}>{isLastStep ? '제출' : '다음'}</button>
        </div>
    )
}

export default ActionButtons;