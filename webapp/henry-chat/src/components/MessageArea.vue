<template lang="html">
  <div class="message-area-wrapper">
    <div class="message-area-container">
      <div class="message-area">
        <hc-header></hc-header>
        <section id="message-section" class="message-section">
          <ul id="message-list" class="message-list">
            <message v-for="item in messages" :item="item"
              v-bind:class="{ 'user-message': item.name !== 'Henry', 'henry-message': item.name === 'Henry', 'show': item.name != '' }"></message>
          </ul>
          <span class="typing-indicator"
            v-bind:class="{ 'show': this.henryIsTyping }">Henry is typing...</span>
        </section>
        <input id="text-input" type="text" name="" value="" placeholder="Let's chat..."
          v-model="message"
          v-on:keyup.enter="sendMessage()">
      </div>
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
      message: '',
      messages: this.$store.state.messages,
      messageList: null,
      henryIsTyping: this.$store.henryIsTyping
    }
  },
  methods: {
    sendMessage: function () {
      const message = this.message
      if (!message) {
        return
      }
      this.$store.dispatch('SEND_MESSAGE', { message })

      // clear text field
      this.message = ''
    }
  },
  watch: {
    messages: function () {
      // scroll down
      setTimeout(() => {
        this.messageList.scrollTop = this.messageList.scrollHeight + 200
      }, 200)
    }
  },
  mounted () {
    this.messageList = document.getElementById('message-section')
    this.$store.dispatch('FETCH_RESPONSE', { message: '' })
  }
}
</script>

<style lang="scss">
@import '../app';

$message-indent: 100px;
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
  //overflow: hidden;
  width: inherit;
  text-align: center;
  bottom: $message-area-bottom-padding;
}

.message-area {
  z-index: 3;
  display: inline-block;
  margin: 0 auto;
  max-width: $message-area-max-width;

  .message-section {
    position: relative;
    overflow-x: hidden;
    height: $message-area-max-height;
    border: 1px solid $theme-color;
  }
  .typing-indicator {
    display: none;
    position: absolute;
    bottom: 10px;
    left: $message-h-margin;

    &.show {
      display: initial;
    }
  }
  .message-list {
    bottom: 0px;
    width: $message-area-max-width;
    height: $message-area-max-height;
    padding: 0px;
    margin: 0px;
    text-align: left;
    list-style-type: none;
    display: table-cell;
    vertical-align: bottom;

    li {
      margin-left: $message-h-margin;
      margin-right: $message-h-margin;
      margin-bottom: 10px;
      transition: visibility 0s, opacity 0.5s linear;
    }
    .henry-message {
      color: $theme-color;
    }
    .user-message {
      margin-left: $message-indent;
    }
  }
}

#text-input {
  font-size: inherit;
  vertical-align: bottom;
  border-top: 0px solid;
  border-bottom: 1px solid $theme-color;
  border-left: 1px solid $theme-color;
  border-right: 1px solid $theme-color;
  padding: $input-vert-padding $input-horz-padding;
  width: calc(100% - #{$input-horz-padding} - #{$input-horz-padding} - 2px);
}
</style>
