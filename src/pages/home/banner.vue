<template>
    <div class="wrap">
      <el-row :gutter="10" style="height: 100%">
        <el-col :xs="24" :span="12" style="height: 100%">
          <div class="left">
              <h3>连载</h3>
            <div>
            </div>
        </div></el-col>
        <el-col :xs="24" :span="12" style="height: 100%">
          <div class="right">

        </div></el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "banner",
      data(){
          return{
            imgs:['../../assets/images/1.jpg','../../assets/images/2.jpg','../../assets/images/3.jpg']
          }
      }
    }
</script>

<style lang="less" scoped>
.wrap{
  padding: 20px;
  height: 100%;
  position: relative;
  .left, .right{
    height: 680px;
    position: relative;
    padding: 20px;
    h3{
      text-align: center;
    }
    &:after{
      position: absolute;
      top:5px;
      left:0;
      content: "";
      display: inline-block;
      height: calc(~"100% - 5px");
      width: 100%;
      background: black;
      opacity: .1;
      border-radius: 4px;
    }
  }
  .img-box{
    position: relative;
    display: inline-block;
    border: 3px solid white;
    transform: rotateZ(-45deg);
  }
}
</style>
