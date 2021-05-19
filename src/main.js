import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/tailwind.bundle.css';
import 'jqwidgets-scripts';

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
