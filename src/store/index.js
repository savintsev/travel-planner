import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import countries from './countries.json';

export default new Vuex.Store({
    state: {
        countries,

        route: []
    },

    mutations: {},

    actions: {},

    modules: {}
});
