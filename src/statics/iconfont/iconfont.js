import { createGlobalStyle } from 'styled-components';

export const IconFont = createGlobalStyle `

@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1584880124328'); /* IE9 */
  src: url('./iconfont.eot?t=1584880124328#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1584880124328') format('woff'),
  url('./iconfont.ttf?t=1584880124328') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1584880124328#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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


