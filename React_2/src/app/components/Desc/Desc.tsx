'use client'

import React from 'react';
import '@/app/components/Desc/Desc.css';

interface DescProps {
    children?: React.ReactNode;
}

const Desc = ({ children }: DescProps) => {
    return <div className='desc'>{children}</div>;
}

export default Desc;