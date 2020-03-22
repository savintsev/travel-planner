import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import countries from './countries.json';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    key: 'travelPlannerRoute',
    storage: window.localStorage
});

const countryFromCode = (list, code) => {
    const countryIndex = list.findIndex(item => item.code === code);

    if (countryIndex !== -1) {
        return list[countryIndex];
    } else {
        return null;
    }
};

export default new Vuex.Store({
    state: {
        countries,

        route: []
    },

    mutations: {
        setStart(state, code) {
            state.route = [];

            state.route.push(countryFromCode(state.countries, code));
        },

        setMedium(state, code) {
            state.route.push(countryFromCode(state.countries, code));
        },

        setEnd(state, code) {
            state.route.push({
                ...countryFromCode(state.countries, code),
                end: true
            });
        },

        removeRoute(state, code) {
            const countryIndex = state.route.findIndex(item => item.code === code);

            state.route.splice(countryIndex, 1);
        }
    },

    actions: {
        setStart({commit}, payload) {
            commit('setStart', payload);
        },

        setMedium({commit}, payload) {
            commit('setMedium', payload);
        },

        setEnd({commit}, payload) {
            commit('setEnd', payload);
        },

        removeRoute({commit}, payload) {
            commit('removeRoute', payload);
        }
    },

    plugins: [vuexLocal.plugin]
});
