// 导入自己需要的组件
import Vue from 'vue'
import { Message ,Menu,MenuItem,Upload,Table,TableColumn,Button,Input,Pagination} from 'element-ui'
Vue.use(Message).use(Menu).use(MenuItem).use(Upload).use(Table).use(TableColumn).use(Button).use(Input).use(Pagination)

const element = {
    install: function (Vue) {
      Vue.use(Message).use(Menu).use(MenuItem).use(Upload).use(Table).use(TableColumn).use(Button).use(Input).use(Pagination)
      Vue.prototype.$message = Message;
    }
  }
  export default element
  