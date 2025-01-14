'use client';

import React from 'react';
import '@/app/components/Memo/MemoContainer/MemoContainer.css';
import { MemoProps } from '@/app/types/memo';

const MemoContainer = ({ memo, setMemo }: { memo: MemoProps, setMemo: (newMemo: MemoProps) => void }) => {
    return (
        <div className='memoContainer'>
            <div>
                <input type='text' className='memoContainer__title' value={memo.title} onChange={(event) => {
                    setMemo({
                        ...memo,
                        title: event.target.value,
                        updatedAt: new Date().getTime()
                    })
                }}/>
            </div>

            <div>
                <textarea className='memoContainer__content' value={memo.content} onChange={(event) => {
                    setMemo({
                        ...memo,
                        content: event.target.value,
                        updatedAt: new Date().getTime()
                    })
                }}/>
            </div>
            
        </div>
    )
}

export default MemoContainer;