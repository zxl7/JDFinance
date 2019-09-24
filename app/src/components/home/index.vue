<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Novice/>
        <Borrow/>
        <Money/>
        <Product/>
        <Life/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Slider from './hslider.vue'
import Borrow from './borrow.vue'
import Novice from './novice.vue'
import Money from './money.vue'
import Product from './product.vue'
import Life from './life.vue'
import Footor from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
export default {
  components: {
    Heador,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Footor,
    Navbar
  }
}
</script>
