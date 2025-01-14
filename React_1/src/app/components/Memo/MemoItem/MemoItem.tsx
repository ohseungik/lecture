'use client';

import React from 'react';

type MemoItemProps = {
    index: number;
    title: string;
    setSelectedMemo: (index: number) => void;
}

const MemoItem: React.FC<MemoItemProps> = ({ index, title, setSelectedMemo }) => {
    return (
        <div onClick={() => setSelectedMemo(index)}>
            <div>{title}</div>
        </div>
    )
}

export default MemoItem;