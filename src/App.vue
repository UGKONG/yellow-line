<template>
  <main :style="{cursor: activeMouse ? 'none' : 'unset'}">
    <span v-if="!activeMouse">마우스를 클릭하여 움직여주세요.</span>
    <Frame :x="mouseX" :y="mouseY" :windowX="windowX" :windowY="windowY" />
    <MouseInfo :x="mouseX" :y="mouseY" />
    <Mouse :style="mouseStyle" />
  </main>
</template>

<script>
import MouseInfo from '@/Components/MouseInfo';
import Mouse from '@/Components/Mouse';
import Frame from '@/Components/Frame';
export default {
  components: {
    MouseInfo,
    Mouse,
    Frame,
  },
  data: () => ({
    mouseX: 0,
    mouseY: 0,
    windowX: 0,
    windowY: 0,
    activeMouse: false,
  }),
  created() {
    this.getBrowserSize();
    window.addEventListener('mousemove', (e) => this.setMousePosition(e));
    window.addEventListener('click', (e) => this.setMousePosition(e));
    window.addEventListener('mousedown', (e) => this.setActiveMouse(true));
    window.addEventListener('mouseup', (e) => this.setActiveMouse(false));
    window.addEventListener('resize', (e) => this.getBrowserSize());
  },
  methods: {
    setMousePosition(e) {
      if (!this.activeMouse) return;
      this.mouseX = e.pageX; this.mouseY = e.pageY;
    },
    setActiveMouse(e) {
      this.activeMouse = e;
    },
    getBrowserSize(e) {
      this.windowX = window.innerWidth;
      this.windowY = window.innerHeight;
    }
  },
  computed: {
    mouseStyle() {
      return { left: this.mouseX + 'px', top: this.mouseY + 'px' }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@index.scss';
main {
  width: 100%;
  height: 100%;
  background-color: #2d2426;

  & > span {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff50;
    font-size: 40px;
    white-space: nowrap;
  }
}
</style>
