<template lang="html">
  <header class="header">
    <div class="header-content">
      <div class="online-status-wrapper">
        <div class="online-status"></div>
      </div>
      <h2 class="title">{{ title }}</h2>
      <button class="chat-toggle" type="button" name="expand"
        v-bind:class="{ 'expand': this.expanded }"
        v-on:click="toggleChat()"></button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'hc-header',
  data () {
    return {
      title: 'Henry',
      expanded: true
    }
  },
  methods: {
    toggleChat: function () {
      this.expanded = !this.expanded
    }
  }
}
</script>

<style lang="scss">
@import '../app';

$online-status-size: 15px;
$online-status-color: #47e47e;
$header-content-padding: 15px;

.header {
  position: relative;
  display: inline-block;
  width: $message-area-max-width;
  background-color: $theme-color;
  border-radius: $header-border-radius $header-border-radius 0px 0px;
}

.header-content {
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;

  * {
    display: inline-block;
    vertical-align: bottom;
  }

  .online-status-wrapper {
    position: absolute;
    left: $header-content-padding;
    display: inline-block;
  }
  .online-status {
    width: $online-status-size;
    height: $online-status-size;
    border-radius: $online-status-size;
    background-color: $online-status-color;
  }

  .title {
    margin: 0px;
    padding: 0px;
  }
  .chat-toggle {
    position: absolute;
    margin-top: 8px;
    right: $header-content-padding;
    width: 20px;
    height: 20px;
    border: 0;
    background: none;
    cursor: pointer;
    &:before,
    &:after {
      content: "";
      position: absolute;
      background-color: white;
      border-radius: 3px;
      transition: transform 0.15s ease;
    }
    /* Vertical line */
    &:before {
      top: 0;
      left: 50%;
      width: 4px;
      height: 100%;
      margin-left: -2px;
    }
    /* horizontal line */
    &:after {
      top: 50%;
      left: 0;
      width: 100%;
      height: 4px;
      margin-top: -2px;
    }
    &:focus, &:active {
    }
    &.expand {
      &:before {
        transform: rotate(90deg);
      }
      &:after {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
