<template>
  <section class="pages">
    <div class="columns">
      <div class="column auto">
      </div>
      <div class="column is-three-fifths">
        <card url="/info/faq">
          <h2>FAQ</h2>
        </card>
      </div>
      <div class="column auto">
      </div>
    </div>
    <div class="columns">
      <div class="column auto">
      </div>
      <div class="column is-three-fifths">
        <card url="/info/payments">
          <h2>Payment Policy</h2>
        </card>
      </div>
      <div class="column auto">
      </div>
    </div>
    <div class="columns">
      <div class="column auto">
      </div>
      <div class="column is-three-fifths">
        <card url="/info/privacy">
          <h2>Privacy Policy</h2>
        </card>
      </div>
      <div class="column auto">
      </div>
    </div>
    <div class="columns">
      <div class="column auto">
      </div>
      <div class="column is-three-fifths">
        <card url="/info/returns">
          <h2>Returns, Exchanges, and Cancellations</h2>
        </card>
      </div>
      <div class="column auto">
      </div>
    </div>
    <div class="columns">
      <div class="column auto">
      </div>
      <div class="column is-three-fifths">
        <card url="/info/shipping">
          <h2>Shipping Policy</h2>
        </card>
      </div>
      <div class="column auto">
      </div>
    </div>
    <div class="columns">
      <div class="column auto">
      </div>
      <div class="column is-three-fifths">
        <card url="/info/terms">
          <h2>Terms and Conditions</h2>
        </card>
      </div>
      <div class="column auto">
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  name: 'infoPages',
  components: {
    Card
  }
}
</script>

<style scoped>
.pages {
 margin-bottom: 8vh;
}
h1 {
  color: #413e3c;
  background-image: linear-gradient(90deg, #ac3b61, #336ca4, #6c0729);
  background-size: 100% .5rem;
  background-position: 0 88%;
  background-repeat: no-repeat;
}
.column {
  min-height: 100px;
}
h2 {
  color: #413e3c;
  background-image: linear-gradient(90deg, #ac3b61, #336ca4, #0d4276, #6c0729);
  background-size: 100% .2rem;
  background-position: 0 88%;
  background-repeat: no-repeat;
}
</style>
