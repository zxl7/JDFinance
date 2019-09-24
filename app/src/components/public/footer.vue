<template lang="html">
    <Panel title="公司信息" class="panel">
        <div class="content">
            <div class="help">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
            </div>
            <div class="visionS">
                <div class="vision">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
                    <span>客户端</span>
                </div>
                <div class="vision">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108" alt="">
                    <span>触屏版</span>
                </div>
                <div class="vision">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108" alt="">
                    <span>电脑版</span>
                </div>
            </div>
            <p>Copyright © 2004-2017 京东JD.com 版权所有</p>
            <p>投资有风险，购买需谨慎</p>
            <p>京东金融平台服务协议</p>
            <p>京东金融隐私政策</p>
        </div>
    </Panel>
</template>
<script>
import Panel from '../core/panel.vue'
export default {
  components: {
    Panel
  }
}
</script>

<style scoped>
.panel {
  padding-bottom: 3rem;
}

.help img {
  width: 100%;
  height: 100%;
}
.visionS {
  display: flex;
}
.vision {
  width: 33.3333%;
  text-align: center;
  box-sizing: border-box;
  padding-top: 20px;
}
.vision {
  width: 100%;
  text-align: center;
  color: #999;
}

.vision span {
  display: block;
  font-size: 1rem;
}
img {
  width: 4rem;
  height: 4rem;
}
p {
  font-size: 1rem;
  text-align: center;
  color: #999;
  padding-top: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  border-top: 1px solid #ddd;
}
</style>
