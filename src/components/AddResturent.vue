 <template>
  <div class="container">
    <div class="inner">
      <form class="registration" @submit.prevent="onAddResturent">
        <h2 class="title">Add New Resturent Data</h2>
        <input type="text" v-model.trim="name" placeholder="Resturent Name" />
        <input
          type="text"
          v-model.trim="contact"
          placeholder="Phone to Contact"
        />
        <input type="text" v-model.trim="address" placeholder="Address" />
        <transition-group name="fade" mode="out-in">
          <p class="done" v-if="addRestDone">{{ addRestDone }}</p>
          <p v-if="err" class="err">{{ err }}</p>
        </transition-group>
        <div class="actions">
          <button type="submit">Add Resturent</button>
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
      addRestDone: "",
      err: "",
    };
  },
  methods: {
    async onAddResturent() {
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
      const result = await axios.post("/resturentes", restData);
      if (result.status == 201) {
        this.addRestDone = "Successfully Resturent Added";
        setTimeout(() => {
          this.addRestDone = "";
          this.$router.push({ name: "Home" });
        }, 3000);
      }
    },
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