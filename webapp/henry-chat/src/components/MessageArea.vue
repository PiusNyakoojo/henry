<template lang="html">
  <div class="message-area-wrapper">
    <div class="message-area-container">
      <div class="message-area">
        <hc-header></hc-header>
        <section class="message-section">
          <ul id="message-list" class="message-list">
            <message v-for="item in messages" :item="item" v-bind:class="{ 'user-message': item.name !== 'Henry', 'henry-message': item.name === 'Henry' }"></message>
          </ul>
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
      messageList: null
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
      /*
      setTimeout(() => {
        this.messageList.scrollTop = this.messageList.scrollHeight
      }, 100)
      */
    }
  },
  mounted () {
    this.messageList = document.getElementById('message-list')
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
  border: 1px solid $theme-color;
  border-radius: $header-border-radius $header-border-radius 0px 0px;
  max-width: $message-area-max-width;

  .message-section {
    overflow-y: scroll;
    height: $message-area-max-height;
  }

  .message-list {
    z-index: 2;
    position: absolute;
    bottom: 40px;
    width: $message-area-max-width;
    padding: 0px;
    margin: 0px;
    text-align: left;
    list-style-type: none;

    li {
      margin-left: $message-h-margin;
      margin-right: $message-h-margin;
      margin-bottom: 10px;
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
  border-top: 1px solid $theme-color;
  border-bottom: 0px solid;
  border-left: 0px solid;
  border-right: 0px solid;
  padding: $input-vert-padding $input-horz-padding;
  width: calc(100% - #{$input-horz-padding} - #{$input-horz-padding});
}
</style>
