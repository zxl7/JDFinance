<template lang="html">
    <Panel title="白条福利" class="panel">
        <section class="content">
            <div class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
                <div>
                    <span>开通白条</span>
                    <p>送188元礼包</p>
                </div>
                <em>立即开通 > </em>
            </div>
            <div class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120" alt="">
                <div>
                    <span>白条闪付</span>
                    <p>新手享158元礼包</p>
                </div>
                <em>随机立减 ></em>
            </div>
            <div class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120" alt="">
                <div>
                    <span>白条提额</span>
                    <p>金融app专享提额礼包</p>
                </div>
                <em>去提额 > </em>
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
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
}
img {
  width: 4rem;
  height: 4rem;
}
span {
  font-size: 1rem;
  color: #333;
}
p {
  color: #999;
  font-size: 1rem;
  line-height: 1.1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
em {
  color: #ff801a;
  font-size: 1rem;
  font-style: normal;
}
</style>
