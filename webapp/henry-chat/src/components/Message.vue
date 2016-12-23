<template lang="html">
  <li class="message">
    <img class="author-thumbnail" :src="item.icon" :alt="item.name">
    <div class="content">
      <div class="content--header">{{ item.name }}</div>
      <div class="content--text">{{ item.message }}</div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'message',
  props: ['item']
}
</script>

<style lang="scss">
  $img-size: 50px;

  .message {

  }
  .autho-thumbnail, .content {
    display: inline-block;
  }
  .author-thumbnail {
    width: $img-size;
    height: $img-size;
    border-radius: 3px;
  }
  .content {
    vertical-align: top;
    margin-left: 10px;
    max-width: calc(100% - #{$img-size} - 20px);
    .content--header {
      font-weight: bold;
      margin-bottom: 2px;
    }
  }
</style>
