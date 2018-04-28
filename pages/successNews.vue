<template>
  <section class="pageStuff">
    <section class="hero is-fullheight grady0">
      <div class="hero-body">
        <div class="container has-text-centered powder">
          <div class="column is-6 is-offset-3">
            <h1 class="title is-size-1">
              Thank you!
            </h1>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" viewBox="0 0 20 20">
              <path d="M9.5 20c-2.538 0-4.923-0.988-6.718-2.782s-2.782-4.18-2.782-6.717c0-2.538 0.988-4.923 2.782-6.718s4.18-2.783 6.718-2.783c2.538 0 4.923 0.988 6.718 2.783s2.782 4.18 2.782 6.718-0.988 4.923-2.782 6.717c-1.794 1.794-4.18 2.782-6.718 2.782zM9.5 2c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5z"
                fill="#413e3c"></path>
              <path d="M6.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM6.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
                fill="#413e3c"></path>
              <path d="M12.5 8c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM12.5 6c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5 0.5-0.224 0.5-0.5-0.224-0.5-0.5-0.5z"
                fill="#413e3c"></path>
              <path d="M9.5 17c-3.584 0-6.5-2.916-6.5-6.5 0-0.276 0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5 0 3.584-2.916 6.5-6.5 6.5zM4.023 11c0.253 2.799 2.613 5 5.477 5s5.224-2.201 5.477-5h-10.955z"
                fill="#413e3c"></path>
            </svg>
            <br>
            <h2 class="subtitle is-size-3">
              You have successfully subscribed to my newsletter.
            </h2>
            <p>
              <router-link exact to="/" class='link'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 20 20">
                  <path d="M20 4.5v12c0 0.827-0.673 1.5-1.5 1.5h-10c-0.827 0-1.5-0.673-1.5-1.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h10c0.276 0 0.5-0.224 0.5-0.5v-12c0-0.276-0.224-0.5-0.5-0.5h-10c-0.276 0-0.5 0.224-0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-4c0-0.827 0.673-1.5 1.5-1.5h10c0.827 0 1.5 0.673 1.5 1.5z"
                    fill="#413e3c"></path>
                  <path d="M3.646 7.147l-3 3c-0.195 0.195-0.195 0.512 0 0.707l3 3c0.195 0.195 0.512 0.195 0.707 0s0.195-0.512 0-0.707l-2.146-2.147h11.293c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-11.293l2.146-2.147c0.098-0.098 0.146-0.226 0.146-0.353s-0.049-0.256-0.146-0.353c-0.195-0.195-0.512-0.195-0.707 0z"
                    fill="#413e3c"></path>
                </svg>
                <br> Return to my site.
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'A.S.K.c Success',
      meta: [
        { hid: 'description', name: 'description', content: 'Transmission successful' }
      ]
    }
  }
}
</script>
<style scoped>
.hero.is-fullheight.grady0 {
  background: linear-gradient(to top left,#ff8a62 0,#ac3b61)
}
.container.has-text-centered.powder {
  padding: 10vh;
  background-color: #fefcfb;
}
a {
  color: #413e3c;
  text-decoration-line: underline;
  text-decoration-color: #ac3b61;
  font-style: italic;
}
h2 {
  margin-top: 1vh;
}
</style>
