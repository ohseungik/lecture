'use client';

import MemoContainer from '@/app/components/Memo/MemoContainer/MemoContainer';
import SideBar from '@/app/components/Memo/SideBar/SideBar';
import React, { useCallback, useEffect, useState } from 'react';
import { MemoProps, MemoPropsArray } from '@/app/types/memo';
import { getItem, setItem } from '@/app/lib/storage';

const Memo = () => {
    const [memos, setMemos] = useState<MemoPropsArray>([]);

    const [selectedMemo, setSelectedMemo] = useState(0);

    const memoHandler = useCallback((newMemo: MemoProps) => {
        setMemos((prevMemos) => {
            const newMemos = [...prevMemos];

            newMemos[selectedMemo] = newMemo;

            setItem("memos", newMemos);

            return newMemos;
        })
    }, [selectedMemo])

    const addMemoHandler = useCallback((title: string, content: string) => {
        setMemos((prevMemos) => {
            const newMemos = [...prevMemos];

            newMemos.push({
                title: title,
                content: content,
                createdAt: new Date().getTime(),
                updatedAt: new Date().getTime()
            });

            setItem("memos", newMemos);

            return newMemos;
        })

        setSelectedMemo(memos.length);
    }, [memos])

    const deleteMemoHandler = useCallback((index: number) => {
        setMemos((prevMemos) => {
            const newMemos = [...prevMemos];

            newMemos.splice(index, 1);

            setItem("memos", newMemos);

            return newMemos;
        });

        if(index === selectedMemo) {
            setSelectedMemo(0);
        }
    }, [selectedMemo])

    useEffect(() => {
        const storedMemos = getItem("memos");
        setMemos(storedMemos && storedMemos.length !== 0 ? storedMemos : []);
    }, []);

    return (
        <div className='memo'>
            <SideBar memos={memos} selectIndex={selectedMemo} setSelectedMemo={setSelectedMemo} addMemo={addMemoHandler} deleteMemo={deleteMemoHandler}/>
            <MemoContainer memo={memos[selectedMemo]} setMemo={memoHandler}/>
        </div>
    )
}

export default Memo;