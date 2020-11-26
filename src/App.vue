<template>
  <div id="app">
   <TextAreaToggleInput placeholder="Title" v-bind:value.sync="test"/>
  </div>
</template>

<script>
import TextAreaToggleInput from './components/input/toggle-inputs/TextAreaToggleInput.vue';
export default {
  name: 'App',
  components: {
    TextAreaToggleInput
  },
  data() {
    return {
      test: 'test'
    }
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

h1 {
  color: red;
}

.content {
  background-color: white;
  padding: 5rem;
}

.test {
  &_trigger {
    background-color: teal;
    margin-right: 1rem;
  }
  &_content {
    background-color: red;
    height: 20vh;
    width: 10rem;
  }
}

</style>
