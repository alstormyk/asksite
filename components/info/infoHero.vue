<template>
  <section class="hero is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-size-1">
        Information Pages
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'infoHero'
}
</script>

<style scoped>
.hero {
 margin-top: 8vh;
}
h1 {
	text-shadow: #bab2b5 1px 3px;
	background-image: -webkit-gradient (linear-gradient(90deg, #ac3b61, #336ca4));
	background-image: linear-gradient(90deg, #ac3b61, #336ca4);
	background-repeat: no-repeat;
	background-size: 100% .2em;
	background-position: 0 95%;
}
</style>