import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router/index.js'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VueAMap, {initAMapApiLoader} from '@vuemap/vue-amap';
import '@vuemap/vue-amap/dist/style.css'
initAMapApiLoader({
  key: 'c19df777a81b3d604c340b51489a0fa3',
  securityJsCode: 'f92719d40ce2b887e04e4a714086e66c', // 新版key需要配合安全密钥使用
  //Loca:{
  //  version: '2.0.0'
  //} // 如果需要使用loca组件库，需要加载Loca
})

createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(VueAMap)
    .mount('#app')
