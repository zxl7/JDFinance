<template lang="html">
    <Panel title="极速借贷" class="panel">
        <section class="content">
            <router-link :to="{ name: 'home' }">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="">
            </router-link>
        </section>
    </Panel>
</template>

<script scoped>
import Panel from '../core/panel.vue'

export default {
  components: {
    Panel
  }
}
</script>

<style>
.panel {
  text-align: center;
}

.content {
  padding-bottom: 30px;
}
img {
  width: 100%;
}
</style>
