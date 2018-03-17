<template>
<div class="page-container">
  <md-app md-mode="reveal">
    <md-app-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">
        <md-icon>assignment_turned_in</md-icon>
        {{ appName }}
      </span>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="menuVisible">
      <md-toolbar md-elevation="0">
        <span class="md-title">Navigation</span>
      </md-toolbar>

      <md-list>
        <md-list-item to="/">
          <md-icon>home</md-icon>
          <span class="md-list-item-text">Home</span>
        </md-list-item>
        <md-divider></md-divider>
        <md-list-item v-for="(quarter, key) in periods" :key="key" :to="quarter.link">
          <md-icon>event</md-icon>
          <span class="md-list-item-text">{{ quarter.title }}</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content class="page-content">
      <router-view></router-view>
    </md-app-content>
  </md-app>
</div>
</template>

<script>
export default {
  name: 'okr-app',
  data: () => ({
    menuVisible: false,
    appName: 'OKRggeddon',
    periods: [
      { key:'1', year: 2018, quarter: 1, title: '2018 Q1', link: '2018-q1' },
      { key:'2', year: 2018, quarter: 2, title: '2018 Q2', link: '2018-q2' },
      { key:'3', year: 2018, quarter: 3, title: '2018 Q3', link: '2018-q3' },
      { key:'4', year: 2018, quarter: 4, title: '2018 Q4', link: '2018-q4' },
    ],
  }),
}
</script>


<style lang="scss" scoped>
  @import "~vue-material/dist/theme/engine"; // Import the theme engine

  @include md-register-theme("default", (
    primary: md-get-palette-color(purple, 800), // The primary color of your application
    accent: md-get-palette-color(pink, A200) // The accent or secondary color
  ));

  @import "~vue-material/dist/theme/all"; // Apply the theme

  .page-content {
    height: 100vh;
  }
</style>

