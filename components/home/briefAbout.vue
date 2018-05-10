<template>
  <section class="section is-large">
    <div class="columns is-desktop">
      <div class="column slimmed">
        <div class="outer">
          <div class="inner">
            <img class="upper">
          </div>
        </div>
      </div>
      <div class="column shorten">
 
          <div class="card">
            <blockquote>
            <p class="title serif">
              "Reduce, Reuse, Recycle, Research, Repurpose, Repair &amp; Rent;
              <br>I can help you with a few of those
            </p>
            </blockquote>
            <br>
            <p class="subtitle">
              The 7 R's of Fashion
            </p>
        </div>
      </div>
      <div class="column">
        <p class="title is-size-2 serif">Amy in brief.</p>
        <p>
          I am the founder, owner, operator of Amy Storm Kosman creative.
          <br> I'm from California and currently living in the Netherlands.
          <br>I am inspired by the things I miss,
          <br>family, warm weather, and mountains.
          <br>I am inspired by the things around me;
          <br>nothing compares to the Dutch sky.
        </p>
        <br>
        <p class="title is-size-3 serif">The business in brief.</p>
        <p>
          Amy Storm Kosman creative is an upcyle brand.
          <br>All fabrics are vintage.
          <br>All items are made from remnants, leftover, offcut, end of line, and dead fabrics.
          <br>Items from used fabrics are clearly marked.
        </p>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'briefAbout'
}
</script>
<style scoped>
.outer {
  float: right;
  background-image: repeating-linear-gradient(190deg, rgba(172, 59, 97, .4) 40px,
   rgba(106, 130, 251, .2) 80px,
    rgba(254, 172, 94, .2) 120px,
     rgba(199, 121, 208, .2)160px,
      rgba(75, 192, 200, .2) 200px),
       repeating-linear-gradient(-190deg, rgba(172, 59, 97, .4) 30px,
        rgba(106, 130, 251, .3) 60px, rgba(254, 172, 94, .2) 90px,
         rgba(199, 121, 208, .2) 120px, rgba(75, 192, 200, .2) 150px),
          repeating-linear-gradient(23deg, rgba(172, 59, 97, .4) 50px,
           rgba(106, 130, 251, .3) 100px, rgba(254, 172, 94, 3) 150px,
            rgba(199, 121, 208, .3) 200px, rgba(75, 192, 200,.3) 250px);
  height: 400px;
  width: 400px;
  border: 1px #171412 solid;
}
.inner {
  height: 300px;
  width: 300px;
  background: #171412;
  -moz-border-radius: 300px;
  -webkit-border-radius: 300px;
  border-radius: 300px;
  margin-left: 20%;
  margin-top: 20%;
}
.upper {
  margin-top: -25px;
  margin-left: -25px;
}
.lower {
    margin-top: 50px;
    max-width: 500px;
}
.serif {
    font-family: 'Fertigo', Georgia, Times, serif;
}
.card {
	background-color: #f6f6f6;
	box-shadow: 0 3px 4px rgba(106, 130, 251, .2), 0 0 0 2px rgba(106, 130, 251, .2);
}

.column.shorten {
  max-width: 500px;
  margin-top: 50px;
}
.column {
  margin: 1rem;
}
@media (max-width: 799px){
  .outer {
    float: none;
  }
  .column {
    margin: 0 0 10vw 0;
  }
  .column.slimmed {
    padding: 0;
    margin: 0;
  }
  .card {
	max-width: 75vw;
}
}
@media (max-width: 1199px){
  .columns {
    display: block;
    margin-left: 10vw;
  }
  .outer {
    float: none;
  }
  .column.slimmed {
    padding: 0;
    margin: 0;
  }
}

</style>