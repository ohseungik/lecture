import React from 'react';
import '@/app/components/Memo/SideBar/SideBar.css';
import MemoList from '@/app/components/Memo/MemoList/MemoList';
import { MemoPropsArray } from '@/app/types/memo';
import SideBarHeader from '@/app/components/Memo/SideBar/SideBarHeader';
import SideBarFooter from '@/app/components/Memo/SideBar/SideBarFooter';

interface SideBarProps {
    memos: MemoPropsArray;
    selectIndex: number;
    setSelectedMemo: (index: number) => void;
    addMemo: (title: string, content: string) => void;
    deleteMemo: (index: number) => void;
}

const SideBar: React.FC<SideBarProps> = ({ memos, selectIndex, setSelectedMemo, addMemo, deleteMemo }) => {
    return (
        <div className='SideBar'>
            <SideBarHeader/>
            <MemoList memos={memos} selectIndex={selectIndex} setSelectedMemo={setSelectedMemo} deleteMemo={deleteMemo}/>
            <SideBarFooter addMemo={addMemo}/>
        </div>
    )
}

export default React.memo(SideBar);