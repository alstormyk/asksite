<template>
  <section class="pageStuff">
    <section class="hero is-medium is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
            Gallery
          </h1>
          <h2 class="subtitle is-size-2">
            Under Construction
          </h2>
        </div>
      </div>
    </section>
    <div class="columns">
      <div class="column auto">
      </div>
      <div class="column">
      </div>
      <div class="column">
      </div>
      <div class="column grady2 auto">
      </div>
    </div>
    <div class="columns">
      <div class="column grady0 auto">
      </div>
      <div class="column">
      </div>
      <div class="column">
      </div>
      <div class="column">
      </div>
      <div class="column auto">
      </div>
    </div>
    <div class="columns">
      <div class="column auto">
      </div>
      <div class="column">
      </div>
      <div class="column auto">
      </div>
    </div>
    <div class="columns grady">
      <div class="column grady0 auto">
      </div>
      <div class="column grady1 auto">
      </div>
      <div class="column grady2 auto">
      </div>
    </div>
  </section>
</template>


<script>
export default {
  layout: 'defaultLayout',
  scrollToTop: true,
  head () {
    return {
      title: 'Gallery',
      meta: [
        { hid: 'description', name: 'description', content: 'Work in progress' }
      ]
    }
  }
}
</script>
<style scoped>
.hero {
 margin-top: 8vh;
}
.heading {
  text-transform: capitalize;
}
.columns.grady {
  min-height: 10rem;
}
.column.grady0 {
  background: linear-gradient(to bottom right,#ff8a62 0,#ac3b61)
}
.column.grady1 {
  background: linear-gradient(to right,#ff8a62,#ac3b61, #ff8a62)
}
.column.grady2 {
  background: linear-gradient(to bottom left,#ff8a62 0,#ac3b61)
}
</style>
