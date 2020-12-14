<template>
  <div id="app">
   <Auth :loginFunction="login" :signupFunction="signup" />
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
import Auth from './components/auth/Auth.vue';
export default {
  name: 'App',
  components: {
    Auth
  },
  data() {
    return {
      test: 'test'
    }
  },
  methods: {
    closeModal() {
      this.$refs.test.close();
    },
    login() {},
    signup() {}
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: grey;
  height: 50vh;
  width: 50vw;
  margin: 0 auto;
  display: flex;
  position: absolute;
}

.btn {
  padding: 1rem;
  background-color: blue;

  &__selected {
    background-color: red;
  }
}

</style>
