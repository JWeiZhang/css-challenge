<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li v-for="route in routes" @click="redrict(route.name);">
          {{ route.name }}
        </li>
      </ul>
    </div>
    <div class="display">

      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      routes: []
    };
  },
  mounted() {
    this.routes = this.$router.options.routes.slice();
  },
  methods: {
    redrict(name) {
      this.$router.push(name);
    }
  }
};
</script>

<style lang='scss'>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}

.nav {
  flex: 1;
  ul {
    margin: 0;
    width: 50%;
    li {
      text-align: left;
      cursor: pointer;
    }
  }
}

.display {
  flex: 5;
}
</style>
