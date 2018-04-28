<template>
  <div class="columns downward">
    <div class="column auto">
    </div>
    <div class="column is-one-third">
      <h3 class='is-size-4'>
        Hello
      </h3>
      <h3 class='is-size-4'>
        &amp; Thank you
      </h3>
      <h3 class='is-size-4'>
        for visiting!
      </h3>
    </div>
    <div class="column auto">
    </div>
  </div>
</template>

<script>
export default {
  name: 'littleInfo'
}
</script>
<style scoped>
.downward {
  margin-top: -100px;
}
.is-one-third{
  background-color: #d9d5d6;
  text-align: center;
  margin: 3rem;
}
h3 {
  margin: 10px;
}
@media (max-width: 799px){
  .downward {
    margin-top: -50px;
  }
}
</style>