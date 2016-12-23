<template>
  <div id="app">
    <message-area></message-area>
  </div>
</template>

<script>
import MessageArea from './components/MessageArea'

export default {
  name: 'app',
  components: {
    MessageArea
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
