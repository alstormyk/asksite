<template>
  <section class="pageStuff">
    <contact-hero/>
    <contact-part/>
    <follow-me/>
    <quick-message/>
    <signup-newsletter/>
  </section>
</template>

<script>
import contactHero from '~/components/contact/contactHero.vue'
import contactPart from '~/components/contact/contactPart.vue'
import followMe from '~/components/contact/followMe.vue'
import quickMessage from '~/components/quickMessage.vue'
import signupNewsletter from '~/components/signupNewsletter.vue'

export default {
  layout: 'defaultLayout',
  scrollToTop: true,
  components: {
    contactHero,
    contactPart,
    followMe,
    quickMessage,
    signupNewsletter
  },
  head () {
    return {
      title: 'Contact',
      meta: [
        { hid: 'description', name: 'description', content: 'SEO stuff.' }
      ]
    }
  }
}
</script>
<style scoped>

</style>
