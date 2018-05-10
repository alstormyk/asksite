<template>
  <section class="section is-large">
    <div class="columns">
      <div class="column">Auto</div>
      <div class="column is-two-fifth">
        <div class="outer">
          <div class="inner">
            <img class="upper" src="">
          </div>
        </div>
      </div>
      <div class="column is-three-fifths">Auto</div>
      <div class="column">Auto</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'briefGallery'
}
</script>

<style scoped>
.outer {
  background-image: repeating-linear-gradient(190deg, rgba(252, 92, 125, .3) 40px, rgba(106, 130, 251, .2) 80px, rgba(254, 172, 94, .2) 120px, rgba(199, 121, 208, .2)160px, rgba(75, 192, 200, .2) 200px), repeating-linear-gradient(-190deg, rgba(252, 92, 125, .2) 30px, rgba(106, 130, 251, .3) 60px, rgba(254, 172, 94, .2) 90px, rgba(199, 121, 208, .2) 120px, rgba(75, 192, 200, .2) 150px), repeating-linear-gradient(23deg, rgba(252, 92, 125, .3) 50px, rgba(106, 130, 251, .3) 100px, rgba(254, 172, 94, .3) 150px, rgba(199, 121, 208, .3) 200px, rgba(75, 192, 200, .3) 250px);
  height: 400px;
  width: 400px;
  border: 1px #171412 solid;
}
.inner {
  height: 235px;
  width: 235px;
  background: #171412;
  -moz-border-radius: 150px;
  -webkit-border-radius: 150px;
  border-radius: 150px;
  margin-left: 25%;
  margin-top: 25%;
}
.upper {
  margin-top: -25px;
  margin-left: -25px;
}
</style>