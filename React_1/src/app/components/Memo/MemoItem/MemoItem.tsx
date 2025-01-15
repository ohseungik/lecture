'use client';

import React from 'react';
import '@/app/components/Memo/MemoItem/MemoItem.css';

type MemoItemProps = {
    index: number;
    title: string;
    isSelected: boolean;
    setSelectedMemo: (index: number) => void;
}

const MemoItem: React.FC<MemoItemProps> = ({ index, title, isSelected, setSelectedMemo }) => {
    return (
        <div className={`memoItem ${isSelected ? 'isSelected' : ''}`} onClick={() => setSelectedMemo(index)}>
            {title}
        </div>
    )
}

export default MemoItem;