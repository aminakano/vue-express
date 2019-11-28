<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.toolbar__title {
  color: white;
}
.input-group--text-field input {
  border-bottom: 1px solid darkgray;
}
.btn__content::before {
  color: white;
}
</style>
