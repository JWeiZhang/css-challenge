<template>
  <div class="nav">
    <ul>
      <li v-for="route in routes" :key="route.name" @click="redirect(route.name)">
        {{ route.name }}
      </li>
    </ul>
  </div>
  <div class="display">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'

export default defineComponent({
  name: 'App',
  data() {
    return {
      routes: [] as Array<RouteRecordRaw>,
    }
  },
  mounted() {
    this.routes = this.$router.options.routes.slice()
  },
  methods: {
    redirect(name: string) {
      this.$router.push(name)
    },
  },
})
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
