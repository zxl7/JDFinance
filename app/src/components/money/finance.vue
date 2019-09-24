<template lang="html">
    <Panel title="理财精选" class="panel">
        <section class="content">
            <div class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
                <div>
                    <span>月度理财</span>
                    <p>预期年化收益率4.50%</p>
                </div>
                <em>去赚钱 > </em>
            </div>
            <div class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76" alt="">
                <div>
                    <span>季度理财</span>
                    <p>历史年化回报率5.50%</p>
                </div>
                <em>去赚钱 > </em>
            </div>
            <div class="item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76" alt="">
                <div>
                    <span>一年理财</span>
                    <p>历史年化回报率5.80%</p>
                </div>
                <em>去赚钱 > </em>
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
  height: 100px;
}
img {
  width: 3rem;
  height: 3rem;
  display: inline-block;
  margin: 0 32px;
}

span {
  font-size: 1rem;
  color: #333;
}
p {
  color: #ff3232;
  font-size: 1rem;
  line-height: 1.1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 10px;
}
em {
  font-style: normal;
  color: #ff801a;
  font-size: 1rem;
  margin-left: 20px;
}
</style>
