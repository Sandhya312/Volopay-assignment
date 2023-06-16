<template>
  <div id="app">
    <!-- <MainHeader/> -->
    <div class="nav-bar">
      <nav>
      <router-link to="/your">Your</router-link> 
      <router-link to="/">All</router-link> 
      <router-link to="/blocked">Blocked</router-link> 
     
    </nav>
    <hr>
    </div>
    <router-view/>
  </div>
</template>

 <script>

// import MainHeader from './components/MainHeader.vue'
 export default {
  name:'App',
  components:{
    // MainHeader,
  }
 }
 </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  text-decoration: none !important;
}
.nav-bar{
  margin: 20px;
}
hr{
  margin:0 !important;
}

nav {
  display: flex;
  padding-top: 30px;
}

nav a {
  font-weight: bold;
  color: #9c9c9c;
  margin-right: 10px;
  padding:0 10px;
}

nav a.router-link-exact-active {
  color: black;
  text-decoration: underline;
}
</style>
