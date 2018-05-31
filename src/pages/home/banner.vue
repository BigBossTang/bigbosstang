<template>
    <div class="wrap">
      <el-row :gutter="10" style="height: 100%">
        <el-col :xs="24" :span="12" style="height: 100%;margin-bottom: 40px;">
          <div class="left">
              <h3>连载</h3>
            <div class="article-container">
              <div v-for="item,index in articles" class="article-item" :style="index<2?'margin-bottom:20px':''">
                <p class="title">{{item.title}} <span>发布时间：{{item.createTime}}</span><span v-if="item.refreshTime">更新时间：{{item.refreshTime}}</span></p>
                <div class="instro" v-if="index<2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.content}}</div>
              </div>
            </div>
            <div>
            </div>
        </div></el-col>
        <el-col :xs="24" :span="12" style="height: 100%">
          <div class="right">
            <imgBox :imgs="imgs"/>
        </div></el-col>
      </el-row>
    </div>
</template>

<script>
import imgBox from "./imgbox.vue";
export default {
  name: "banner",
  components: { imgBox },
  data() {
    return {
      imgs: [
        {info:'五千米的高山挡不住',auth:'唐大炮',src:"../../static/images/1.jpg"},
        {info:'我对自由的渴望',auth:'唐二炮',src:"../../static/images/2.jpg"},
        {info:'像风一样',auth:'唐三炮',src:"../../static/images/3.jpg"},
        {info:'像风一样',auth:'唐三炮',src:"../../static/images/1.jpg"},
      ],
      articles: [
        {
          title: "第十章 喝酒",
          content: "天下大势喝酒必昏，荤酒必喝，反复尔...",
          createTime: "2018/4/10",
          refreshTime: "2018/4/12"
        },
        {
          title: "第九章 吃酒",
          content: "天下大势喝酒必昏，荤酒必喝，反复尔...",
          createTime: "2018/4/10",
          refreshTime: ""
        },
        {
          title: "第八章 饮酒",
          content: "天下大势喝酒必昏，荤酒必喝，反复尔...",
          createTime: "2018/4/10",
          refreshTime: ""
        },
        {
          title: "第七章 煮酒",
          content: "天下大势喝酒必昏，荤酒必喝，反复尔...",
          createTime: "2018/4/10",
          refreshTime: "2018/4/12"
        },
        {
          title: "第六章 喂酒",
          content: "天下大势喝酒必昏，荤酒必喝，反复尔...",
          createTime: "2018/4/10",
          refreshTime: ""
        },
        {
          title: "第五章 偷酒",
          content: "天下大势喝酒必昏，荤酒必喝，反复尔...",
          createTime: "2018/4/10",
          refreshTime: "2018/4/12"
        },
        {
          title: "第四章 洒酒",
          content: "天下大势喝酒必昏，荤酒必喝，反复尔...",
          createTime: "2018/4/10",
          refreshTime: "2018/4/12"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.wrap {
  padding:0 20px 20px 20px;
  height: 100%;
  position: relative;
  .left,
  .right {
    height: 680px;
    position: relative;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #bccab2;
    h3 {
      text-align: center;
      padding: 10px 0 20px;
    }
  }
  .left > .article-container {
    .article-item {
      margin: 5px 0 10px;
      color: black;
      cursor: pointer;
      &:hover{
        color: #547834;
      }
      .title {
        font-size: 16px;
        margin-bottom: 5px;
        span {
          margin-left: 10px;
          font-size: 14px;
          color: #999;
        }
      }
      .instro {
        color: #888;
      }
    }
  }
  .img-box {
    position: relative;
    display: inline-block;
    border: 3px solid white;
    transform: rotateZ(-45deg);
  }
}
</style>
