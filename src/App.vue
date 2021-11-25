<template>
  <main>
    <Header />
    <v-icon>mdi-bullhorn-variant-outline</v-icon>
    <router-view />
  </main>
</template>

<script>
import Header from './components/Header';
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  header {
    margin-bottom: 50px;

    a {
      color: #bbb;
      font-weight: 500;
      &.active {
        color: var(--green);
      }
    }

    span {
      display: inline-block;
      margin: 0 10px;
      color: #aaa;
    }
  }
}
</style>