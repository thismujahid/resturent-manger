<template>
  <div class="container">
    <form class="registration" @submit.prevent="onSignup">
      <img src="../assets/logo.png" alt="Logo" />
      <h1>Sign Up</h1>
      <input type="text" v-model.trim="name" placeholder="Enter Name..." />
      <input
        type="email"
        v-model.trim="email"
        placeholder="Enter E-Mail Address..."
      />
      <input
        type="password"
        v-model.trim="password"
        placeholder="Enter Password..."
      />
      <transition-group name="fade" mode="out-in">
        <p class="done" v-if="SignUpmsgDone">{{ SignUpmsgDone }}</p>
        <p v-if="err" class="err">{{ err }}</p>
      </transition-group>
      <div class="actions">
        <button type="submit">Sign Up</button>
        <router-link to="/login">
          <button>Login?</button>
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
      name: "",
      email: "",
      password: "",
      SignUpmsgDone: "",
      err: "",
    };
  },
  mounted() {
    const user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
  methods: {
    async onSignup() {
      const isValid = this.validator();
      if (!isValid) {
        this.clearErrMsg(3000);

        return;
      }
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      const incloudedMail = await axios.get(`/users?email=${this.email}`);
      console.log(incloudedMail.data);
      const incloudedMailData = [...incloudedMail.data];
      if (incloudedMailData.length !== 0) {
        this.err = "Sorry this Email used Before Try by another";
        setTimeout(() => {
          this.err = "";
        }, 6000);
        return;
      }
      const result = await axios.post("/users", data);
      if (result.status == 201) {
        this.SignUpmsgDone = "Sign Up Successfully Done";
        this.$router.push({ name: "Login" });
      } else {
        this.err = "Somthing Wrong!";
        this.clearErrMsg(3000);
      }
    },
    clearErrMsg(timeOut) {
      setTimeout(() => {
        this.err = "";
      }, timeOut);
    },
    validator() {
      if (this.name == "" || this.email == "" || this.password == "") {
        this.err = "Please Insert All your Data Frist!";
        return false;
      } else if (this.password.length < 8) {
        this.err = "Password Must be 8 or more Please Fix it and Try Again!";
        return false;
      } else {
        return true;
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