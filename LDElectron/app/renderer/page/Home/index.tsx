import React from 'react';
import { RouteComponentProps, useHistory } from 'react-router';
import Logo from '@assets/me.svg';
import './index.less';
export default function Home(props: any) {
  const history = useHistory();
  const handleNav = (text: string) => {
    if (text === '简历') {
      console.log('跳转到简历页面');
      history.push('/resume');
    } else {
      console.log('进入到 github ');
    }
  };
  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">AndyLiuMook</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="action">
          {['介绍', '简历', '源码'].map((text, index) => {
            return (
              <div key={index} styleName="item" onClick={() => handleNav(text)}>
                {text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By AndyLiu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
