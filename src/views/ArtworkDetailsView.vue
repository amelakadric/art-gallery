<template>
  <div class="artwork-details">
    <background-image-component ref="backgroundImgRef" class="text-center">
      <h1 class="transparent">.</h1>
      <div class="text-center">
        <b-card :img-src="artwork.imageUrl" img-center class="mb-4">
          <b-card-title class="mt-5"
            ><h2>{{ artwork.title }}</h2></b-card-title
          >
          <b-card-text>
            <h3>{{ artwork.author }}</h3>
            <p>{{ artwork.desc }}</p>
            <p>
              godina: <br />
              {{ artwork.estimatedAge }}
            </p>
            <p>
              procenjena vrednost:<br />
              {{ artwork.estimatedValue }}
            </p>
          </b-card-text>
        </b-card>
      </div>

      <b-row class="col-sm-12 container d-flex flex-row justify-content center">
        <b-col cols="8" class="col-sm-8 text-center">
          <div
            id="listgroup-ex"
            style="position: relative; overflow-y: auto; height: 300px"
          >
            <h2 style="margin-right: 4rem">Ponude</h2>

            <div
              v-for="offer of filteredOffers"
              :key="offer.id"
              class="container col-sm-8 text-center"
            >
              <b-card class="cardPonude">
                <b-card-title class=""
                  ><h4>Ponuda {{ offer.id }}</h4></b-card-title
                >
                <b-card-text>
                  <p>user: {{ offer.username }}</p>
                  <p>ponuda: {{ offer.value }}</p>
                </b-card-text>
              </b-card>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="col-sm-12 container d-flex flex-row justify-content center">
        <b-col cols="8" class="col-sm-8 text-center">
          <div
            id="listgroup-ex"
            style="position: relative; overflow-y: auto; height: 300px"
          >
            <h2 style="margin-right: 4rem">Poruke</h2>

            <div
              v-for="message of filteredMessages"
              :key="message.id"
              class="container col-sm-8 text-center"
            >
              <b-card class="cardPonude">
                <b-card-title class=""
                  ><h4>Poruka {{ message.id }}</h4></b-card-title
                >
                <b-card-text>
                  <p>user: {{ message.username }}</p>
                  <p>poruka: {{ message.text }}</p>
                </b-card-text>
              </b-card>
            </div>
          </div>
        </b-col>
      </b-row>
      <FormComponent></FormComponent>
    </background-image-component>

    <NavBar></NavBar>
  </div>
</template>

<style scoped>
.artwork-details {
  color: white;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
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
img {
  max-width: 20rem;
  max-height: 30rem;
  /* width: 20rem; */
  margin-top: 2rem;
  box-shadow: 2px 2px 5px black;
  align-self: center;
}
</style>

<script>
import allArts from "@/data/arts";
import allOffers from "@/data/offers.js";
import allMessages from "@/data/messages.js";

import NavBar from "@/components/NavBar.vue";
import BackgroundImageComponent from "@/components/BackgroundImageComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
export default {
  name: "ArtworkDetailsView",
  props: {
    myArt: {
      type: Object,
      // required: true,
    },
  },
  components: {
    NavBar,
    BackgroundImageComponent,
    FormComponent,
  },
  data() {
    return {
      allArts: allArts,
      artwork: null,
      offers: null,
      messages: null,
      filteredOffers: null,
      filteredMessages: null,
    };
  },
  mounted() {
    this.setBackgroundImage();
  },
  created() {
    this.offers = localStorage.getItem("allOffers");
    if (!this.offers) this.offers = allOffers;
    else {
      this.offers = JSON.parse(this.offers);
    }
    this.fetchArtwork();
    this.filteredOffers = this.filterOffers();

    this.messages = localStorage.getItem("allMessages");
    if (!this.messages) this.messages = allMessages;
    else {
      this.messages = JSON.parse(this.messages);
    }
    this.filteredMessages = this.filterMessages();
  },

  methods: {
    fetchArtwork() {
      const id = parseInt(this.$route.params.id);
      this.artwork = this.allArts.find((art) => art.id === id);
    },
    setBackgroundImage() {
      this.$refs.backgroundImgRef.setBackgroundImage(
        "https://previews.123rf.com/images/nikol85/nikol851804/nikol85180400045/99273652-abstract-art-backgrounds-beige-and-brown-colors-multicolor-oil-painting-on-canvas-fragment-of.jpg"
      );
    },
    filterOffers() {
      return this.offers.filter((offer) => offer.artId === this.artwork.id);
    },
    filterMessages() {
      return this.messages.filter(
        (message) => message.artistName === this.artwork.author
      );
    },
  },
};
</script>
