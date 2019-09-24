<template lang="html">
    <Panel title="理财精选" class="panel">
        <section class="content">
            <div class="item" v-for="item in items" :key="item.title">
                <p>{{ item.title }}<span>{{ item.sub }}</span></p>
                <p>{{ item.rate }}</p>
                <p>{{ item.text }}</p>
            </div>
        </section>
    </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components: {
    Panel
  },
  data () {
    return {
      items: [
        {
          title: '定期理财',
          sub: '理财首选',
          rate: '5.60%',
          text: '历史年化回报率'
        },
        {
          title: '小白理财',
          sub: '理财首选',
          rate: '4.22%',
          text: '7日年化收益率'
        },
        {
          title: '月月盈',
          sub: '养老保障',
          rate: '5%',
          text: '七日年化收益率'
        },
        {
          title: '小白基金',
          sub: '天天赚钱',
          rate: '4.27%',
          text: '7日年化收益率'
        }
      ]
    }
  }
}
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.content {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
.item {
  width: 50%;
  flex: 1 0 auto;
  box-sizing: border-box;
}

.item p {
  font-size: 1rem;
  line-height: 2rem;
  color: #333;
  font-weight: bold;
}
.item p span {
  font-size: 0.7rem;
  color: #ff5155;
  border: 1px solid #ff5155;
  padding: 0 8px;
  margin-left: 2px;
}
.item p:nth-child(2) {
  font-weight: bold;
  padding: 10px 5px 5px 5px;
  font-size: 2rem;
  height: 2rem;
  line-height: 2rem;
  color: #ff5155;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item p:nth-child(3) {
  font-size: 1rem;
  height: 1.5rem;
  line-height: 1.5rem;
  color: #999;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
