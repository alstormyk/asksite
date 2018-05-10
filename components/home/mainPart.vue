<template>
  <div class="powder">
    <div class="columns">
      <div class="column auto">
      </div>
      <div class="column is-two-thirds">
        <h4 class='is-size-2'>The spaces of ASKcreative.
        </h4>
      </div>
      <div class="column auto">
      </div>
    </div>
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile auto is-vertical is-parent">
          <div class="tile is-child">
          </div>
          <div class="tile is-child kitty1">
          </div>
          <div class="tile is-child">
          </div>
        </div>
        <div class="tile is-3 is-vertical is-parent">
          <div class="tile is-child box hello">
            <Card url="/about">
              <img src="" alt="About" slot="image" />
              <h2>About</h2>
              <hr>
            </Card>
          </div>
          <div class="tile is-child kitty0">
          </div>
          <div class="tile is-child box hello">
            <card url="/shop">
              <img src="" alt="Shop" slot="image" /> Shop
              <hr>
            </card>
          </div>
        </div>
        <div class="tile is-3 is-vertical is-parent">
          <div class="tile is-child kitty2">
          </div>
          <div class="tile is-child box hello">
            <card url="/gallery">
              <img src="" alt="Gallery" slot="image" /> Gallery
              <hr>
            </card>
          </div>
          <div class="tile is-child kitty3">
          </div>
        </div>
        <div class="tile is-3 is-vertical is-parent">
          <div class="tile is-child box hello">
            <card url="/blog">
              <img src="" alt="Blog" slot="image" /> Blog
              <hr>
            </card>
          </div>
          <div class="tile is-child kitty0">
          </div>
          <div class="tile is-child box hello">
            <card url="/contact">
              <img src="" alt="Contact" slot="image" /> Contact
              <hr>
            </card>
          </div>
        </div>
        <div class="tile auto is-vertical is-parent">
          <div class="tile is-child">
          </div>
          <div class="tile is-child kitty4">
          </div>
          <div class="tile is-child">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Card from '~/components/Card.vue'

export default {
  name: 'mainPart',
  components: {
    Card
  }
}
</script>
<style scoped>
.logo {
  width: 120px;
  display: inline-block;
}
.is-two-thirds{
  text-align: center;
  margin: 3rem;
}
img {
  min-height: 200px;
}
.hello:hover {
  transition: background-color 1s ease-in-out;
  background-color:  rgba(108, 7, 41, 0.5);
  color: transparent;
}
.kitty0 {
  min-height: 3vh;
}
.kitty0:hover {
  transition: 2s ease-in-out;
  background-image: linear-gradient(to bottom, rgba(231, 151, 178, 0.5), rgba(108, 7, 41, 0.5)),
  url();
  background-size: 5%;
  color: transparent;
} 
.kitty1:hover {
  transition: 2s ease-in-out;
  background-image: linear-gradient(to bottom, rgba(231, 151, 178, 0.5), rgba(108, 7, 41, 0.5)),
  url();
  background-size: 85%;
  color: transparent;
} 
.kitty2:hover {
  transition: 2s ease-in-out;
  background-image: linear-gradient(to bottom, rgba(231, 151, 178, 0.5), rgba(108, 7, 41, 0.5)),
  url();
  background-size: 55%;
  color: transparent;
}
.kitty3:hover {
  transition: 2s ease-in-out;
  background-image: linear-gradient(to bottom, rgba(231, 151, 178, 0.5), rgba(108, 7, 41, 0.5)),
  url();
  background-size: 55%;
  color: transparent;
}
.kitty4:hover {
  transition: 2s ease-in-out;
  background-image: linear-gradient(to bottom, rgba(231, 151, 178, 0.5), rgba(108, 7, 41, 0.5)),
  url();
  background-size: 85%;
  color: transparent;
}
</style>