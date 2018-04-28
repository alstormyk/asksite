<template>
  <container>
    <section class="oneArticle">
      <nuxt-link to="/blog" class="Close__Button">
            X
      </nuxt-link>
      <slot/>
    </section>
  </container>
</template>

<style scoped>
.Close__Button {
  position: fixed;
  top: 30px;
  right: 30px;
  color: #ac3b61;
  font-size: 36px;
  font-weight: 300;
  background-color: #fefcfb;
  text-decoration: none;
  border: 2px solid #413e3c;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-style: normal;
}

.Close__Button:hover {
    color: #413e3c;
    background-color: #ac3b61;
}
</style>