<template>
  <div class="powder">
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile auto is-vertical is-parent">
          <div class="tile is-child">
          </div>
          <div class="tile is-child kitty1">
          </div>
          <div class="tile is-child">
          </div>
          <div class="tile is-child kitty4">
          </div>
        </div>
        <div class="tile is-3 is-vertical is-parent">
          <div class="tile is-child box hello">
            <Card url="/shop/scarfs">
              <img src="~assets/img/frame.png" alt="About" slot="image" />
              <h2>
                Scarfs
              </h2>
            </Card>
          </div>
          <div class="tile is-child kitty2">
          </div>
          <div class="tile is-child box hello">
            <card url="/shop/home">
              <img src="~assets/img/frame.png" alt="Shop" slot="image" />
              <h2>
                Home
              </h2>
            </card>
          </div>
          <div class="tile is-child kitty0">
          </div>
        </div>
        <div class="tile is-3 is-vertical is-parent">
          <div class="tile is-child kitty0">
          </div>
          <div class="tile is-child box hello">
            <card url="/shop/bags">
              <img src="~assets/img/frame.png" alt="Gallery" slot="image" />
              <h2>
                Bags
              </h2>
            </card>
          </div>
          <div class="tile is-child kitty2">
          </div>
          <div class="tile is-child box hello">
            <card url="/shop/jewelry">
              <img src="~assets/img/frame.png" alt="Shop" slot="image" />
              <h2>
                Jewelry
              </h2>
            </card>
          </div>
        </div>
        <div class="tile is-3 is-vertical is-parent">
          <div class="tile is-child box hello">
            <card url="/shop/hair">
              <img src="~assets/img/frame.png" alt="Blog" slot="image" />
              <h2>
                Hair
              </h2>
            </card>
          </div>
          <div class="tile is-child kitty2">
          </div>
          <div class="tile is-child box hello">
            <card url="/shop/belts">
              <img src="~assets/img/frame.png" alt="Contact" slot="image" />
              <h2>
                Belts
              </h2>
            </card>
          </div>
          <div class="tile is-child kitty0">
          </div>
        </div>
        <div class="tile auto is-vertical is-parent">
          <div class="tile is-child">
          </div>
          <div class="tile is-child kitty4">
          </div>
          <div class="tile is-child">
          </div>
          <div class="tile is-child kitty1">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Card from '~/components/Card.vue'

export default {
  name: 'shopMain',
  components: {
    Card
  }
}
</script>
<style scoped>
.powder
{
  background-color: #fefcfb;
  color: #413e3c;
}
.logo {
  width: 120px;
  display: inline-block;
}
h2 {
	text-shadow: #bab2b5 1px 2px;
	background-image: -webkit-gradient linear-gradient(to bottom right,#ff8a62 0,#ac3b61);
	background-image: linear-gradient(to bottom right,#ff8a62 0,#ac3b61);
;	background-repeat: no-repeat;
	background-size: 100% .2em;
	background-position: 0 95%;
}
.is-two-thirds{
  text-align: center;
  margin: 3rem;
}
.hello:hover {
  transition: background-color 1s ease-in-out;
  background-color:  #ff8a62;
  color: transparent;
}
.kitty0 {
  min-height: 15vh;
}
.kitty2 {
  min-height: 5vh;
}
.kitty0:hover {
  transition: 2s ease-in-out;
  background-image: linear-gradient(to bottom, rgba(231, 151, 178, 0.5), rgba(108, 7, 41, 0.5)),
  url(~assets/img/logo-pattern.png);
  background-size: 13%;
  color: transparent;
} 
.kitty1:hover {
  transition: 2s ease-in-out;
  background-image: linear-gradient(to bottom, rgba(231, 151, 178, 0.5), rgba(108, 7, 41, 0.5)),
  url(~assets/img/logo1.png);
  background-size: 85%;
  color: transparent;
} 
.kitty2:hover {
  transition: 2s ease-in-out;
  background-image: linear-gradient(to bottom, rgba(231, 151, 178, 0.5), rgba(108, 7, 41, 0.5)),
  url(~assets/img/logo2.png);
  background-size: 6%;
  color: transparent;
}
.kitty3:hover {
  transition: 2s ease-in-out;
  background-image: linear-gradient(to bottom, rgba(231, 151, 178, 0.5), rgba(108, 7, 41, 0.5)),
  url(~assets/img/logo3.png);
  background-size: 55%;
  color: transparent;
}
.kitty4:hover {
  transition: 2s ease-in-out;
  background-image: linear-gradient(to bottom, rgba(231, 151, 178, 0.5), rgba(108, 7, 41, 0.5)),
  url(~assets/img/logo4.png);
  background-size: 85%;
  color: transparent;
}
</style>