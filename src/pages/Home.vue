<template>
  <section>
    <h1><span>Vue App</span>이 준비되었습니다.</h1>
    <article>
      <p>State: {{ number }}</p>
      <v-btn @click="upDownFn(+1)">UP</v-btn>
      <v-btn @click="upDownFn(-1)">DOWN</v-btn>
    </article>
  </section>
</template>

<script>
export default {
  methods: {
    upDownFn (n) {
      this.$store.dispatch('setNumber', this.number + n);
    }
  },
  computed: {
    number() {
      return this.$store.state.number;
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  text-align: center;

  span {
    color: var(--green);
  }
  p {
    padding: 50px 0 20px;
    font-weight: 500;
    font-size: 16px;
  }
  button {
    background-color: var(--green) !important;
    color: #fff !important;
  }
}
</style>