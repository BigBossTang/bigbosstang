<template>
  <div>
    <div class="center-wrap">
      <p class="login-title">
        <span :class="{active:active==='login'}" @click="active='login'">登录</span>|<span :class="{active:active==='reg'}" @click="active='reg'">注册</span>
      </p>
      <div class="login-wrap">
        <group>
          <x-input required :is-type="error.username" label="ssss" @on-change="error.username=''" title="账号:" v-model="loginInfo.username"></x-input>
          <x-input required :is-type="error.password" @on-change="error.password=''" type="password" title="密码:" v-model="loginInfo.password"></x-input>
          <x-input style="font-size: 14px;" title="验证问题" v-if="active==='reg'" :value="qt[qI]" readonly></x-input>
          <x-input required :is-type="error.code" @on-change="error.code=''" style="font-size: 14px;" v-if="active==='reg'" title="输入验证答案:" v-model="answer"></x-input>
        </group>
        <span class="btn" @click="submit">{{active==='login'?'登录':'注册'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, XInput, XButton } from "vux";
import _forEach from "lodash/forEach";
export default {
  name: "login",
  components: {
    XInput,
    XButton,
    Group
  },
  data() {
    return {
      active: "login",
      loginInfo: {
        username: "",
        password: ""
      },
      error: {
        username: "",
        password: "",
        code: ""
      },
      answer: "",
      qt: [
        "唐老板最爱的运动？",
        "唐老板的生日？yyyy/mm/dd",
        "唐老板的全名？",
        "唐老板来自哪个星球"
      ],
      qI: "0",
      wr: ["3627529699", "49575749474950474951", "2177620961", "3732926143"]
    };
  },
  methods: {
    checkQt() {
      const num = parseInt((Math.random() * 100) % 4);
      this.qI = num;
      return num;
    },
    validate() {
      var check = true;
      if (this.loginInfo.username === "") {
        this.error.username = "不能为空，不要瞎搞！";
        check=false;
      }
      if (this.loginInfo.password === "") {
        this.error.password = "不能为空，不要瞎搞！";
        check=false;
      }
      if(this.active === "reg"){
        if (this.answer === "") {
          this.error.code = "验证问题，不要瞎搞！";
          check=false;
        }else{
          let key = "";
          _forEach(this.answer, w => {
            key += w.charCodeAt();
          });
          if (key !== this.wr[this.qI]) {
            this.error.code = "验证问题回答错误~";
            check=false;
          }
        }
      }

      return check;
    },

    submit() {
     if(!this.validate()){
       if(this.error.code){
         this.$message.error(this.error.code);
       }else{
         this.$message.error('检查下填写格式，重新提交');
       }
       return;
     }
    }
  },
  created() {
    this.checkQt();
  }
};
</script>

<style lang="less" scoped>
.center-wrap {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  .login-title {
    margin: 20px 0 5px;
    span {
      margin: 0 5px;
      transition: all 0.3s;
      cursor: pointer;
    }
    .active {
      color: #547834;
      transform: scaleX(1.2);
    }
  }
  .login-wrap {
    width: 300px;
    padding: 10px;
    display: inline-block;
    border: 1px solid #bccab2;
    border-radius: 4px;
    transition: all 0.3s;
    p {
      margin: 10px 0;
      text-align: left;
    }
    .error-info {
      color: red;
    }
    .btn {
      height: 36px;
      line-height: 36px;
      width: 100%;
      color: white;
      border-radius: 4px;
      display: inline-block;
      background: #547834;
      cursor: pointer;
      margin: 20px 0;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
