<template>
  <div class="formComp">
    <b-form @submit="submitFormOffer">
      <h3>Ostavite ponudu</h3>
      <b-form-group label-for="numberInput">
        <b-form-input
          id="numberInput"
          type="text"
          v-model="numberValue"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <b-form @submit="submitFormMessage">
      <h3>Ostavite poruku umetniku</h3>
      <b-form-group label-for="textareaInput">
        <b-form-textarea
          id="textareaInput"
          v-model="textareaValue"
          required
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<style scoped>
.formComp {
  margin: 2rem auto;
  width: 30rem;
}
</style>

<script>
import allOffers from "@/data/offers";
export default {
  name: "FormComponent",
  data() {
    return {
      numberValue: "",
      textareaValue: "",
      offers: null,
    };
  },
  created() {
    this.offers = localStorage.getItem("allOffers");
    if (!this.offers) this.offers = allOffers;
    else {
      this.offers = JSON.parse(this.offers);
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
    },
  },
};
</script>
