'use client';

import { MemoPropsArray } from '@/app/types/memo';
import React from 'react';
import MemoItem from '@/app/components/Memo/MemoItem/MemoItem';

type MemoListProps = {
    memos: MemoPropsArray;
    selectIndex: number;
    setSelectedMemo: (index: number) => void;
}

const MemoList: React.FC<MemoListProps> = ({ memos, selectIndex, setSelectedMemo }) => {
    return (
        <>
            {memos.map((memo, index) => {
                return (
                    <React.Fragment key={index}>
                       <MemoItem index={index} title={memo.title} isSelected={index === selectIndex} setSelectedMemo={setSelectedMemo} />
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default MemoList;