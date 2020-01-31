import Vue from 'vue';
import Antd from 'ant-design-vue';
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'

Vue.component(Button.name, Button);
Vue.config.productionTip = false
Vue.use(Antd);

new Vue({
  render: h => h(App),
}).$mount('#app')
