<template lang="html">
  <section :class="cname">
    <swiper :options="options" :notNextTick="options.notNextTick">
      <swiper-slide v-for:item in items :key = "item.href">
        <router-link :to="{name:item.href}">
          <img :src="item.src" alt=""> 
          <router-link/> 
       </swiper-slide> 
    </swiper>  

  </section>   
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    cname: {
      type: String,
      default: ''
    }
  },
  options: {
    type: String,
    default() {
      return {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        notNextTick: false
      }
    }
  },
  items: {
    type: Array,
    default() {
      return []
    }
  }
}
</script>

<style>
@import '~swiper/dost/css/swiper.css';
</style>