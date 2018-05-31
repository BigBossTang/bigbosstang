<template>
    <div>
    <h1 class="center-wrap">404 not found</h1>
      <h3 class="center-wrap">{{time}}秒后返回主页...</h3>
    </div>
</template>

<script>
export default {
  name: "notFound",
  data() {
    return {
      time: 10
    };
  },
  created(){
    const timeOut = ()=>{
      setTimeout(()=>{
        if(this.time>1){
          this.time--
          timeOut();
        }else{
          this.$router.push('/');
        }
      },1000)
    }
    timeOut();

  }
};
</script>

<style scoped>
.center-wrap {
  max-width: 1200px;
  margin: 10px auto;
  text-align: center;
  color: rgb(84, 120, 52);
}
</style>
