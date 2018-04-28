<template>
  <container>
    <section class="piecePaper">
      <nuxt-link to="/info" class="Close__Button">
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

h3 {
  font-size: 1.25rem;
  text-decoration-line: underline;
}

a {
  color: #171412;
  text-decoration-line: underline;
  text-decoration-color: #ac3b61;
  font-style: italic;
}

ul {
  padding-left: 1rem;
}

li {
  list-style: square;
}
</style>