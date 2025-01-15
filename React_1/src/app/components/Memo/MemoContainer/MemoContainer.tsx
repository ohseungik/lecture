'use client';

import React from 'react';
import '@/app/components/Memo/MemoContainer/MemoContainer.css';
import { MemoProps } from '@/app/types/memo';

const MemoContainer = ({ memo, setMemo }: { memo: MemoProps, setMemo: (newMemo: MemoProps) => void }) => {
    if(!memo) {
        return (
            <div>
                <h1>메모가 없습니다</h1>
                <h2>새로운 메모를 추가해주세요</h2>
            </div>
        )
    }
    
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