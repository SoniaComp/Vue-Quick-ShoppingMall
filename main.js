import Vue from 'vue';
import router from './src/router';
import App from './src/App.vue';

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
