<template>
    <message-area></message-area>
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
html, body {
  width: 100%;
  height: 100%;
}
body {
  margin: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
