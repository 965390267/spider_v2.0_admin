import theme from 'muse-ui/lib/theme';/* 主题设置 */
/* @parm add(name, config, extendName) 添加新的主题,name 主题名称
config 主题配置对象
extendName 继承哪个主题， 默认 ‘light’ */
const themeConfig={
  "light":{
    primary: '#8c99e0',
    secondary: '#8c99e0',
    success: '#4caf50',
    warning: '#fdd835',
    info: '#bdbdbd',
    error: '#f44336',
    track: '#bdbdbd',
    headerIcon:'#fff',
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      alternate: '#2c2c2c',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)' // 提示文字颜色
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      paper: '#fff',
      chip: '#e0e0e0',
      default: '#fafafa',
      linearGradient:"linear-gradient(to right, #ec77ab 0%, #7873f5 100%)"
    },
    aside:{
     mainbg:'#fff',
     asidetext:'#546e7a',
     asideactive:'#6572b8',
     activebackground:'none'
    },
     theme:{
      background:'#8c99e0'
    },
    commen:{
     background:'rgba(255,255,255,.5)'
    },
    footer:{
      mainbg:'#2196f3',
      text:'#ccc',
    }
  },
  "dark": {
    primary: '#424a5d',/* 主要主题背景色 */
    secondary: '#fff',/* 次背景色，可当页面背景色 */
    success: '#4caf50',/* 成功的背景色 */
    warning: '#fdd835',/* 警告背景色 */
    info: '#ccc',/* 信息提示背景色 */
    error: '#f44336',/* 错误背景色 */
    track: '#757575',
    headerIcon:'#fff',
    text: {/* 文本 */
      primary: '#424242',/* 在body标签中设置全局字体color颜色 */
      secondary: 'rgba(255, 255, 255, 0.7)',
      alternate: '#fff',
      disabled: 'rgba(255, 255, 255, 0.3)',
      hint: 'rgba(255, 255, 255, 0.3)' // 提示文字颜色
    },
    divider: 'rgba(255, 255, 255, 0.3)',
    background: {
      paper: '#424242',
      chip: '#616161',
      default: '#FFFFF0',/* 默认body背景色 */
      linearGradient:"linear-gradient(to right, #e96443 0%, #904e95 100%)"
    },
    aside:{
     mainbg:'#2D2F3E',
     asidetext:'#aeb2b7',
     asideactive:'rgb(104, 223, 240)',
     activebackground:'none'
    },
    theme:{
      background:'#424a5d'
    },
    commen:{
     background:'rgba(255,255,255,.5)'
    },
    footer:{
      mainbg:'#424a5d',
      text:'#ccc',
    }
  },
  "green":{
    primary: '#322f3b',
    secondary: '#fff',
    success: '#4caf50',
    warning: '#fdd835',
    info: '#ccc',
    error: '#f44336',
    track: '#757575',
    headerIcon:'#fff',
    text: {
      primary: '#616161',
      secondary: 'rgba(255, 255, 255, 0.7)',
      alternate: '#303030',
      disabled: 'rgba(255, 255, 255, 0.3)',
      hint: 'rgba(255, 255, 255, 0.3)' // 提示文字颜色
    },
    divider: 'rgba(255, 255, 255, 0.3)',
    background: {
      paper: '#424242',
      chip: '#616161',
      default: '#FFFAF0',
      linearGradient:"linear-gradient(to right, #c2e59c 0%, #64b3f4 100%)"
    },
    aside:{
     mainbg:'#b2cf87',
     asidetext:'#FFFFE0',
     asideactive:'#2e317c',
     activebackground:'none'
    }, 
    theme:{
      background:'#b2cf87'
    },
     commen:{
      background:'rgba(255,255,255,.5)'
     },
    footer:{
      mainbg:'#2D2F3E',
      text:'#ccc',
    }
  },
}

theme.add('light', themeConfig.light, 'lighttheme');

theme.add('dark',themeConfig.dark, 'dark');
/* 浅绿色主题 @desc{备用绿色} #D5E28A*/
theme.add('green', themeConfig.green, 'LightGreen');


/* 如果有新加入的样式，需要添加到主题样式中， 则需要使用 addCreateTheme(func) 添加到themes集中控制。 */

theme.addCreateTheme((theme) => {/* 侧边栏样式底部样式 */
  return `
  .header-icon{
    color:${theme.headerIcon}
  },
  .site-footer{
    background:${theme.footer.mainbg}
}
  .username{
    color:${theme.text.alternate}!important;
  }
  #sidebar{
    background:${theme.aside.mainbg}
  }
  .el-menu{
    background:${theme.aside.mainbg}!important;
}
.el-menu-item{
    color:${theme.aside.asidetext}!important;
}
.el-menu-item i{
  color:${theme.aside.asidetext}!important;
}
.el-menu-item.is-active{
    color:${theme.aside.asideactive}!important;
    background:${theme.aside.activebackground}
}
.el-menu-item.is-active i{
  color:${theme.aside.asideactive}!important;
}
.messagewrap::after{
  background-image:${theme.background.linearGradient}!important;
}
.add-btn-bg{
  background-image:${theme.background.linearGradient}!important;
  color:#fff;
}
.commetns{
  background:${theme.commen.background}
}
.mu-picker{
  color:${theme.primary}
}
.mu-tabs{
  background:${theme.primary}
}
.mu-timepicker-number__selected{
  background:${theme.primary}
}
.mu-switch-checked{
  color:${theme.primary}
}
.mu-linear-progress-indeterminate{
  background:${theme.primary}
}
.mu-linear-progress-determinate{
  background:${theme.primary}
}
.mu-pagination-item.mu-button.is-current{
  background:${theme.primary}
}
.mu-checkbox-checked{
  color:${theme.primary}
}
.rili_biaoti{
  background:${theme.theme.background}!important;
}
.self-background-color{
  background:${theme.background.default}!important;
}
  `;
});
let localThemeColor=localStorage.getItem('themecolor')||'light';
theme.use('green')
export default theme;