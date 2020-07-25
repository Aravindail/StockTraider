import Vue from 'vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';
import App from './App.vue';
import {routes} from "./routes";
import store from "./store/store";
import vClickOutside from 'v-click-outside'


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(vClickOutside);

Vue.http.options.root = 'https://vuehttp-5bebf.firebaseio.com/';
Vue.filter('currency',(value)=>{
    return value.toLocaleString()+' ₽';
});

const router = new VueRouter({
    mode:'history',
    routes,
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
