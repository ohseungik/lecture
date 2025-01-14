import React, { FC } from 'react';
import '@/app/survey/survey.css';

const SurveyLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
};

export default SurveyLayout;