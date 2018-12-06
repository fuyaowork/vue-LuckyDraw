<template>
  <div class="m-raffle">
    <div class="m-box">
      <!-- 背景 -->
      <img class="u-bg" :src="`${baseUrl}img/raffle_bg.png`">
      <!-- 转盘 -->
      <div class="m-turntable">
        <!-- 边框 -->
        <img class="u-border" :src="`${baseUrl}img/raffle_border.png`">
        <!-- 奖品部分，4个奖项 -->
        <div class="m-prize-list" :style="{transform: rotate_angle, transition: 'transform '+ time + 's' +' ease'}">
          <div v-for="(i,index) in 4" :key="index">
            <img src="http://cdn.xiaojiankeji.com/images/CJYP/static/img/avatar.jpg">
            {{index}}
          </div>
        </div>
        <!-- 按钮 -->
        <img class="u-btn" :src="`${baseUrl}img/raffle_btn.png`" @click="handleStart">
      </div>
      <!-- 抽奖说明 -->
      <div class="m-introduce">
        <img class="u-title" :src="`${baseUrl}img/raffle_i.png`">
        <div class="m-content">
          <p>1、具体奖励如下：</p>
          <br/>
          <p>一等奖：价值 498 元的珊瑚藻倍润保湿礼盒 1 套。</p>
          <p>二等奖：价值 168 元的鲟鱼子净爽竹炭面膜 1 盒。</p>
          <p>三等奖：价值 138 元的子初护肤旅行装（鱼子精华水 20ml+鱼子焕颜修护乳 20ml+鲟鱼子净爽竹炭面膜 2片）</p>
          <p>幸运奖：价值 80 元的代金券 1 张（购买子初产品满 368 元时可用）</p>
          <br/>
          <p>2、第一至三等奖的奖品由公司承担，公司事先给予每个参与活动的门店 30 套子初护肤旅行装，方便门店兑奖。随后每周统计中奖名单，由公司直接将奖品发放至对应门店，中奖者凭手机中奖页面到店领取。</p>
          <br/>
          <p>3、幸运奖的代金券费用由门店承担。顾客中奖后向门店 。</p>
        </div>
      </div>
      <!-- 中奖纪录按钮 -->
      <img class="u-info-btn" :src="`${baseUrl}img/raffle_top_btn.png`" @click="dialogVisible=true">
    </div>
    <!-- 中奖纪录弹窗 -->
    <transition name="fade">
      <div class="m-dialog" v-if="dialogVisible" :style="{backgroundImage: 'url('+baseUrl+'img/rank_bg.png)'}">
        <div class="u-close-btn" @click="dialogVisible=false">关闭</div>
        <img class="u-top-img" :src="`${baseUrl}img/raffle_list_top.png`">
        <div class="m-dialog-body">
          <div class="u-list-title">
            <div style="width:35%">日期</div>
            <div style="width:30%">奖品</div>
            <div style="width:35%">兑奖码</div>
          </div>
          <ul>
            <li v-for="(i,index) in 20">
              <div style="width:35%">2018.11.11</div>
              <div style="width:30%">幸运奖</div>
              <div style="width:35%">6666</div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Raffle',
  data() {
    return {
      baseUrl: process.env.BASE_URL,

      click_flag: true, // 是否可以旋转抽奖
      start_rotating_degree: 0, // 初始旋转角度
      rotate_angle: 0, // 将要旋转的角度
      time: 5, // 动画执行时间

      dialogVisible: false,
    }
  },
  methods: {
    // 点击抽奖
    handleStart(){
      this.rotating(2);
    },
    // 转动函数，需要传入奖品对应下标，如果没有传入,则随机
    rotating(index) {
      if (!this.click_flag) return;

      let result_angle = [45, 315, 135, 225]; //最终会旋转到下标的位置所需要的度数
      let rand_circle = 4; // 附加多转几圈，6
      this.click_flag = false; // 旋转结束前，不允许再次触发

      // 转动盘子
      let rotate_angle = this.start_rotating_degree + rand_circle * 360 + result_angle[index] - this.start_rotating_degree % 360 + ( 44 - Math.random() * 88 ); // 这里为计算旋转的角度，考虑第一次旋转后的结果
      // console.log(rotate_angle);
      this.start_rotating_degree = rotate_angle;
      // console.log(this.start_rotating_degree);
      this.rotate_angle = "rotate(" + rotate_angle + "deg)";
      var that = this;
      // 旋转结束后，允许再次触发
      setTimeout(function() {
        that.click_flag = true;
        that.winning(index);
      }, this.time * 1000);

    },
    //中奖函数，需传入中奖结果 string
    winning(result){
      alert(result);
    },
  },
  created() {
  }
}
</script>

