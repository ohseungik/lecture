'use client';

import { MemoPropsArray } from '@/app/types/memo';
import React from 'react';
import MemoItem from '@/app/components/Memo/MemoItem/MemoItem';

type MemoListProps = {
    memos: MemoPropsArray;
    setSelectedMemo: (index: number) => void;
}

const MemoList: React.FC<MemoListProps> = ({ memos, setSelectedMemo }) => {
    return (
        <div>
            {memos.map((memo, index) => {
                return (
                    <div key={index}>
                       <MemoItem index={index} title={memo.title} setSelectedMemo={setSelectedMemo} />
                    </div>
                )
            })}
        </div>
    )
}

export default MemoList;