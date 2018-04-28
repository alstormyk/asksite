<template>
  <div>
    <my-top/>
    <nuxt/>
    <my-bottom/>
  </div>
</template>

<script>
import myTop from '../components/myTop.vue'
import myBottom from '~/components/myBottom.vue'

export default {
  components: {
    myTop,
    myBottom
  }
}
</script>