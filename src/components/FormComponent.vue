<template>
  <div class="formComp container col-sm-12 d-flex flex-row">
    <div class="col-sm-6">
      <b-form @submit="submitFormOffer">
        <h3>Ostavite ponudu</h3>
        <b-form-group label-for="numberInput">
          <b-form-input
            class="form-control col-sm-4"
            id="numberInput"
            type="text"
            v-model="numberValue"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="dark" class="mt-4">Submit</b-button>
      </b-form>
    </div>
    <div class="col-sm-6">
      <b-form @submit="submitFormMessage">
        <h3>Ostavite poruku umetniku</h3>
        <b-form-group label-for="textareaInput">
          <b-form-textarea
            class="form-control"
            id="textareaInput"
            v-model="textareaValue"
            required
          ></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="dark">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<style scoped>
input,
textarea {
  background-color: rgba(247, 244, 244, 0.1) !important;
  backdrop-filter: blur(10px);
  width: 18rem;
  margin: 1rem auto 0.5rem;
}

.formComp {
  margin: 2rem auto;
  width: 100%;
}
</style>

<script>
import allOffers from "@/data/offers";
import allArts from "@/data/arts";
import allMessages from "@/data/messages";
export default {
  name: "FormComponent",
  data() {
    return {
      numberValue: "",
      textareaValue: "",
      messages: null,
      offers: null,
    };
  },
  created() {
    this.offers = localStorage.getItem("allOffers");
    if (!this.offers) this.offers = allOffers;
    else {
      this.offers = JSON.parse(this.offers);
    }
    this.messages = localStorage.getItem("allMessages");
    if (!this.messages) this.messages = allMessages;
    else {
      this.messages = JSON.parse(this.messages);
    }
  },
  methods: {
    submitFormOffer() {
      console.log("Number Input:", this.numberValue);
      if (this.numberValue != "") this.ponudaVrednost = "$" + this.numberValue;
      console.log(this.ponudaVrednost);
      let artId = parseInt(this.$route.params.id);
      let id = this.offers[this.offers.length - 1].id + 1;
      const username = localStorage.getItem("username");

      this.offers.push({
        id: id,
        artId: artId,
        username: username,
        value: this.numberValue,
      });
      console.log(this.offers);
      localStorage.setItem("allOffers", JSON.stringify(this.offers));
    },
    submitFormMessage() {
      console.log("Textarea:", this.textareaValue);
      if (this.textareaValue != "") this.porukaUmetniku = this.textareaValue;
      let artId = parseInt(this.$route.params.id);
      const art = allArts.find((art) => art.id === artId);
      let id = this.messages[this.messages.length - 1].id + 1;
      const username = localStorage.getItem("username");

      this.messages.push({
        id: id,
        artistName: art.author,
        username: username,
        text: this.textareaValue,
      });
      localStorage.setItem("allMessages", JSON.stringify(this.messages));
    },
  },
};
</script>
