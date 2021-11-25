<template>
  <header>
    <router-link active-class="active" exact to="/">Home</router-link>
    <span>|</span>
    <router-link active-class="active" to="/About">About</router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
</style>