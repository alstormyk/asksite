<template>
  <section class="section is-large">

    <brief-shop-hero/>
    <div class="columns">
      <div class="column auto is-hidden-touch">
      </div>
      <div class="column">
        <div class="card outer0">
        </div>
      </div>
      <div class="column">
        <div class="card outer1">
        </div>
      </div>
      <div class="column auto is-hidden-touch">
      </div>
    </div>

    <div class="columns righty">
      <div class="column auto">
      </div>
        <div class="column">
          <div class="card outer2">
          </div>
        </div>
        <div class="column auto">
        </div>
      </div>

      <div class="columns">
        <div class="column auto is-hidden-touch">
        </div>
        <div class="column">
          <div class="card outer3">
          </div>
        </div>
        <div class="column">
          <div class="card outer4">
          </div>
        </div>
        <div class="column auto is-hidden-touch">
        </div>

      </div>

      <div class="columns righty">
        <div class="column auto">
        </div>
        <div class="column">
          <div class="card outer5">
          </div>
        </div>
        <div class="column auto">
        </div>
      </div>
  </section>
</template>


<script>
import briefShopHero from '~/components/home/briefShopHero.vue'

export default {
  name: 'briefShop',
    components: {
    briefShopHero,
}
}
</script>

<style scoped>
.outer0 {
  background-image: repeating-linear-gradient(190deg, rgba(140, 12, 35, 1) 40px,
   rgba(106, 130, 251, .2) 80px,
    rgba(254, 172, 94, .2) 120px,
     rgba(199, 121, 208, .2)160px,
      rgba(75, 192, 200, .2) 200px),
       repeating-linear-gradient(-190deg,
        rgba(140, 12, 35, 1) 30px,
         rgba(106, 130, 251, .3) 60px,
          rgba(254, 172, 94, .2) 90px,
           rgba(199, 121, 208, .2) 120px,
            rgba(75, 192, 200, .2) 150px),
             repeating-linear-gradient(23deg,
              rgba(140, 12, 35, 1) 50px,
               rgba(106, 130, 251, .3) 100px,
                rgba(254, 172, 94, .3) 150px,
                 rgba(199, 121, 208, .3) 200px,
                  rgba(75, 192, 200, .3) 250px);
  height: 350px;
  width: 350px;
  border: 1px #171412 solid;
}
.outer1 {
  background-image: repeating-linear-gradient(190deg, rgba(252, 92, 125, .3) 40px,
   rgba(106, 130, 251, .2) 80px,
    rgba(245, 64, 2, 1) 120px,
     rgba(199, 121, 208, .2)160px,
      rgba(75, 192, 200, .2) 200px),
       repeating-linear-gradient(-190deg, rgba(252, 92, 125, .2) 30px,
        rgba(106, 130, 251, .3) 60px,
         rgba(245, 64, 2, 1) 90px,
         rgba(199, 121, 208, .2) 120px,
          rgba(75, 192, 200, .2) 150px),
         repeating-linear-gradient(23deg,
          rgba(252, 92, 125, .3) 50px,
          rgba(106, 130, 251, .3) 100px,
           rgba(245, 64, 2, 1) 150px,
            rgba(199, 121, 208, .3) 200px,
             rgba(75, 192, 200, .3) 250px);
  height: 350px;
  width: 350px;
  border: 1px #171412 solid;
}
.outer2 {
  background-image: repeating-linear-gradient(190deg, rgba(252, 92, 125, .3) 40px,
   rgba(106, 130, 251, .2) 80px,
    rgba(254, 172, 94, .2) 120px,
     rgba(255, 241, 54, 1)160px,
      rgba(75, 192, 200, .2) 200px),
       repeating-linear-gradient(-190deg, rgba(252, 92, 125, .2) 30px,
        rgba(106, 130, 251, .3) 60px,
         rgba(254, 172, 94, .2) 90px,
         rgba(255, 241, 54, 1),
          rgba(75, 192, 200, .2) 150px),
         repeating-linear-gradient(23deg,
          rgba(252, 92, 125, .3) 50px,
          rgba(106, 130, 251, .3) 100px,
           rgba(254, 172, 94, .2) 150px,
            rgba(255, 241, 54, 1) 200px,
             rgba(75, 192, 200, .3) 250px);
  height: 350px;
  width: 350px;
  border: 1px #171412 solid;
}
.outer3 {
  background-image: repeating-linear-gradient(190deg, rgba(252, 92, 125, .3) 40px,
   rgba(106, 130, 251, .2) 80px,
    rgba(254, 172, 94, .2) 120px,
     rgba(199, 121, 208, .2)160px,
      rgba(62, 149, 35, 1) 200px),
       repeating-linear-gradient(-190deg, rgba(252, 92, 125, .2) 30px,
        rgba(106, 130, 251, .3) 60px,
         rgba(254, 172, 94, .2) 90px,
          rgba(199, 121, 208, .2) 120px,
           rgba(62, 149, 35,1) 150px),
            repeating-linear-gradient(23deg, rgba(252, 92, 125, .3) 50px,
             rgba(106, 130, 251, .3) 100px,
              rgba(254, 172, 94, .3) 150px,
               rgba(199, 121, 208, .3) 200px,
                rgba(62, 149, 35, 1) 250px);
 
  height: 350px;
  width: 350px;
  border: 1px #171412 solid;
}
.outer4 {
  background-image: repeating-linear-gradient(190deg, rgba(252, 92, 125, .3) 40px,
   rgba(51, 108, 164, 1) 80px,
    rgba(254, 172, 94, .2) 120px,
     rgba(199, 121, 208, .2)160px,
      rgba(75, 192, 200, .3) 200px),
       repeating-linear-gradient(-190deg, rgba(252, 92, 125, .2) 30px,
        rgba(51, 108, 164, 1)60px,
         rgba(254, 172, 94, .2) 90px,
          rgba(199, 121, 208, .2) 120px,
           rgba(75, 192, 200, .3) 150px),
            repeating-linear-gradient(23deg, rgba(252, 92, 125, .3) 50px,
            rgba(51, 108, 164, 1) 100px,
              rgba(254, 172, 94, .3) 150px,
               rgba(199, 121, 208, .3) 200px,
                rgba(75, 192, 200, .3) 250px);
 
  height: 350px;
  width: 350px;
  border: 1px #171412 solid;
}
.outer5 {
  background-image: repeating-linear-gradient(190deg, rgba(252, 92, 125, .3) 40px,
    rgba(106, 130, 251, .2)80px,
    rgba(254, 172, 94, .2) 120px,
     rgba(172, 59, 97, 1)160px,
      rgba(75, 192, 200, .3) 200px),
       repeating-linear-gradient(-190deg, rgba(252, 92, 125, .2) 30px,
         rgba(106, 130, 251, .2) 60px,
         rgba(254, 172, 94, .2) 90px,
          rgba(172, 59, 97, 1) 120px,
           rgba(75, 192, 200, .3) 150px),
            repeating-linear-gradient(23deg, rgba(252, 92, 125, .3) 50px,
             rgba(106, 130, 251, .2) 100px,
              rgba(254, 172, 94, .3) 150px,
               rgba(172, 59, 97, 1) 200px,
                rgba(75, 192, 200, .3) 250px);
 
  height: 350px;
  width: 350px;
  border: 1px #171412 solid;
}
.card {
  background-color: #f6f6f6;
  box-shadow: 0 3px 4px rgba(106, 130, 251, .2), 0 0 0 2px rgba(106, 130, 251, .2);
}
.columns.righty {
  margin-left: 5vw;
}
@media (max-width: 1399px){
  .columns.righty {
    margin-left: 0;
  }
}
</style>