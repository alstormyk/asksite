<template>
  <section class="section page">
    <blog-hero/>
    <div class="columns is-centered is-multiline bloglist">
      <div class="column is-half-tablet is-one-quarter-widescreen" v-for='post in posts' :key='post'>
        <nuxt-link :to="post.permalink">
          <div class="card">
            <div class="card-image">
              <figure class="image is-square">
               <img v-if="post.image" v-bind:src="post.image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <p> {{post.description}} </p>
              </div>
              <div class="content">
                <h2 class="title">{{ post.title }}</h2>
                <time datetime="2016-1-1">{{ post.date }}</time>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
  
<script>

import blogHero from '~/components/blog/blogHero.vue'

export default {
  layout: 'defaultLayout',
  scrollToTop: true,
  components: {
    blogHero
  },
   async asyncData ({ app }) {
    return {
      posts: await app.$content('/posts').getAll()
    }
  },
  head () {
    return {
      title: 'Blog',
      meta: [
        { hid: 'description', name: 'description', content: 'SEO blog stuff.' }
      ]
    }
  },
  transition (to, from) {
    if (!from || to.name === 'index') return 'slide-right'
    return 'slide-left'
  }
}
</script>
<style>
.bloglist {
  padding: 5vh;
}
</style>
