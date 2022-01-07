<template>
  <div wrap>
    <p ref="box" />
    <svg :viewBox="viewBox">
      <line :x1="x1" :y1="y1" :x2="x" :y2="y" stroke="#ffff0050" stroke-width="5" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    x: Number,
    y: Number,
    windowX: Number,
    windowY: Number,
    className: String,
  },
  data: () => ({
    poX: 0,
    poY: 0,
  }),
  mounted() {
    this.poX = this.$refs.box.offsetLeft;
    this.poY = this.$refs.box.offsetTop;
  },
  computed: {
    viewBox() { return '0 0 ' + this.windowX + ' ' + this.windowY; },
    x1() { 
      return this.className == 'left' ? -10 : 
      this.className == 'right' ? this.windowX + 10 :
      this.className == 'top' || this.className == 'bottom' ? 
      this.windowX - this.poX - 2.5 : this.windowX - this.poX; 
    },
    y1() { 
      return this.className == 'top' ? -10 : 
      this.className == 'bottom' ? this.windowY + 10 :
      this.className == 'left' || this.className == 'right' ?
      this.windowY - this.poY - 2.5 : this.windowY - this.poY;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@index.scss';
$s: 0px;
$w: 5px;
$h: 100%;

[wrap] {
  width: $s;
  height: $s;
  /* border: 1px solid red; */
  @include flex-center();

  & > p { background-color: #ffff0050; }
  &.left, &.right { p { width: $h; height: $w; } }
  &.top, &.bottom { p { width: $w; height: $h; } }

  & > svg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>