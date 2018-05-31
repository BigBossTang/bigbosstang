<template>
    <div>
      <div class="title">
        <div class="center-wrap">
          <span @click="$router.push('/')" style="cursor: pointer;">唐大老板的秘密花园</span>
          <span v-if="isHome" :title="paopao.open?'关闭气泡':'打开气泡'" class="paopao-wrap" @click="paopao.open?paopao.paopaoOut():paopao.paopaoInit()"><i :style="paopao.open?'color:#547834;':''" class="iconfont icon-qipao"></i></span>
          <div class="avatar-container">
            <avatar />
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
import paopao from "../components/paopao";
export default {
  name: "inex",
  data() {
    return {
      paopao: paopao,
      isHome:true,
    };
  },
  created(){
    if(this.$route.path!=='/'&&paopao.open){paopao.paopaoOut();this.isHome=false;};
  },
  watch:{
    '$route.path':{
      handler:function (val) {
        if(val!=='/'){
          this.isHome=false;
         if(paopao.open){
           paopao.paopaoOut();
         }
        }
        else {
          this.isHome=true;
          if(paopao.open){
            paopao.paopaoInit();
          }
        }
      },
      deep:true
    }
  }
};
</script>

<style lang="less" scoped>
.title {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #bccab2;
  .paopao-wrap{
    position: absolute;
    margin-left: 20px;
    font-size: 12px;
    cursor: pointer;
  }
  .center-wrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    .avatar-container {
      height: 60px;
      line-height: 100%;
      float: right;
      display: inline-block;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
