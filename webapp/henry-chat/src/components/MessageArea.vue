<template lang="html">
  <div class="message-area-wrapper">
    <div class="message-area-container">

      <hc-header></hc-header>
      <section class="message-area">
        <ul class="message-list">
          <message v-for="item in messages" :item="item"></message>
        </ul>
        <input id="text-input" type="text" name="" value="" placeholder="Let's chat...">
      </section>
    </div>
  </div>
</template>

<script>
import Message from './Message.vue'
import HcHeader from './Header.vue'

export default {
  name: 'message-area',
  components: {
    Message,
    HcHeader
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

$message-indent: 70px;
$message-h-margin: 10px;
$input-horz-padding: 10px;
$input-vert-padding: 10px;

$message-area-bottom-padding: 60px;

.message-area-wrapper {
  position: relative;
  width: inherit;
  height: inherit;
}

.message-area-container {
  position: absolute;
  width: inherit;
  text-align: center;
  bottom: $message-area-bottom-padding;
}

.message-area {
  display: inline-block;
  margin: 0 auto;
  border: 1px solid $theme-color;
  max-width: $message-area-max-width;

  .message-list {
    overflow-y: scroll;
    padding: 0px;
    margin: 0px;
    text-align: left;
    list-style-type: none;
    max-height: $message-area-max-height;

    li {
      margin-left: $message-h-margin;
      margin-right: $message-h-margin;
      margin-bottom: 10px;
    }
    .indented {
      margin-left: $message-indent;
    }
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
