'use client';

import React, { useCallback, useState } from 'react';
import '@/components/Accordion/Accordion.css';

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
        <div className='Accordion'>
            <div className='title' onClick={contentOpenHandler}>
                <div>{title}</div>
                <div>{isOpen ? '-' : '+'}</div>
            </div>

            {isOpen && 
                <div className='content'>{content}</div>
            }
        </div>
    )
}


export default Accordion;