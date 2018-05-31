<template>
    <div>
      <div class="center-wrap">
        <div class="login-wrap">
          <x-input title="dfdf" v-model="loginInfo.username"></x-input>
          <x-input title="title" v-model="loginInfo.password"></x-input>
        </div>
      </div>
    </div>
</template>

<script>
  import { XInput } from 'vux'
    export default {
      name: "login",
      components:{
        XInput
      },
      data(){
        return {
          loginInfo:{
            username:'',
            password:'',
          }
        }
      }
    }
</script>

<style lang="less" scoped>
.center-wrap{
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  .login-wrap{
    width: 300px;
    margin: 50px;
    padding: 20px;
    display: inline-block;
    border: 1px solid #2c3e50;
    border-radius: 4px;
  }
}
</style>
