<template>
  <div>
    <p>X : {{ x }}</p>
    <p>Y : {{ y }}</p>
  </div>
</template>

<script>
export default {
  props: { x: Number, y: Number }
}
</script>

<style lang="scss" scoped>
@import '@index.scss';
div {
  color: #fff;
  padding: 5px;
  user-select: none;
}
</style>