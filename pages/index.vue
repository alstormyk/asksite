<template>
  <div class='powder'>
    <my-hero/>
    <little-info/>
    <main-part/>
    <quick-message/>
    <signup-newsletter/>
    <my-bottom/>
  </div>
</template>

<script>
import myHero from '~/components/home/myHero.vue'
import littleInfo from '~/components/home/littleInfo.vue'
import mainPart from '~/components/home/mainPart.vue'
import quickMessage from '~/components/quickMessage.vue'
import signupNewsletter from '~/components/signupNewsletter.vue'
import myBottom from '~/components/myBottom.vue'

export default {
  scrollToTop: true,
  components: {
    myHero,
    littleInfo,
    mainPart,
    quickMessage,
    signupNewsletter,
    myBottom
  }
}
</script>

<style>
.powder {
  background-color: #fefcfb;
  color: #413e3c;
}
</style>