<template>
  <article class="Card">
    <span class="Card">
      <slot name="image"/>
    </span>
    <nuxt-link :to="url">
      <h2 class='is-size-2'><slot/></h2>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.Card {
  position: relative;
  width: 100%
}
img {
  display: block;
  width: 100%;
}
a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 1s ease, transform 1s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1em;
  border-radius: 4px;
  border-bottom: 0;
  color: #fefcfb;
  text-align: center;
  text-decoration: none;
  z-index: 3;
}
h2 {
  color: #fefcfb;
}
</style>
