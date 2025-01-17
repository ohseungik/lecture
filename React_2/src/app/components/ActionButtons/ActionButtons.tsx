'use client'

import React from 'react';

const ActionButtons: React.FC<{ questionLength: number, step: number }> = ({ questionLength, step }) => {
    const isLastStep = questionLength - 1 === step;

    return (
        <div>
            {step === 0 || <button>이전</button>}
            {isLastStep ? <button>제출</button> : <button>다음</button>}
        </div>
    )
}

export default ActionButtons;