<template>
  <section>
    <article v-for="item in dir" :key="item" :class="item">
      <Light
        v-for="num in nums" 
        :key="num"
        :class="item"
        :className="item"
        :x="x" :y="y"
        :windowX="windowX"
        :windowY="windowY"
      />
    </article>
  </section>
</template>

<script>
import Light from '@/Components/Light';
export default {
  components: { Light },
  props: {
    windowX: Number,
    windowY: Number,
    x: Number,
    y: Number,
  },
  data: () => ({
    nums: 7,
    dir: ['top','left','right','bottom']
  }),
}
</script>

<style lang="scss" scoped>
@import '@index.scss';
$w: 100%;
$h: 100px;
leftTop { top: 0; left: 0; align-items: flex-start; }
rightBottom { bottom: 0; right: 0; align-items: flex-end; }
article {
  @include flex-between();
  position: fixed;
  &.top, &.bottom {
    width: $w; height: $h;
    padding: 0 $h; flex-flow: row;
  }
  &.left, &.right {
    width: $h; height: $w;
    padding: $h 0; flex-flow: column;
  }
  &.top, &.left {@extend leftTop;}
  &.right, &.bottom {@extend rightBottom;}
}
</style>