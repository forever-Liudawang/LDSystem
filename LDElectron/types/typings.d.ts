declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
declare module '*.less';
declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}
declare module '*.svg' {
  const svg: string;
  export default svg;
}
declare module '*.png' {
  const png: string;
  export default png;
}
