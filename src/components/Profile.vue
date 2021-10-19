<template>
  <div class="container">
    <div class="inner">
      <img src="../assets/user.svg" alt="User" />
      <h2>{{ name }}</h2>
      <p>Email Address: {{ email }}</p>
      <button class="del" @click="onDelete">Delete Account</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      id: "",
    };
  },
  methods: {
    async onDelete() {
      const del = confirm("Do You Want To Delete Your Account?");
      if (del) {
        const result = await axios.delete(`/users/${this.id}`);
        if (result.status == 200) {
          localStorage.clear();
          this.$router.push({ name: "Login" });
        } else {
          console.log("Error in del acc");
        }
      }
    },
  },
  mounted() {
    const userData = JSON.parse(localStorage.getItem("user-info"));
    this.name = userData[0].name;
    this.email = userData[0].email;
    this.id = userData[0].id;
  },
};
</script>

<style scoped>
.inner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}
.inner img {
  width: 250px;
}
.inner p {
  margin: 10px auto;
}
.inner button {
  background-color: rgb(255, 72, 0);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
}
</style>