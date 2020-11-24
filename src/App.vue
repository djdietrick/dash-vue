<template>
  <div id="app">
    <div class="test_trigger">NO</div>
    <div class="test_trigger">NO</div>
    <Popover>
      <template v-slot:content>
        <div class="test_content">
          TEST CONTENT
        </div>
      </template>
      <template v-slot:trigger>
        <div class="test_trigger">
          TRIGGER
        </div>
      </template>

    </Popover>
  </div>
</template>

<script>
import Popover from './components/Popover.vue';
export default {
  name: 'App',
  components: {
    Popover
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
