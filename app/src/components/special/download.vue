<template lang="html">
    <Panel title="下载APP" class="panel">
        <section class="content">
            <div class=""/>
        </section>
        <router-link :to="{name:'home'}">
            <p>立即下载</p>
        </router-link>
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
html,
body {
  background: #fff;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content div {
  background: url(https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?)
    center center no-repeat;
  width: 600px;
  height: 400px;
  background-size: 100% auto;
}
p {
  text-decoration: none;
  margin: 20px auto;
  font-size: 1rem;
  color: #fff;
  background-color: #f1443e;
  width: 10rem;
  height: 3rem;
  line-height: 3rem;
  bottom: 350px;
  border-radius: 5px;
  background-image: linear-gradient(270deg, #f55c33 0, #ee2d1b 75%);
  text-align: center;
}
</style>
