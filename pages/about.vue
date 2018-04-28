<template>
  <section class="pageStuff">
    <about-hero/>
    <company-story/>
    <personal-story/>
    <main-timeline/>
  </section>
</template>

<script>
import aboutHero from '~/components/about/aboutHero.vue'
import companyStory from '~/components/about/companyStory.vue'
import personalStory from '~/components/about/personalStory.vue'
import mainTimeline from '~/components/about/mainTimeline.vue'

export default {
  layout: 'defaultLayout',
  scrollToTop: true,
  components: {
    aboutHero,
    companyStory,
    personalStory,
    mainTimeline
  },
  head () {
    return {
      title: 'About',
      meta: [
        { hid: 'description', name: 'description', content: 'SEO stuff' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
