<template>
  <section>
    <h3>사용 모듈</h3>
    <ul>
      <li v-for="(item, idx) in list" :key="idx" v-text="item" />
    </ul>
  </section>  
</template>

<script>
export default {
  data: () => ({
    list: [
      '@babel/core',
      '@babel/preset-env',
      'babel-loader',
      'css-loader',
      'file-loader',
      'html-loader',
      'html-webpack-plugin',
      'sass',
      'sass-loader',
      'style-loader',
      'vue-loader',
      'vue-template-compiler',
      'webpack',
      'webpack-cli',
      'webpack-dev-server',
      '@mdi/font',
      'axios',
      'vue',
      'vue-router',
      'vuetify',
      'vuex',
    ]
  })
}
</script>

<style lang="scss" scoped>
section {
  font-size: 18px;
  h3 {font-size: 18px; color: #555;margin-bottom: 20px;}
  li {list-style: disc;}
}

</style>