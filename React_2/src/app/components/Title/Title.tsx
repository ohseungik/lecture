'use client'

import React from 'react';
import "@/app/components/Title/Title.css";

interface TitleProps {
    children?: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
    return <div className='title'>{children}</div>;
}

export default Title;