<template lang="html">
  <div class="message-area-container">
    <div class="message-area">
      <ul class="message-list">
        <message v-for="item in messages" :item="item"></message>
      </ul>
      <input id="text-input" type="text" name="" value="" placeholder="Let's chat...">
    </div>
  </div>
</template>

<script>
import Message from './Message.vue'

export default {
  name: 'message-area',
  components: {
    Message
  },
  data () {
    return {
      messages: [{
        icon: 'https://i.ytimg.com/vi/zJqLH8EA2rM/hqdefault.jpg',
        name: 'Henry',
        message: 'What\'s up world! It\'s henry! Let me help you with all your car troubles. I am excellent at finding awesome cars for people!!'
      }, {
        icon: 'https://i.ytimg.com/vi/ulysL4hs6_I/hqdefault.jpg',
        name: 'Jenny',
        message: 'Hey, can I has a car please boss?'
      }, {
        icon: 'http://www.w3schools.com/images/colorpicker.gif',
        name: 'Ben',
        message: 'Hey everyone, i\'m Ben'
      }, {
        icon: 'https://i.ytimg.com/vi/zJqLH8EA2rM/hqdefault.jpg',
        name: 'Henry',
        message: 'What\'s up world! It\'s henry! Let me help you with all your car troubles. I am excellent at finding awesome cars for people!!'
      }, {
        icon: 'https://i.ytimg.com/vi/ulysL4hs6_I/hqdefault.jpg',
        name: 'Jenny',
        message: 'Hey, can I has a car please boss?'
      }, {
        icon: 'http://www.w3schools.com/images/colorpicker.gif',
        name: 'Ben',
        message: 'Hey everyone, i\'m Ben'
      }, {
        icon: 'https://i.ytimg.com/vi/zJqLH8EA2rM/hqdefault.jpg',
        name: 'Henry',
        message: 'What\'s up world! It\'s henry! Let me help you with all your car troubles. I am excellent at finding awesome cars for people!!'
      }, {
        icon: 'https://i.ytimg.com/vi/ulysL4hs6_I/hqdefault.jpg',
        name: 'Jenny',
        message: 'Hey, can I has a car please boss?'
      }, {
        icon: 'http://www.w3schools.com/images/colorpicker.gif',
        name: 'Ben',
        message: 'Hey everyone, i\'m Ben'
      }]
    }
  }
}
</script>

<style lang="scss">
@import '../app';

$indent: 70px;
$message-area-max-width: 400px;
$message-h-margin: 10px;
$input-horz-padding: 10px;
$input-vert-padding: 10px;

.message-area-container {
  display: table-cell;
  width: 100vw;
  height: 100vh;
  vertical-align: bottom;
  text-align: center;
}
.message-area {
  text-align: left;
  display: inline-block;
  border: 1px solid $theme-color;
  max-width: $message-area-max-width;
  .message-list {
    overflow-y: scroll;
  }
}

ul {
  padding: 0px;
  margin: 0px;
  list-style-type: none;

  li {
    margin-left: $message-h-margin;
    margin-right: $message-h-margin;
    margin-bottom: 10px;
  }
  li:nth-child(even) {
    margin-left: $indent;
  }

  @media (max-width: calc($message-area-max-width + 50px)) {
    height: 800px;
  }
  @media (min-width: $message-area-max-width) {
    height: 500px;
  }
}

#text-input {
  font-size: inherit;
  vertical-align: bottom;
  border-top: 1px solid $theme-color;
  border-bottom: 0px solid;
  border-left: 0px solid;
  border-right: 0px solid;
  padding: $input-vert-padding $input-horz-padding;
  width: calc(100% - #{$input-horz-padding} - #{$input-horz-padding});
}
</style>
