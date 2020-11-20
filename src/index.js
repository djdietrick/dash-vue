import Vue from 'vue';

import DashModal from './components/Modal.vue';
import Auth from './components/auth/Auth.vue';
import Login from './components/auth/Login.vue';
import Signup from './components/auth/Signup.vue';

const Components = {
    DashModal,
    Auth,
    Login,
    Signup
}

export default {
    install: function(Vue) {
        Object.keys(Components).forEach(name => {
            Vue.component(name, Components[name]);
        })
    }
};