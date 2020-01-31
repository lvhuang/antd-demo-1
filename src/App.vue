<template>
  <div id="app">
    <ControlPanel></ControlPanel>
    <a-button type="primary">Button></a-button>
  </div>
</template>

<script>
import ControlPanel from './components/ControlPanel.vue'

export default {
  name: 'app',
  components: {
    ControlPanel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
