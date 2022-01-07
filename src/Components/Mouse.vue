<template>
  <div wrap>
    <div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@index.scss';

div[wrap] {
  position: fixed;
  & > div {
    @include wrap();
    @include flex-center();
    position: relative;
    & > span {
      width: 100px;
      height: 100px;
      position: absolute;
      top: 50%;
      left: 50%;
      background: rgb(255,255,0);
      background: radial-gradient(circle, #ffff00 -34%, #ffffff00 50%);
      
      &:nth-of-type(1) {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      &:nth-of-type(2) {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:nth-of-type(3) {
        transform: translate(-50%, -50%) rotate(90deg);
      }
      &:nth-of-type(4) {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
}
</style>