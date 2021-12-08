<template>
  <main>
    <Header />
    <i :class="icon.stroke.v" />
    <router-view />
  </main>
</template>

<script>
import Header from './components/Common/Header';

export default {
  components: {
    Header,
  },
  data: () => ({

  }),
  methods: {

  },
  computed: {
    icon () {
      return this.$store.state.FontAwesome;
    }
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

  @keyframes colorChange {
    0% {color: var(--darkGray)}
    10% {color: var(--red)}
    20% {color: var(--blue)}
    30% {color: var(--green)}
    40% {color: var(--black)}
    50% {color: var(--orange)}
    60% {color: var(--yellow)}
    70% {color: var(--purple)}
    80% {color: var(--pink)}
    90% {color: var(--navy)}
    100%{color: var(--darkGray);}
  }
  i {
    font-size: 40px;
    margin-bottom: 10px;
    transition: .2s;
    animation: colorChange infinite 10s;
  }
}
</style>
