import { createGlobalStyle } from 'styled-components';

export const IconFont = createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1585067240381'); /* IE9 */
  src: url('./iconfont.eot?t=1585067240381#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1585067240381') format('woff'),
  url('./iconfont.ttf?t=1585067240381') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1585067240381#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconsou:before {
  content: "\\e637";
}

.iconzhuye-copy:before {
  content: "\\e603";
}

.iconpingfen:before {
  content: "\\e633";
}

.iconlianxi:before {
  content: "\\e634";
}

.icondizhi:before {
  content: "\\e600";
}

.iconshengming:before {
  content: "\\e65d";
}

.iconshijian:before {
  content: "\\e601";
}

.icontuichu1:before {
  content: "\\e602";
}

.iconhongbao:before {
  content: "\\e638";
}

.iconxieyi:before {
  content: "\\e743";
}

.iconwode:before {
  content: "\\e606";
}

.iconicon--copy:before {
  content: "\\e604";
}

.iconbianji:before {
  content: "\\e648";
}

.iconwenti:before {
  content: "\\e605";
}

.iconche:before {
  content: "\\e607";
}
`;


