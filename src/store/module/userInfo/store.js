import Vue from "vue";
import { http } from "@/common/http.js";

const module = "user_";
const state = {
};

const mutations = {
  [module + "info"] (state, data) {
    if(!!!data){
      for(let i in state){
        Vue.delete(state,i);
      }
      return;
    }
    for(let i in data){
      Vue.set(state,i,data[i]);
    }
  }
};

const actions = {
  [module + "info"] (store, config = {}) {
    const url = "";
    const { commit, state } = store;
    if(config.clear){
      commit(module + "info", "");
      return;
    }
    http("get", url).then(res => {
      if (res.resultObject) {
        commit(module + "info", res.resultObject);
        if(config.success)config.success();
      }else{
        commit(module + "info", "");
        if(config.fail)config.fail();
      }
    }).catch(()=>{
      commit(module + "info", "");
      if(config.fail)config.fail();
    });
  }
};

const getters = {
  [module + "name"] (state) {
    //获取
    return (state.member_info || {}).member_name || "-";
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
