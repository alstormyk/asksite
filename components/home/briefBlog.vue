<template>
  <section class="section is-large">
    <div class="container">
      <div class="columns is-desktop is-variable is-8">
        <div class="column words">
          <p class="title is-size-3">Visit my blog.
            <br>
            <br>Read my boring stories.
            <br>
            <br>Stay for my fascinating interests.
          </p>
        </div>
        <div class="column">
        </div>
        <div class="column">
          <div class="level">
            <div class="level-item has-text-centered">
              <div class="item">
                <div class="outer">
                  <div class="inner">
                    <img class="upper" src="">
                  </div>
                </div>
                <p class="is-size-4 serif">
                  <br>Just ask Snow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'briefBlog'
}
</script>
<style scoped>
section {
  background-image: linear-gradient(rgba(65, 62, 60, 1), rgba(172, 59, 97, 0.8)),
                  url('');
}
.outer {
  float: right;
  background-image: repeating-linear-gradient(190deg, rgba(172, 59, 97, .4) 40px,
   rgba(106, 130, 251, .2) 80px,
    rgba(254, 172, 94, .2) 120px,
     rgba(199, 121, 208, .2)160px,
      rgba(62, 149, 35, .3) 200px),
       repeating-linear-gradient(-190deg, rgba(172, 59, 97, .4) 30px,
        rgba(106, 130, 251, .3) 60px,
         rgba(254, 172, 94, .2) 90px,
          rgba(199, 121, 208, .2) 120px,
           rgba(62, 149, 35,.3) 150px),
            repeating-linear-gradient(23deg, rgba(172, 59, 97, .4) 50px,
             rgba(106, 130, 251, .3) 100px,
              rgba(254, 172, 94, .3) 150px,
               rgba(199, 121, 208, .3) 200px,
                rgba(62, 149, 35, .4) 250px);
 
  height: 400px;
  width: 400px;
  border: 1px #171412 solid;
  margin: 1rem;
}
.inner {
  margin-left: 25%;
  margin-top: 25%;
}
.upper {
  margin-top: -25px;
  margin-left: -80px;
}
.serif {
    font-family: 'Fertigo', Georgia, Times, serif;
}
p {
  text-align: center;
  background-color: #fefcfb;
  padding: 3rem;
}
.words {
  min-width: 500px;
}
@media (max-width: 799px){
  .words {
  min-width: 300px;
}
  p {
    padding: .5rem;
  }
}
@media (max-width: 1199px){
  .columns {
    display: block;
  }
}
</style>