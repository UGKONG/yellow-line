<template>
  <section>
    <table>
      <thead>
        <tr><th>사용 모듈</th></tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in list" :key="idx">
          <td v-text="item" />
        </tr>
      </tbody>
    </table>
  </section>  
</template>

<script>
export default {
  data: () => ({
    list: [
      'vue',
      'vuex',
      'vue-router',
      'babel',
      'loader (babel, css, sass, file, html, style, vue)',
      'sass',
      'webpack',
      'webpack-dev-server',
      'axios',
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>