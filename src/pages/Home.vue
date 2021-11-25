<template>
  <section>
    <h1><span>Vue App</span>이 준비되었습니다.</h1>
    <article>
      <p>State: {{ number }}</p>
      <button @click="() => $store.dispatch('setNumber', number + 1)">UP</button>
      <button @click="() => $store.dispatch('setNumber', number - 1)">DOWN</button>
    </article>
  </section>
</template>

<script>
export default {
  computed: {
    number() {
      return this.$store.state.number;
    }
  }
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
    background-color: var(--green);
    color: #fff;
    filter: grayscale(.2);

  }
}
</style>