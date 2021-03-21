<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/cats">cats</router-link> | 
    <router-link to="/dogs">dogs</router-link>

  </div>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e9ecef;
  min-height: 100vh;
}
body {
    margin: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
