<template>
  <one-article>
    <section class="hero is-bold is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
            {{ post.title }}
          </h1>
        </div>
      </div>
    </section>
      <div class="columns is-mobile">
        <div class="column auto">

        </div>
        <div class="column is-four-fifths-mobile is-three-fifths-tablet content">

            <div v-html="post.body" />
          </div>
         <div class="column auto">
        </div>
       </div>
             <div class="columns is-mobile">
        <div class="column auto">
        </div>
        <div class="column is-four-fifths-mobile is-three-fifths-tablet just-comments" data-allowguests="true" data-recaptcha="true" data-apikey="xxxxxx">
      </div>
      <script async src="https://just-comments.com/w.js"></script>
      <script src='https://www.google.com/recaptcha/api.js?onload=jcOnRecaptchaLoad&render=explicit' async defer>
      </script>
         <div class="column auto">
        </div>
      </div>
  </one-article>
</template>

<script>
import oneArticle from '~/components/blog/oneArticle.vue'

export default {
    scrollToTop: true,
    components: {
    oneArticle,
    },
  async asyncData ({ app, route }) {
    return {
      post: await app.$content('/posts').get(route.path)
    }
  },
  transition (to, from) {
    if (!from || to.path === '/blog') return 'slide-left'
    return 'slide-right'
  },
    head () {
    return {
      title: `${this.post.title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.post.description}` }
      ]
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
.just-comments {
  margin-top: 5vh;
}
</style>
