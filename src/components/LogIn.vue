<template>
  <div class="container">
    <form class="registration" @submit.prevent="onLogin">
      <img src="../assets/logo.png" alt="Logo" />
      <h1>Log in</h1>
      <input type="email" v-model.trim="email" placeholder="username/email" />
      <input type="password" v-model.trim="password" placeholder="Password" />
      <transition-group name="fade" mode="out-in">
        <p class="done" v-if="logInDone">{{ logInDone }}</p>
        <p v-if="err" class="err">{{ err }}</p>
      </transition-group>
      <div class="actions">
        <button type="submit">Login</button>
        <router-link to="/sign-up">
          <button>Sign Up?</button>
        </router-link>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      logInDone: "",
      err: "",
    };
  },
  mounted() {
    if (localStorage.getItem("user-info")) {
      this.$router.push({ name: "Home" });
    }
  },
  methods: {
    async onLogin() {
      if (this.email == "" || this.password == "") {
        this.err = "Please Enter Your Login Data Frist";
        setTimeout(() => {
          this.err = "";
        }, 6000);
        return;
      }
      const user = await axios.get(
        `/users?email=${this.email}&password=${this.password}`
      );
      if (user.data.length) {
        localStorage.setItem("user-info", JSON.stringify(user.data));
        this.$router.push({ name: "Home" });
      } else {
        this.err = "username/Password incorrect";
        setTimeout(() => {
          this.err = "";
        }, 6000);
      }
    },
  },
};
</script>
<style scoped>
.conatiner {
  text-align: center !important;
}
</style>