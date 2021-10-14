import Vue from 'vue'
import App from './App'
import uView from 'uview-ui';
import store from "./store/index.js"
import request from "./util/request.js"
import confirm from "./util/confirm.js"
Vue.config.productionTip = false
Vue.prototype.$http = request;
Vue.prototype.$confirm = confirm;
App.mpType = 'app'
Vue.use(uView);

const app = new Vue({
	store,
    ...App
})
console.log(app,"app===>>>")
app.$mount()
