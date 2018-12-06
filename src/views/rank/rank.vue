<template>
  <div class="m-rank" :style="{backgroundImage: 'url('+baseUrl+'img/rank_bg.png)'}">
    <!-- 上周人气排行榜 -->
    <div class="m-rank-box">
      <!-- `${baseUrl}my-image.png` -->
      <img class="m-title" :src="`${baseUrl}img/rank1_title.png`">
      <ul class="m-listtype1">
        <li>
          <div class="m-avatar">
            <img class="u-avatar" src="http://cdn.xiaojiankeji.com/images/CJYP/static/img/avatar.jpg">
            <img class="u-label" :src="`${baseUrl}img/second.png`">
          </div>
          <div class="u-name">用户名</div>
          <div class="u-count">87548</div>
        </li>

        <li>
          <div class="m-avatar">
            <img class="u-avatar" src="http://cdn.xiaojiankeji.com/images/CJYP/static/img/avatar.jpg">
            <img class="u-label" :src="`${baseUrl}img/first.png`">
          </div>
          <div class="u-name">用户名</div>
          <div class="u-count">87548</div>
        </li>

        <li>
          <div class="m-avatar">
            <img class="u-avatar" src="http://cdn.xiaojiankeji.com/images/CJYP/static/img/avatar.jpg">
            <img class="u-label" :src="`${baseUrl}img/third.png`">
          </div>
          <div class="u-name">用户名</div>
          <div class="u-count">87548</div>
        </li>
      </ul>
    </div>
    <!-- 人气总排行 -->
    <div class="m-rank-box" style="padding-left:0;padding-right:0;padding-bottom:0;">
      <img class="m-title" :src="`${baseUrl}img/rank2_title.png`">
      <p class="u-tip">点击下方您喜欢的选手为她投票吧~</p>
      <ul class="m-listtype2">
        <li v-for="(i,index) in 10" :key="index">
          <div class="u-label">
            <img v-if="index==0" :src="`${baseUrl}img/first.png`">
            <img v-if="index==1" :src="`${baseUrl}img/second.png`">
            <img v-if="index==2" :src="`${baseUrl}img/third.png`">
            <span v-if="index>2">{{index+1}}</span>
          </div>
          <img class="u-avatar" src="http://cdn.xiaojiankeji.com/images/CJYP/static/img/avatar.jpg">
          <div class="u-name">用户名</div>
          <div class="u-count">87548</div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import config from '@/config/index'
export default {
  name: 'Rank',
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      imgUrl: config.IMG_BASE,
    }
  },
  methods: {
  },
  created() {
  }
}
</script>

<style lang="less" scoped>
.m-rank{
  height: 100%;
  width: 100%;
  background-color: #093a9a;
  background-size: 100% 100%;
  overflow: auto;
  padding-bottom: 30px;
  box-sizing: border-box;
  background-repeat: no-repeat;

  .m-rank-box{
    background-color: #fff;
    margin: 0 30px;
    min-height: 50px;
    margin-top: 80px;
    border-radius: 10px;
    padding: 75px 30px 45px;
    position: relative;
    .m-title{
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      height: 80px;
      width: 390px;
    }
    .u-tip{
      color: #e7af45;
      font-size: 26px;
      text-align: center;
    }
    .m-listtype1{
      display: flex;
      justify-content: center;
      align-items: flex-end;
      >li{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        flex: 1 1 auto;
        .m-avatar{
          height: 100px;
          width: 100px;
          position: relative;
          .u-avatar{
            height: 100%;
            width: 100%;
            border-radius: 100%;
          }
          .u-label{
            height: 35px;
            width: 35px;
            position: absolute;
            right: 0;
            bottom: 0;
          }
        }
        .u-name{
          color: #093a9a;
          font-weight: 600;
          font-size: 30px;
          margin-top: 20px;
        }
        .u-count{
          color: #e7af45;
          // font-weight: 600;
          font-size: 30px;
          margin-top: 20px;
        }
      }
      >li:nth-child(2){
        .m-avatar{
          height: 150px;
          width: 150px;
          .u-label{
            height: 50px;
            width: 50px;
          }
        }
      }
    }
    .m-listtype2{
      margin-top: 30px;
      >li{
        display: flex;
        padding: 30px;
        align-items: center;
        .u-label{
          width: 60px;
          text-align: center;
          font-size: 34px;
          flex-shrink: 0;
          >img{
            width: 60px;
            height: 60px;
          }
        }
        .u-avatar{
          height: 85px;
          width: 85px;
          border-radius: 100%;
          margin-left: 30px;
          flex-shrink: 0;
        }
        .u-name{
          color: #093a9a;
          font-weight: 600;
          font-size: 30px;
          flex-grow: 1;
          margin-left: 30px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          margin-right: 20px;
        }
        .u-count{
          color: #e7af45;
          // font-weight: 600;
          font-size: 30px;
          flex-shrink: 0;
        }
      }
      >li:nth-child(odd){
        background-color: #fafafa;
      }
    }
  }
}
</style>