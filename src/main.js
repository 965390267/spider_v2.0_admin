import Vue from 'vue'
import App from './App'
import router from './router'
/* muse ui完整引入 */
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import theme from './theme'
Vue.use(MuseUI);
/* muse ui完整引入 */
import axios from './fetch'/* axios引入，加入拦截器 */
Vue.prototype.$http=axios;/* 挂载到vue的原型上 */
/* muse UI弹框插件 修改window自带弹框*/
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';
Vue.use(Message);
Vue.prototype.$message=null;
window.alert=Message.alert;
window.confirm=Message.confirm;
window.prompt=Message.prompt;
/* element相关按需引入 */
// import element from './element'
import 'element-ui/lib/theme-chalk/index.css'
// 导入自己需要的组件
// import { Message ,Menu,MenuItem,Upload,Table,TableColumn,Button,Input,Pagination,Loading} from 'element-ui'
// Vue.use(Message).use(Menu).use(MenuItem).use(Upload).use(Table).use(TableColumn).use(Button).use(Input).use(Pagination).use(Loading)
import element from './element'
Vue.use(element)
/* element相关按需引入 */

/* 自定义样式引入 */
import './assets/css/reset.css'
import  './assets/icon/iconfont.css'
/* 自定义样式引入 */
Vue.prototype.bus = new Vue;
/* muse UI弹框插件 */
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
