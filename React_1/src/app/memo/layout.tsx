import React, { FC } from 'react';
import '@/app/memo/memo.css';

const MemoLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
};

export default MemoLayout;