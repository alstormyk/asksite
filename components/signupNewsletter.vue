<template>
  <section class="newsletter">
    <div class="columns is-mobile is-centered">
      <div class="column is-four-fifths-mobile is-three-fifths-tablet">
        <div class="card">
          <div class="card-header">
            <h2 class="title">
              Subscribe to my Newsletter
            </h2>
          </div>
          <div class="card-content">
            <h3 class="subtitle">
              &amp; receive occasional updates
            </h3>
          </div>
          <div class="card-content">
            <div class="content">
              <form name="subscribe" @submit.prevent="validateBeforeSubmit" ref="subscribe" netlify-honeypot="bot-field" method="POST" action="/successnews" netlify>
                <input type="hidden" name="form-name" value="subscribe" />
                <p class="is-hidden">
                  <label>Don’t fill this out:
                    <input name="bot-field">
                  </label>
                </p>
                <div class="field">
                  <label class="label">Name
                  <p class="control">
                    <input name="name" v-model="name" v-validate="'required|alpha_spaces'" :class="{'input': true, 'is-danger': errors.has('name') }"
                      type="text" placeholder="Name">
                    <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
                  </p>
                  </label>
                </div>
                <div class="field">
                  <label class="label">Email
                  <p class="control">
                    <input name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }"
                      type="text" placeholder="Email">
                    <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                  </p>
                  </label>
                </div>
                <div class="field">
                  <div class="control">
                    <label class="checkbox">
                      <input name="subscribe" v-validate="'required'" type="checkbox"> I would like to recieve updates from Amy Storm Kosman creative &amp; subscribe to the Amy Storm Kosman
                      creative newsletter.
                    </label>
                    <span class="help is-danger" v-show="errors.has('subscribe')">{{ errors.first('subscribe') }}</span>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <label class="checkbox">
                      <input name="privacy" v-validate="'required'" type="checkbox"> I have read the
                      <a href="/info/privacy">Privacy Policy</a>. I agree to the terms and understand my rights.
                    </label>
                    <span class="help is-danger" v-show="errors.has('privacy')">{{ errors.first('privacy') }}</span>
                  </div>
                </div>
                <p>
                  <button class="button is-medium is-pink" type="submit" value="submit" :disabled="errors.any()">
                    Send</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VeeValidate from 'vee-validate'

export default {
  name: 'signupNewsletter',
  methods: {
    validateBeforeSubmit: function(event) {
    	var self = this
      this.$validator.validateAll().then(function(result) {
        if (!result) return
        // submit when successful
        self.$refs.subscribe.submit()
      })
    }
  }
}
</script>

<style scoped>
.newsletter {
  margin-bottom: 6vh;
}
.card {
	background-color: #fefcfb;
	box-shadow: none;
	max-width: 100%;
	position: relative;
}
.card-header {
	box-shadow: none;
}
.card-footer {
	border-top: none;
}
.textarea,
.input {
  border: 2px solid rgb(217, 213, 214);
  box-shadow: inset 0 1px 2px rgba(217, 213, 314, 0.1);
  background-color: #fefcfb;
}
.is-pink {
  background-color: #ac3b61;
  color: #fefcfb;
}
a {
  color: #171412;
  text-decoration-line: underline;
  text-decoration-color: #ac3b61;
  font-style: italic;
}
.is-danger {
  background-color: #f2f1f1;
  color: #c6455c;
}
</style>