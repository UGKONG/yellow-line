<template>
  <main>
    <header>
      <router-link active-class="active" exact to="/">Home</router-link> |
      <router-link active-class="active" to="/About">About</router-link>
    </header>
    <router-view />
  </main>
</template>

<script>
export default {
  
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
  transform: translate(-50%, -80%);

  header {
    margin-bottom: 150px;

    a {
      color: var(--whiteGray);
      font-weight: 500;
      &.active {
        color: var(--green);
      }
    }
  }
}
</style>