<style lang="less" scoped>
.m-raffle{
  height: 100%;
  width: 100%;
  background-color: #053696;
  overflow: hidden;
  .m-box{
    height: 100%;
    width: 100%;
    overflow: auto;
    position: relative;
    background-color: #053696;
  }
  .u-bg{
    width: 100%;
  }
  .m-turntable{
    width: 620px;
    height: 620px;
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100%;
    box-shadow: 10px 10px 20px rgba(0,0,0,.3);
    .u-border{
      position: absolute;
      z-index: 1;
      height: 100%;
      width: 100%;
    }
    .m-prize-list{
      position: absolute;
      z-index: 2;
      width: 551px;
      height: 551px;
      background-color: #fff;
      border-radius: 100%;
      overflow: hidden;
      top: 35px;
      left: 35px;
      display: flex;
      flex-wrap: wrap;
      >div{
        width: 275px;
        height: 275px;
        position: relative;
        >img{
          position: absolute;
        }
      }
      >div:first-child,>div:last-child{
        background-color: #f4f4fe;
      }
      >div:nth-child(1){
        >img{
          transform: rotate(-45deg);
          right: 60px;
          bottom: 60px;
        }
      }
      >div:nth-child(2){
        >img{
          transform: rotate(45deg);
          left: 60px;
          bottom: 60px;
        }
      }
      >div:nth-child(3){
        >img{
          transform: rotate(-135deg);
          right: 60px;
          top: 60px;
        }
      }
      >div:nth-child(4){
        >img{
          transform: rotate(135deg);
          left: 60px;
          top: 60px;
        }
      }
    }
    .u-btn{
      position: absolute;
      z-index: 3;
      width: 120px;
      height: 150px;
      left: 50%;
      transform: translateX(-50%);
      top: 222px;
    }
  }
  .m-introduce{
    position: absolute;
    top: 935px;
    left: 30px;
    right: 30px;
    // margin: 935px 30px 30px;
    min-height: 100px;
    background-color: #0f43a7;
    padding: 30px;
    font-size: 26px;
    color: #fff;
    line-height: 1.5;
    border-radius: 10px;
    margin-bottom: 30px;
    .u-title{
      width: 285px;
      margin-left: 50%;
      transform: translateX(-50%);
      margin-bottom: 30px;
    }
  }
  .u-info-btn{
    position: absolute;
    top: 0;
    right: 40px;
    width: 65px;
    height: 75px;
  }
  .m-dialog{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-size: 100% 100%;
    .u-close-btn{
      position: absolute;
      top: 15px;
      right: 30px;
      background-color: #fff;
      border-radius: 10px;
      padding: 10px 20px;
    }
    .u-top-img{
      margin-top: 70px;
      width: 100%;
      display: block;
    }
    .m-dialog-body{
      margin: 0 30px;
      margin-top: -1px;
      background: linear-gradient(to bottom,#f5f7fa,#fff);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      height: 85%;
      .u-list-title{
        height: 75px;
        line-height: 75px;
        display: flex;
        >div{
          text-align: center;
          color: #002f87;
          font-size: 30px;
        }
      }
      >ul{
        height: calc(100% - 75px);
        overflow: auto;
        >li{
          height: 90px;
          line-height: 90px;
          display: flex;
          >div{
            text-align: center;
            color: #666666;
            font-size: 30px;
          }
        }
        >li:nth-child(odd){
          background-color: #f5f5f5;
        }
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
