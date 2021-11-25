<template>
  <section>
    <ul>
      <li v-for="(item, idx) in list" :key="idx">
        <a :href="item.link" v-text="item.name" target="_blank" title="공식문서 바로가기" />
      </li>
    </ul>
  </section>  
</template>

<script>
export default {
  data: () => ({
    list: [
      {link: 'https://kr.vuejs.org/v2/guide/index.html#%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0', name: 'Vue'},
      {link: 'https://vuex.vuejs.org/kr/guide/', name: 'Vuex'},
      {link: 'https://router.vuejs.org/kr/installation.html', name: 'Vue-Router'},
      {link: 'https://vuetifyjs.com/en/getting-started/installation/', name: 'Vuetify'},
      {link: 'https://webpack.js.org/', name: 'Webpack'},
    ]
  })
}
</script>

<style lang="scss" scoped>
section {
  font-size: 18px;
  li {
    list-style: disc;
    a {
      color: var(--darkGray);
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

</style>