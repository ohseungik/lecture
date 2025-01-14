import React from 'react';
import '@/app/components/Memo/SideBar/SideBar.css';
import MemoList from '@/app/components/Memo/MemoList/MemoList';
import { MemoPropsArray } from '@/app/types/memo';

interface SideBarProps {
    memos: MemoPropsArray;
    setSelectedMemo: (index: number) => void;
}

const SideBar: React.FC<SideBarProps> = ({ memos, setSelectedMemo }) => {
    return (
        <div className='SideBar'>
            <MemoList memos={memos} setSelectedMemo={setSelectedMemo}/>
        </div>
    )
}

export default React.memo(SideBar);