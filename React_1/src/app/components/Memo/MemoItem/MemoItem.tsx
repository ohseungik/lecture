'use client';

import React from 'react';
import '@/app/components/Memo/MemoItem/MemoItem.css';

type MemoItemProps = {
    index: number;
    title: string;
    isSelected: boolean;
    setSelectedMemo: (index: number) => void;
    deleteMemo: (index: number) => void;
}

const MemoItem: React.FC<MemoItemProps> = ({ index, title, isSelected, setSelectedMemo, deleteMemo }) => {
    return (
        <div className={`memoItem ${isSelected ? 'isSelected' : ''}`} onClick={() => setSelectedMemo(index)}>
            {title}
            <button className='memoItem__delete-button' onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                deleteMemo(index);
            }}>X</button>
        </div>
    )
}

export default MemoItem;