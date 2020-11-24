import Modal from './components/Modal.vue';
import Popover from './components/Popover.vue';
import Auth from './components/auth/Auth.vue';
import Login from './components/auth/Login.vue';
import Signup from './components/auth/Signup.vue';

export default {
    install: function(Vue) {
        Vue.component('dash-modal', Modal);
        Vue.component('dash-popover', Popover);
        Vue.component('dash-auth', Auth);
        Vue.component('dash-login', Login);
        Vue.component('dash-signup', Signup);
    }
};