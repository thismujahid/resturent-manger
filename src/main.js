import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./router/index.js";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
const router = createRouter({
    history: createWebHistory(),
    routes,
});
const app = createApp(App);
app.use(router);
app.mount("#app");