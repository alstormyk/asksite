<template>
  <piecePaper>
    <section class="hero is-bold is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
            {{info.title}}
          </h1>
        </div>
      </div>
    </section>
      <div class="columns">
        <div class="column auto">
        </div>
        <div class="column is-three-fifths content">
        <div v-html="info.body" />
        </div>
        <div class="column auto">
        </div>
      </div>
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
      title: `${this.info.title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.info.description}` }
      ]
    }
  },
    async asyncData({ app, route }) {
    return {
      info: await app.$content("/infos").get(route.path)
    }
  }
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