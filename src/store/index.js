import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const modules = {};
const storesContext = require.context("../store", true, /store\.js$/);
const storesArray = storesContext.keys().map(key => {
  modules[key.replace(/.js/, "").split("/")[2]] = storesContext(key).default;
  return storesContext(key).default;
});
const store = new Vuex.Store({
  modules: modules
});
export default store;
