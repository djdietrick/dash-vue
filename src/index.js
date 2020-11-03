import Vue from 'vue';

import DashModal from './components/Modal.vue';

const Components = {
    DashModal
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
})

export default Components;