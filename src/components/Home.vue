<template>
  <div>
    <div class="title">
      <p>Resturents List</p>
      <h2>Wellcome Mr.{{ username }}</h2>
      <div class="empty" v-if="resturentHasData">
        No Data Found, Please Add Some Restaurant Data From Here
        <router-link to="/add-resturent">Add New Resturent Data</router-link>
      </div>
      <div class="boxs">
        <div class="box" v-for="(rest, index) in resturents[0]" :key="index">
          <div class="header">
            <div class="rest-name">{{ rest.name }}</div>
            <div class="id">#{{ index + 1 }}</div>
          </div>
          <div class="body">
            <div>
              <div class="contact">Phone: {{ rest.contact }}</div>
              <div class="address">Address: {{ rest.address }}</div>
            </div>
          </div>
          <div class="actions">
            <button @click="onDelete(rest.id)">Delete</button>
            <button>
              <router-link :to="'/update-resturent/' + rest.id"
                >Upadte</router-link
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      resturents: [],
      resturentHasData: false,
    };
  },
  methods: {
    async resturentsGetter() {
      const result = await axios.get("/resturentes");
      if (result.data.length == 0) {
        this.resturentHasData = true;
      } else {
        this.resturentHasData = false;
      }
      if (result.data) {
        this.resturents.push(result.data);
      }
    },
    async onDelete(id) {
      const result = await axios.delete(`/resturentes/${id}`);
      if (result.status == 200) {
        this.$router.go();
      }
    },
  },
  name: "Home",
  created() {
    if (!this.resturents) {
      this.resturentHasData = true;
    }
  },
  mounted() {
    this.resturentsGetter();
    const user = JSON.parse(localStorage.getItem("user-info"));
    if (!user) {
      this.$router.push({ name: "Login" });
    } else {
      this.username = user[0].name;
    }
  },
};
</script>
<style scoped>
.title {
  padding: 15px 0;
  text-align: center;
}
.boxs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 50px 0 0 0;
  gap: 20px;
}
@media (max-width: 800px) {
  .boxs {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 500px) {
  .boxs {
    grid-template-columns: repeat(1, 1fr);
  }
}
.box {
  background-color: rgb(236, 236, 236);
  border: 0.5px solid var(--main-color);
  transition: 0.2s linear;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: unset;
}
.box:hover {
  box-shadow: 0 0 5px #00000073;
}
.box .rest-name {
  width: 100%;
  min-height: 50px;
  color: #fff;
  padding: 15px 10px;
  text-align: left;
}
.box .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-color);
}
.box .body {
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;
  border-bottom: 0.5px solid var(--main-color);
}
.box .header .id {
  background-color: #fff;
  color: var(--main-color);
  padding: 5px;
  border-radius: 5px;
  margin-right: 5px;
}
.box .actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
}
.box .actions button {
  background-color: var(--main-color);
  padding: 5px 10px;
  border: none;
  outline: none;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
}
.box .actions button a {
  color: #fff;
  text-decoration: none;
}
.empty {
  text-align: center;
  margin: 50px auto;
  line-height: 20px;
}
.empty a {
  background-color: var(--main-color);
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  display: inline-block;
  text-decoration: none;
}
</style>
