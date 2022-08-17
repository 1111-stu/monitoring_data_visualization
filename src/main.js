import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

//导入element ui
import "element-ui/lib/theme-chalk/index.css"; //element样式文件必须引入
import element from "@/plugins/element";
Vue.use(element);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
