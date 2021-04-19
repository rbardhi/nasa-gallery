<template>
  <div id="app">
    <div>
      <h2>
        Mars Rover Photos
      </h2>
    </div>
    <photos-list />
  </div>
</template>

<script>

import PhotosList from './components/PhotosList';

export default {
  name: 'App',
  components: {
    PhotosList,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
