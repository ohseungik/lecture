import React from 'react';
import '@/app/components/Memo/SideBar/SideBarFooter.css';

interface SideBarFooterProps {
    addMemo: (title: string, content: string) => void;
}

const SideBarFooter = ({ addMemo } : SideBarFooterProps) => {
    return (
        <div className='sideBarFooter'>
            <button className='sideBarFooter__addButton' onClick={() => addMemo("title", "")}>+</button>
        </div>
    )
}

export default SideBarFooter;