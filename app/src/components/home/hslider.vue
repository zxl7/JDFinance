<template lang="html">
    <div class="hslider">
        <article class="slider">
        <Slider :items="items"/>
        <section class="list">
            <div class="item" v-for="item in enters" :key="item.img">
                <router-link :to="{ name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>
    </article>
    </div>
</template>

<script>
import Slider from '../core/slider.vue'
export default {
  components: {
    Slider
  },
  data () {
    return {
      items: [
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t13744/11/2508939408/43213/58bfe502/5a421ff3N52d0a474.jpg?width=750&height=320'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t16138/325/817844900/36681/5d874455/5a422029Ncd678ea3.jpg?width=750&height=320'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t1/63424/21/10543/136616/5d80a7e3Efa5fa513/9a427657c21965a1.jpg?width=750&height=320'
        }
      ],
      enters: [
        {
          href: 'download',
          img:
            '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
          title: '优惠券'
        },
        {
          href: 'home',
          img:
            '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
          title: '领红包'
        },
        {
          href: 'home',
          img:
            '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
          title: '抢钢镚'
        },
        {
          href: 'home',
          img:
            '//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132',
          title: '领京豆'
        },
        {
          href: 'home',
          img:
            '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
          title: '白条提额'
        }
      ]
    }
  }
}
</script>
<style>
.hslider {
  margin-top: 4.5rem;
}
.slider img {
  width: 100%;
  height: 100%;
}
.list {
  display: flex;
  align-content: center;
  justify-content: space-around;
  background: #fff;
  padding-top: 1rem;
  padding-bottom: 1.7rem;
}
a {
  text-decoration: none;
}
.item {
  text-align: center;
}
.item img {
  display: inline-block;
  width: 4rem;
  height: 4rem;
}
h4 {
  font-size: 1rem;
  color: #666;
  margin: 5px 0px;
}
</style>
