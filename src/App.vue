<template>
  <main>
    <Header />
    <v-icon>mdi-bullhorn-variant-outline</v-icon>
    <router-view />
  </main>
</template>

<script>
import Header from './components/Common/Header';
import { useAlert } from '../plugins/hook';

export default {
  components: {
    Header,
  },
  created () {
    useAlert.success('Vue', 'Vue App이 준비되었습니다.');
  },
  methods: {
    
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