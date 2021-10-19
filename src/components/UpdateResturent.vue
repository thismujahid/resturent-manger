 <template>
  <div class="container">
    <div class="inner">
      <form class="registration" @submit.prevent="onUpdate">
        <h2 class="title">Update {{ name }} Resturent Data</h2>
        <input type="text" v-model.trim="name" placeholder="Resturent Name" />
        <input
          type="text"
          v-model.trim="contact"
          placeholder="Phone to Contact"
        />
        <input type="text" v-model.trim="address" placeholder="Address" />
        <transition-group name="fade" mode="out-in">
          <p class="done" v-if="updateRestDone">{{ updateRestDone }}</p>
          <p v-if="err" class="err">{{ err }}</p>
        </transition-group>
        <div class="actions">
          <button type="submit">Update Resturent</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      contact: "",
      address: "",
      updateRestDone: "",
      err: "",
      id: "",
    };
  },
  methods: {
    async onUpdate() {
      if (this.name == "" || this.contact == "" || this.address == "") {
        this.err = "Please Enter All Data of The Resturent Frist";
        setTimeout(() => {
          this.err = "";
        }, 4000);

        return;
      }
      const restData = {
        name: this.name,
        contact: this.contact,
        address: this.address,
      };
      const result = await axios.put("/resturentes/" + this.id, restData);
      if (result.status == 200) {
        this.updateRestDone = "Successfully Resturent Updated";
        setTimeout(() => {
          this.updateRestDone = "";
          this.$router.push({ name: "Home" });
        }, 3000);
      }
    },
  },
  async mounted() {
    this.id = this.$route.params.id;
    const user = JSON.parse(localStorage.getItem("user-info"));
    if (!user) {
      this.$router.push({ name: "Login" });
    }
    const result = await axios.get(`/resturentes/${this.id}`);
    if (result.status == 200) {
      this.name = result.data.name;
      this.contact = result.data.contact;
      this.address = result.data.address;
    }
  },
};
</script>
<style scoped>
.inner {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner .registration .title {
  margin-bottom: 30px;
}
</style>