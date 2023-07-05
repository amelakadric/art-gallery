<template>
  <div class="myAccount">
    <background-image-component ref="backgroundImgRef">
      <h1>My account</h1>

      <h2>{{ username }}</h2>

      <div class="container col-sm-12 scrolls">
        <b-row class="col-sm-12">
          <b-col class="col-sm-6 text-center">
            <h2 style="margin-left: 4rem">Ponude</h2>
            <hr />

            <div
              id="listgroup-ex"
              style="position: relative; overflow-y: auto; height: 300px"
            >
              <div
                v-for="offer of filteredOffers"
                :key="offer.id"
                class="container col-sm-8 text-center"
              >
                <b-card class="cardPonude">
                  <b-card-title class=""
                    ><h4>Offer {{ offer.id }}</h4></b-card-title
                  >
                  <b-card-text>
                    <p>art: {{ offer.artId }}</p>
                    <p>offer: {{ offer.value }}</p>
                  </b-card-text>
                </b-card>
              </div>
            </div>
          </b-col>

          <!-- <b-row class=""> -->
          <b-col class="col-sm-6 text-center">
            <h2 style="margin-left: 4rem">Poruke</h2>
            <hr />
            <div
              id="listgroup-ex"
              style="position: relative; overflow-y: auto; height: 300px"
            >
              <div
                v-for="message of filteredMessages"
                :key="message.id"
                class="container col-sm-8 text-center"
              >
                <b-card class="cardPonude">
                  <b-card-title class=""
                    ><h4>Message {{ message.id }}</h4></b-card-title
                  >
                  <b-card-text>
                    <p>user: {{ message.username }}</p>
                    <p>message: {{ message.text }}</p>
                  </b-card-text>
                </b-card>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <footer-comp></footer-comp>
    </background-image-component>

    <NavBar></NavBar>
  </div>
</template>

<style scoped>
h1 {
  color: aliceblue;
  text-align: center;
  padding-top: 5rem;
  /* margin-right: 4rem; */
  margin-bottom: 2rem;
  font-size: 4rem;
  text-shadow: 3px 2px 1px black;
}
h2 {
  margin: 2rem;
  font-size: 3rem;
  text-shadow: 3px 2px 1px black;
}
.poruke {
  margin-bottom: 11rem;
}
.myAccount {
  color: aliceblue;
}

.card {
  margin: 2rem 6rem 2rem;
  color: white;
  border: 1px solid transparent;
  background-color: rgba(247, 244, 244, 0.1) !important;
  backdrop-filter: blur(10px);
  width: 60rem;
  /* margin-right: 4rem; */
}

.cardPonude {
  width: 30rem;
  /* margin-left: auto; */
  margin: 0.2rem auto;
  /* align-self: center; */
}
</style>

<script>
import NavBar from "@/components/NavBar.vue";
import BackgroundImageComponent from "@/components/BackgroundImageComponent.vue";
import allMessages from "@/data/messages";
import allOffers from "@/data/offers";
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "MyAccountView",
  components: {
    NavBar,
    BackgroundImageComponent,
    FooterComp,
  },
  data() {
    return {
      username: "",
      offers: null,
      messages: null,
      filteredOffers: null,
      filteredMessages: null,
    };
  },
  created() {
    this.username = localStorage.getItem("username");
    console.log(this.username);
    const storedMessages = localStorage.getItem("allMessages");
    if (!storedMessages) {
      this.messages = allMessages;
    } else {
      this.messages = JSON.parse(storedMessages);
    }
    console.log(this.messages);
    this.filteredMessages = this.filterMessages();
    console.log(this.filteredMessages);

    const storedOffers = localStorage.getItem("allOffers");
    if (!storedOffers) {
      this.offers = allOffers;
    } else {
      this.offers = JSON.parse(storedOffers);
    }
    this.filteredOffers = this.filterOffers();
    console.log(this.filteredMessages);
  },

  mounted() {
    this.setBackgroundImage();
  },
  methods: {
    setBackgroundImage() {
      this.$refs.backgroundImgRef.setBackgroundImage(
        "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1195&q=80"
      );
    },
    filterOffers() {
      return this.offers.filter((offer) => offer.username === this.username);
    },
    filterMessages() {
      return this.messages.filter(
        (message) => message.username === this.username
      );
    },
  },
};
</script>
