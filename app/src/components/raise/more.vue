<template lang="html">
    <Panel title="更多福利" class="panel">
      <h4>更多福利</h4>
        <section class="content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330" alt="">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330" alt="">
            <span>专享福利 > </span>
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
.content {
  display: flex;
  position: relative;
  justify-content: space-around;
  padding-bottom: 60px;
}
img {
  width: 33%;
  height: 100%;
}
span {
  position: absolute;
  right: 20px;
  top: -65px;
  font-size: 1rem;
  color: #999;
  height: 112px;
  line-height: 112px;
}
</style>
