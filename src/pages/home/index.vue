<template>
    <div class="home-wrap">
      <img class="bg-img" src="../../assets/images/bg.jpg" alt="">
      <div class="title center-wrap">
      </div>
      <div class="navigate center-wrap">
        <naviGate />
      </div>
      <div class="banner">
          <banNer class="center-wrap"/>
      </div>
    </div>
</template>

<script>
  import naviGate from './navigate'
  import banNer from './banner'
export default {
  name: "home",
  components:{
    naviGate,banNer
  },
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.home-wrap {
  height: calc(~"100% - 60px");
  position: relative;
  overflow-x: hidden;
  .bg-img{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -2;
  }
  .center-wrap{
    max-width: 1200px;
    margin: 0 auto;
  }
  .title{
  }
  .navigate{
  }
  .banner{
    min-height: 700px;
    opacity: 1;
  }
}
</style>
