import React from 'react';
import fileAction from '@app/utils/file';

export default function index() {
  fileAction.read('D:\\LDream\\LDElectron\\app\\renderer\\utils\\file.ts').then((res) => {
    console.log(res, 'res===>>>>');
  });
  return <div>resume</div>;
}
