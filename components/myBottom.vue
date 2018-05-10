<template>
  <footer class="footer">
    <div class="columns is-multiline is-mobile is-centered">
      <div class="column is-12">
        <img class="logo" src="" alt="A cat peeking through a capital A.">
        <h5> Amy Storm Kosman creative</h5>
        <hr class='low'>
          <follow-me-bottom/>
          </div>
      <div class="tile is-ancestor">
        <div class="tile is-2">
        </div>
        <div class="tile is-2">
          <div class="level">
            <a class="bottoma" href='' target='blank'>
              <div class="level-left">
                <div class="level-item">
                </div>
                <div class="level-item">
                  <p class="leveled">
                    <b>
                      <i>Address:</i>
                    </b>
                    <br> Mirastraat 13
                    <br> 7521 ZE Enschede NL
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="tile is-vertical is-2">
          <div class="tile">
            <div class="level">
              <a class="bottoma" href="tel:telephonenumber">
                <div class="level-left">
                  <div class="level-item">
                  </div>
                  <div class="level-item">
                    <p class="leveled">
                      <b>
                        <i>Telephone:</i>
                      </b>
                      <br> +31 06-20707292
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="tile">
            <div class="level">
              <a class='bottoma' href="mailto:hello@email.email">
                <div class="level-left">
                  <div class="level-item">
                  </div>
                  <div class="level-item">
                    <p class="leveled">
                      <b>
                        <i>eMail:</i>
                      </b>
                      <br>hello@email.email
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="tile is-vertical is-2">
          <div class="tile">
            <div class="level">
              <a class='bottoma' href='' target='blank'>
                <div class="level-left">
                  <div class="level-item">
                  </div>
                  <div class="level-item">
                    <p class="leveled">
                      <b>
                        <i>KvK
                        </i>
                      </b>
                      <br> 68940394
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="tile">
            <div class="level">
              <a class='bottoma' href='' target='blank'>
                <div class="level-left">
                  <div class="level-item">
                  </div>
                  <div class="level-item">
                    <p class="leveled">
                      <b>
                        <i>VAT
                        </i>
                      </b>
                      <br> NL 451324973B01
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="tile is-2">
          <div class="level">
            <router-link exact to="/info/" class='bottoma'>
              <div class="level-left">
                <div class="level-item">
                </div>
                <div class="level-item">
                  <p class="leveled">
                    <b>
                      <i>Information:
                      </i>
                    </b>
                    <br>Cookies
                    <br>FAQ
                    <br> Payments
                    <br> Privacy
                    <br> Returns
                    <br>Shipping
                    <br> Terms &amp; Conditions
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="tile is-2">
        </div>
      </div>
      <div class="column is-12 is-narrow">
        Created with love
        coffee
        and tea
      </div>
      Copyright &copy; 2017-2018.
    </div>
  </footer>
</template>


<script>
import followMeBottom from '~/components/followMeBottom.vue'

  export default {
    components: {
      followMeBottom
    },
    name: 'myBottom'
  }
</script>

<style scoped>
.footer,
.panel-heading {
  background: linear-gradient(20deg, #413e3c 70%, #fefcfb);
  color: #bab2b5;
  text-align: center;
}
.logo {
  width: 120px;
  display: inline-block;
}
.low {
  margin: 5px 0 20px;
  border: 0;
  height: 10px;
  background: linear-gradient(90deg, #ac3b61, #336ca4, #0d4276, #6c0729);
}
a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background-color 1s ease, transform 1s ease;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1em;
  border-radius: 4px;
  border-bottom: 0;
  color: #bab2b5;
  text-align: center;
  text-decoration: none;
  z-index: 3;
}
a.bottoma:hover {
  color: #d9d5d6;
  background-color: #ac3b61;
}
@media (max-width: 1399px){
p.leveled {
  font-size: 0.75rem;
}
}
@media (min-width: 799px) and (max-width: 1150px){
  .tile.is-ancestor {
  display: block;
  margin-left: 40vw;
}
}
</style>
