<template>
  <piecePaper>
    <section class="hero is-bold is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
            Cookie Policy
          </h1>
        </div>
      </div>
    </section>
      <div class="columns">
        <div class="column auto">
        </div>
        <div class="column is-three-fifths content">
          <div id="optanon-cookie-policy"></div>
        </div>
        <div class="column auto">
        </div>
      </div>
    <div v-html="scripts"></div>
  </piecePaper>
</template>

<script>
import piecePaper from '~/components/info/piecePaper.vue'

export default {
  scrollToTop: true,
  components: {
    piecePaper
  },
  head () {
    return {
      title: `ASKc- Cookie Policy`,
      meta: [
        { hid: 'description', name: 'description', content: `Amy Storm Kosman creative Cookie Policy.` }
      ]
    }
  },
  /* data: () => ({
    scripts: "<script src='' type='text/javascript' charset='UTF-8'><\/script><script type='text/javascript'> function OptanonWrapper() { }<\/script>"
  }) onetrust.com cookie info */
}
</script>
<style>
.content {
  font-size: 1.25rem;
  line-height: 2rem;
}
.content a {
  color: #ac3b61;
  text-decoration: underline;
}
</style>
