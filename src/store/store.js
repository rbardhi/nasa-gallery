import Vue from 'vue';
import Vuex from 'vuex';
import NASAStore from './nasaStore';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        NASAStore,
    }
  });

  export default store;