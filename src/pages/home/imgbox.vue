<template>
  <div class="img-box-wrap">
    <div v-if="!imgs.length">
      Nothing to show...
    </div>
    <div v-else>
      <div class="img-item" v-for="item,index in imgs" :key="index+''">
        <div class="img-inner" :style="'background-image:url('+item.src+')'">
        </div>
        <div class="info-inner">
          <p>{{item.info}}</p>
          <p style="text-align: right">--{{item.auth}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "imgbox",
  props: ["imgs"]
};
</script>

<style lang="less" scoped>
  .img-box-wrap{
    text-align: center;
    height: 100%;
    overflow-y: auto;
    .img-item{
      display: inline-block;
      padding: 10px;
      margin: 5px;
      background: #ffffff;
      border-radius: 4px;
      box-shadow: 0 0 3px #ccc;
      opacity: .7;
      transition: all .3s;
      &:hover{
        opacity: 1;
        transform: translateY(-5px);
      }
      .img-inner{
        display: inline-block;
        width: 200px;
        height:0;
        padding-bottom: 100%;
        overflow:hidden;
        background-position: center center;
        background-repeat: no-repeat;
        -webkit-background-size:cover;
        -moz-background-size:cover;
        background-size:cover;
      }
      .info-inner{
        padding: 10px 0;
      }
    }
  }
</style>
