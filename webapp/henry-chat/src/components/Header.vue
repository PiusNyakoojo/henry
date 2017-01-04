<template lang="html">
  <header class="header">
    <div class="header-content">
      <div class="online-status-wrapper">
        <div class="online-status"></div>
      </div>
      <h2 class="title">{{ title }}</h2>
      <button class="expand-btn" type="button" name="expand">Hello</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'hc-header',
  data () {
    return {
      title: 'Henry'
    }
  }
}
</script>

<style lang="scss">
@import '../app';

$online-status-size: 10px;
$online-status-color: green;
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
  .expand-btn {
    position: absolute;
    margin-top: 8px;
    right: $header-content-padding;
  }
}
</style>
