<template>
  <theHeader v-if="home"></theHeader>
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import theHeader from "./components/TheHeader.vue";
export default {
  components: {
    theHeader,
  },
  data() {
    return {
      home: false,
    };
  },
  watch: {
    $route() {
      const user = localStorage.getItem("user-info");
      if (user) {
        this.home = true;
      } else {
        this.home = false;
      }
    },
  },
  name: "App",
};
</script>

<style>
* {
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
  --main-color: #2c3e50;
  --main-color-alpha: #007dfa75;
}
#app {
  color: #2c3e50;
}
body {
  overflow: hidden;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  padding: 0 15px;
}
from.registration img {
  width: 200px;
}
form.registration {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transfrom 0.3s linear;
  flex-direction: column;
  width: 100%;
}
form.registration input,
form.registration button {
  display: block;
  margin: 5px;
  padding: 10px;
  outline: none;
  border: 0.5px solid var(--main-color-alpha);
  font-size: 1rem;
  max-width: 300px;
  width: 100%;
}
form.registration button {
  background-color: var(--main-color);
  cursor: pointer;
  transition: all 0.3s linear;
  color: #fff;
  width: auto;
}
form.registration p {
  overflow: hidden;
  padding: 0;
  margin: 0;
}
form.registration p.done {
  color: var(--main-color);
  font-weight: bold;
}
form.registration p.err {
  color: red;
  font-weight: bold;
}
/* Anitmaions Part */
.slide-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.slide-enter-active {
  transition: all 0.8s ease-out;
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.slide-leave-active {
  transition: all 0.2s ease-out;
}
/* Fade Effect */
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.8s ease-out;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 0.2s ease-out;
}
form.registration .actions {
  display: flex;
  justify-content: space-between;
}
form.registration .actions a {
  text-decoration: none;
  color: #fff;
}
</style>
