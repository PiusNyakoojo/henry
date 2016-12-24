<template lang="html">
  <div class="header">
    <div class="header-content">
      <div style="min-width: 5px; width: auto !important; width: 15px;">
        <div class="online-status"></div>
      </div>
      <h2 class="title">{{ title }}</h2>
      <button class="expand-btn" type="button" name="expand">Hello</button>
    </div>
  </div>
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

$header-height: 50px;
$header-border-radius: 10px;
$online-status-size: 10px;
$online-status-color: green;

.header {
  position: relative;
  display: inline-block;
  width: $message-area-max-width;
  height: $header-height;
  background-color: $theme-color;
  border-radius: $header-border-radius $header-border-radius 0px 0px;
}
.header-content {
  display: inline-block;
  white-space: nowrap;
  width: 100%;

  * {
    display: inline-block;
    vertical-align: middle;
  }
  .online-status {
    float: left;
    white-space: normal;
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
    vertical-align: middle;
  }
}
</style>
