<template lang="html">
    <section :class="[panelClass,cname]">
        <slot/>
    </section>
</template>

<script>
export default {
  props: {
    cname: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      panelClass: 'panel'
    }
  }
}
</script>
