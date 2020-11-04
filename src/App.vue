<template>
  <div id="app">
    <DashModal>
      <template v-slot:trigger>
        <div>click me</div>
      </template>
      <template v-slot:content>
        <div class="content">TEST</div>
      </template>
    </DashModal>
  </div>
</template>

<script>
import DashModal from './components/Modal.vue'
export default {
  name: 'App',
  components: {
    DashModal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  background-color: white;
  padding: 5rem;
}
</style>
