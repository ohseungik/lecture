import React, { FC } from 'react';
import "./globals.css";

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;