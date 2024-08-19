<template>
  <div id="golf-app">
  <header>
      <AppHeader/>
    </header>
    <main>
      <router-view />
    </main>
    
    <AppFooter/>
  </div>
    
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter
}
};

</script>

<style scoped>
  main {
    flex-grow: 1;
  }

  #golf-app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>