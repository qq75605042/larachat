import Vue from 'vue'
import axios from 'axios'
import moment from 'moment';
import Vuex from 'vuex'
Vue.use(Vuex)

// 本地化，中文时间显示
moment.locale('zh-cn');

Vue.prototype.moment = moment;

Vue.prototype.random = n => Math.floor(n * Math.random());

const store = new Vuex.Store({
    state: {
        name: '',
        // avatarUrl: `https://icdn.microzz.com/20170426_vue_chat/icon-avatar${Vue.prototype.random(21)}.svg`,
        avatarUrl: `http://omratag7g.bkt.clouddn.com/icon-avatar${Vue.prototype.random(21)}.svg`,
        addr: '未知',
        isShowAbout: false
    },

    mutations: {
        changeName(state, name) {
            state.name = name;
        },
        setAddr(state, addr) {
            state.addr = addr;
        },
        showAbout(state, flag) {
            state.isShowAbout = flag;
        }
    }
})
import App from './App'
import router from './route'

const app = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
