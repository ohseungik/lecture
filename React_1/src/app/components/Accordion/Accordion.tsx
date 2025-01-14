'use client';

import React, { useCallback, useState } from 'react';
import '@/app/components/Accordion/Accordion.css';

type AccordionProps = {
    title: string;
    content: React.ReactNode | string
}

const Accordion = ({ title, content } : AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const contentOpenHandler = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    return (
        <div className='accordion'>
            <div className='accordion__title' onClick={contentOpenHandler}>
                <div>{title}</div>
                <div>{isOpen ? '-' : '+'}</div>
            </div>

            {isOpen && 
                <div className='accordion__content'>{content}</div>
            }
        </div>
    )
}


export default React.memo(Accordion);