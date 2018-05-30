<template>
    <div>
      <div class="title">
        <div class="center-wrap">
          <span>唐大老板的秘密花园</span>
          <span :title="paopao.open?'关闭气泡':'打开气泡'" class="paopao-wrap" @click="paopao.open?paopao.paopaoOut():paopao.paopaoInit()"><i :style="paopao.open?'color:#547834;':''" class="iconfont icon-qipao"></i></span>

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
      paopao: paopao
    };
  }
};
</script>

<style lang="less" scoped>
.title {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #2c3e5057;
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
