import React from 'react';
import './index.less';
import ResumeBar from './ResumeBar';
import ResumeMain from './ResumeMain';
import ResumeHeader from './ResumeHeader';

function Resume() {
  return (
    <div styleName="container">
      <div styleName="header">
        <ResumeHeader />
      </div>
      <div styleName="content">
        <ResumeMain />
      </div>
      <div styleName="toolbar">
        <ResumeBar />
      </div>
    </div>
  );
}
export default Resume;
