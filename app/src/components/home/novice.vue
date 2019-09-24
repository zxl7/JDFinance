<template lang="html">
    <Panel title="新手特权" class="panel">
      <h4>--新手特权--</h4>
        <section class="content">
            <div class="item1">
                <h4>下载APP<span class="red">送888元礼包</span></h4>
                <p class="gray">新手专享</p>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
            </div>
            <div class="item2">
                <ul>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
                        <h4 class="red">领128元新手礼包</h4>
                        <p class="gray">立即开通</p>
                    </li>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100" alt="">
                        <h4>打白条<span class="red">享免息</span></h4>
                        <p class="gray">立即开通享豪礼</p>
                    </li>
                </ul>
            </div>
        </section>
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
* {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}
.panel {
  text-align: center;
  background-color: #fff;
}

.panel h4 {
  font-size: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  border-bottom: 1px solid #ddd;
}
.content {
  display: flex;
  height: 252px;
}

.item1 {
  width: 50%;
  box-sizing: border-box;
}

.item1:first-child {
  padding: 1rem 20px 0px;
  text-align: center;
  border-right: 1px solid #ddd;
}

.item1 img {
  width: 132px;
  height: 132px;
  padding-top: 2.5rem;
}
.item1 h4 {
  font-size: 13px;
  text-align: center;
  line-height: 1rem;
  margin-top: 6px;
}
.red {
  color: #f00;
}
.gray {
  color: #999;
  font-size: 1rem;
}

p {
  margin-top: 6px;
  font-size: 12px;
}
ul {
  width: 100%;
}

.item2 {
  width: 50%;
  margin-left: 1rem;
}
li {
  height: 144px;
  width: 100%;
  padding: 20px 0px 0px;
  box-sizing: border-box;
}
li:first-child {
  border-bottom: 1px solid #ddd;
}
h4 {
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
}
.item2 img {
  width: 80px;
  height: 80px;
  float: right;
}
</style>
