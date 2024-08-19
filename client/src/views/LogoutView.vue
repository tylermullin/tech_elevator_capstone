<template>
  <div>
  <h1>Logout</h1>
  <p>You are now logged out.
  <a href="/">Return to Home Page</a>
</p>
</div>
</template>

<script>
export default {
  created() {
    this.$store.commit("LOGOUT");
  }
};
</script>

<style scoped>
div {
  margin-bottom: 100vh;
  margin-left: 40px;
}

h1 {
  font-size: 30px;
}
</style>
