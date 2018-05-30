<template>
  <div class="avatar-wrap">
    <div class="avatar" :style="'height:'+size+'px;width:'+size+'px;line-height:'+size+'px;'">
      <img v-if="this.$store.state.userInfo.img_url" :style="'height:'+size+'px;width:'+size+'px;'" :src="this.$store.state.userInfo.img_url" />
      <span v-else>未登录</span>
    </div>
    <span v-if="config.more&&this.$store.state.userInfo.img_url"  :class="{'more-icon':true}"></span>
    <div v-if="config.more&&this.$store.state.userInfo.img_url" class="open-wrap" :style="'top:'+(size+15)+'px'">
      <p @click="logOut">退出登录</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "avatar",
    props: {//size:头像尺寸默认44px ， config配置：{more：退出扩展}
      size: {
        type: Number,
        default: 44
      },
      config: {
        type: Object,
        default () {
          return {};
        }
      }
    },
    data (){
      return {
        isOpen:false
      };
    },
    methods:{
      logOut () {
        this.http("get","logout").then(res=>{
          this.$store.dispatch("user_info",{clear:true});
          this.$router.push("/login");
          this.isOpen=false;
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  .avatar-wrap{
    display: inline-block;
    cursor: pointer;
    &:hover{
      .open-wrap{
        display: block;
      }
      .more-icon{
        top:14px;
        transform: rotateZ(180deg);
      }
    }
    .avatar {
      border-radius: 50%;
      display: inline-block;
      background: #fff;
      text-align: center;
      font-size: 12px;
      color: #999;
      overflow: hidden;
    }
    .more-icon{
      position: relative;
      top:16px;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 12px solid #eee;
      float: right;
      margin-left: 16px;
      cursor: pointer;
      transition: .3s;
    }
    .open-wrap{
      position: absolute;
      width: 70px;
      z-index: 999;
      border-radius: 2px;
      box-shadow: 0px 1px 1px #ccc;
      background: white;
      display: none;
      p{
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #666;
        text-align: center;
        padding: 2px;
        margin: 0;
        cursor: pointer;
        user-select: none;
        &:hover{
          background: #f2f2f2;
        }
      }
    }
  }

</style>
