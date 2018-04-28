<template>
  <section>
    <info-hero/>
    <div class="columns is-centered is-multiline">
      <div class="column is-three-fifths">
        <div class="infolinks" v-for='info in infos' :key='info'>
        <nuxt-link :to="info.permalink">
          <h2 class="title">{{ info.title }}</h2>
        </nuxt-link>
        <br>
        </div>
        <nuxt-link to="/info/cookies">
        <h2 class="title">Cookie Policy</h2>
        </nuxt-link>
        <br>
      </div>
    </div>
  </section>
</template>


<script>
import infoHero from '~/components/info/infoHero.vue'
import Card from '~/components/Card.vue'

export default {
  layout: 'defaultLayout',
  scrollToTop: true,
  components: {
    infoHero,
    Card
  },
  async asyncData ({ app }) {
    return {
      infos: await app.$content('/infos').getAll()
    }
  }
}
</script>
<style scoped>
.pages {
 margin-bottom: 8vh;
}
h1 {
  color: #413e3c;
  background-image: linear-gradient(90deg, #ac3b61, #336ca4, #6c0729);
  background-size: 100% .5rem;
  background-position: 0 88%;
  background-repeat: no-repeat;
}
.column {
  min-height: 100px;
}
h2 {
  color: #413e3c;
  background-image: linear-gradient(90deg, #ac3b61, #336ca4, #0d4276, #6c0729);
  background-size: 100% .2rem;
  background-position: 0 88%;
  background-repeat: no-repeat;
}
</style>