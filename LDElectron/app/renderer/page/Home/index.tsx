import React from 'react';
import { shell } from 'electron';
import { RouteComponentProps, useHistory } from 'react-router';
import { ROUTER_ENTRY } from '@app/common/router';
import Logo from '@assets/logo.png';
import { isHttpOrHttpsUrl } from '@app/utils/router';
import './index.less';
export default function Home(props: any) {
  const history = useHistory();
  const handleNav = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      history.push(router.url);
    }
  };
  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">AndyLiuMook</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item, index) => {
            return (
              <div key={router.key} styleName="item" onClick={() => handleNav(router)}>
                {router.text}
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
