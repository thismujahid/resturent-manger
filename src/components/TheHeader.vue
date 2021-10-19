<template>
  <nav>
    <div class="container">
      <div class="inner">
        <ul>
          <li><router-link active-class="active" to="/">Home</router-link></li>
          <li>
            <router-link active-class="active" to="/add-resturent"
              >Add Resturent</router-link
            >
          </li>
        </ul>
        <div class="user-info">
          <img @click="box = !box" src="../assets/user.svg" alt="User Image" />
          <div class="name" @click="box = !box">{{ this.name }}</div>
          <transition name="fade">
            <div class="info-box" v-if="box">
              wellcome {{ this.name }}!
              <p>your Email is: {{ this.email }}</p>
              <router-link @click="onLogout" to="/login">Logout</router-link>
              <router-link to="/profile">Profile</router-link>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      name: "unAutharized",
      email: "unAutharized",
      box: false,
    };
  },
  mounted() {
    const userData = JSON.parse(localStorage.getItem("user-info"));
    if (userData) {
      this.name = userData[0].name;
      this.email = userData[0].email;
    }
  },
  methods: {
    onLogout() {
      localStorage.clear();
    },
  },
};
</script>
<style scoped>
nav {
  width: 100%;
  background-color: var(--main-color);
  color: #fff;
}
nav .inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
nav ul {
  list-style: none;
}
nav ul li {
  display: inline-block;
  margin: 0 auto;
  transition: 0.3s linear;
}
nav ul li a {
  text-decoration: none;
  color: #fff;
  height: 100%;
  transition: 0.3s linear;
  width: 100%;
  font-size: 1rem;
  display: block;
  padding: 10px 15px;
}
nav ul li:hover {
  background-color: #fff;
  color: #000;
}
nav ul li:hover a,
nav ul li a.active {
  background-color: #fff;
  height: 100%;
  width: 100%;
  display: block;
  color: #000;
}

nav .user-info {
  display: flex;
  justify-content: center;
  align-items: center;
}
nav .user-info img {
  width: 30px;
  margin-right: 3px;
  cursor: pointer;
}
nav .user-info .name {
  cursor: pointer;
}
nav .user-info .info-box {
  position: absolute;
  top: 40px;
  right: -15px;
  max-width: 300px;
  width: calc(100% + 30px);
  height: auto;
  padding: 10px;
  border-radius: 0 0 5px 5px;
  background-color: #fff;
  color: #000;
  box-shadow: 0 0 5px #00000073;
}
nav .user-info .info-box a {
  background-color: var(--main-color);
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  width: auto;
  margin: 5px;
  text-align: center;
}
</style>