'use client';

import MemoContainer from '@/app/components/Memo/MemoContainer/MemoContainer';
import SideBar from '@/app/components/Memo/SideBar/SideBar';
import React, { useCallback, useState } from 'react';
import { MemoProps, MemoPropsArray } from '@/app/types/memo';

const Memo = () => {
    const [memos, setMemos] = useState<MemoPropsArray>([
        {
            title: 'title1',
            content: 'content1',
            createdAt: 1736841549557,
            updatedAt: 1736841549557 
        },
        {
            title: 'title2',
            content: 'content2',
            createdAt: 1736841585722,
            updatedAt: 1736841585722
        }
    ])

    const [selectedMemo, setSelectedMemo] = useState(0);

    const memoHandler = useCallback((newMemo: MemoProps) => {
        const newMemos = [...memos];

        newMemos[selectedMemo] = newMemo;

        setMemos(newMemos);
    }, [memos, selectedMemo])

    const addMemoHandler = useCallback((title: string, content: string) => {
        setMemos([
            ...memos,
            {
                title: title,
                content: content,
                createdAt: new Date().getTime(),
                updatedAt: new Date().getTime()
            }
        ]);

        setSelectedMemo(memos.length);
    }, [memos]);

    return (
        <div className='memo'>
            <SideBar memos={memos} selectIndex={selectedMemo} setSelectedMemo={setSelectedMemo} addMemo={addMemoHandler} />
            <MemoContainer memo={memos[selectedMemo]} setMemo={memoHandler}/>
        </div>
    )
}

export default Memo;