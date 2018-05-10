<template>
  <section class="timey">
    <div class="container">
      <h5 class="title is-size-2">
        Timeline
        <hr>
      </h5>
    </div>
    <div class="timeline is-centered">
      <header class="timeline-header">
        <span class="tag is-medium is-pink">2018</span>
      </header>
      <div class="timeline-item">
        <div class="timeline-content">
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker blue">
        </div>
        <div class="timeline-content">
          <p class="heading">January 2018</p>
          <p>askcreative.space goes live!</p>
        </div>
        <span class="tag blue">
        </span>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker blue">
        </div>
        <span class="tag blue">
        </span>
        <div class="timeline-content">
          <p class="heading">August 2017</p>
          <p>Stuff</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker blue">
        </div>
        <div class="timeline-content">
          <p class="heading">16 June 2017</p>
          <p>Stuff.</p>
        </div>
        <span class="tag blue">
        </span>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker blue">
        </div>
        <span class="tag blue">
        </span>
        <div class="timeline-content">
          <p class="heading">2016</p>
          <p>Snow</p>
          <img src="">
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker blue">
        </div>
        <div class="timeline-content">
          <p class="heading">2015</p>
          <p>Work</p>
        </div>
        <span class="tag blue">
        </span>
      </div>
      <div class="timeline-item">
      </div>
      <header class="timeline-header">
        <span class="tag is-medium is-pink">Personal</span>
      </header>
      <div class="timeline-item">
      </div>
      <div class="timeline-item">
        <div class="timeline-marker blue">
        </div>
        <span class="tag blue">
        </span>
        <div class="timeline-content">
          <p class="heading">2014</p>
          <p>Sun
          </p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker blue">
        </div>
        <div class="timeline-content">
          <p class="heading">2007</p>
          <p>Work.</p>
        </div>
        <span class="tag blue">
        </span>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker blue">
        </div>
        <span class="tag blue">
        </span>
        <div class="timeline-content">
          <p class="heading">2006</p>
          <p>Work</p>
          <p>Stuff</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker blue">
        </div>
        <div class="timeline-content">
          <p class="heading">2003</p>
          <p>Ash</p>
          <img src="">
        </div>
        <span class="tag blue">
        </span>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker blue">
        </div>
        <span class="tag blue">
        </span>
        <div class="timeline-content">
          <p class="heading">2001</p>
          <p>Work</p>
          <p>Maps</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker blue">
        </div>
        <div class="timeline-content">
          <p class="heading">1997</p>
          <p>Stuff</p>
        </div>
        <span class="tag blue">
        </span>
      </div>
      <header class="timeline-header blue">
        <span class="tag date">1995 - 2007</span>
      </header>
      <div class="timeline-item">
        <div class="timeline-marker blue">
        </div>
        <div class="timeline-content">
          <p class="heading">Several miscellaneous jobs</p>
        </div>
      </div>
      <div class="timeline-item">
      </div>
      <header class="timeline-header">
        <span class="tag is-medium is-pink">Adultishhood</span>
        <div class="timeline-marker">
        </div>
      </header>
      <div class="timeline-item">
      </div>
      <header class="timeline-header">
        <span class="tag">
        </span>
      </header>
      <div class="timeline-item">
      </div>
      <div class="timeline-item">
        <div class="timeline-marker blue">
        </div>
        <span class="tag blue">
        </span>
        <div class="timeline-content">
          <p class="heading">1995</p>
          <p>High School graduation.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker blue">
        </div>

        <div class="timeline-content">
          <p class="heading">1991</p>
          <p>8th grade graduation.</p>
        </div>
        <span class="tag blue">
        </span>
      </div>
      <div class="timeline-item">
        <div class="timeline-content">
        </div>
      </div>
      <header class="timeline-header">
        <span class="tag date">Baby</span>
      </header>
      <div class="timeline-item">
        <div class="timeline-content">
        </div>
      </div>
      <div class="timeline-item">
      </div>
      <header class="timeline-header">
        <span class="tag">
        </span>
      </header>
      <div class="timeline-item">
      </div>
      <header class="timeline-header">
        <span class="tag is-medium is-pink">7 January 1977</span>
      </header>
    </div>
  </section>
</template>


<script>
export default {
  name: 'mainTimeline'
}
</script>

<style scoped>
.timey {
  margin: 0 5vh;
}
.heading {
  text-transform: capitalize;
}
.title {
  text-align: center;
}
.timeline {
  margin: 2vh 0;
  color: #413e3c;
}
.tag.is-medium.is-pink {
  background-color: #ac3b61;
  color: #fefcfb;
}
.tag {
  background-color: transparent;
}
.timeline-marker.blue {
  background-color: #336ca4;
}
.tag.blue {
  height: 50px;
  width: 50px;
  left: -25px;
  background-color: #336ca4;
}
.timeline-header.blue {
  background-color: #336ca4;
  color: #fefcfb;
}
.tag.date {
  background-color: #336ca4;
  color: #fefcfb;
}
</style>