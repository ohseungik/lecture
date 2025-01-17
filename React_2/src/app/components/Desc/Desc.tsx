'use client'

import React from 'react';

interface DescProps {
    children?: React.ReactNode;
}

const Desc = ({ children }: DescProps) => {
    return <h4>{children}</h4>;
}

export default Desc;