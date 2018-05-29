<template>
    <div class="nav-wrap">
    <ul class="main"><li>首页</li><li>文章</li><li>贴图</li><li>我的</li></ul>
    </div>
</template>

<script>
export default {
  name: "navigate",
  data() {
    return {
      activeIndex: "1"
    };
  }
};
</script>

<style lang="less" scoped>
  .main{
    overflow: hidden;
    &>li{
      display: inline-block;
      font-size: 16px;
      padding: 0 20px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      float: left;
      cursor: pointer;
      &:after{
        content: "";
        position: relative;
        top:-20px;
        height: 2px;
        display: block;
        width: 0;
        background: #2c3e50;
        transition: all 1s;
        opacity: .7;
      }
      &:hover{
        opacity: .8;
        &:after{
          width: 100%;
        }
      }
     }
  }
</style>
