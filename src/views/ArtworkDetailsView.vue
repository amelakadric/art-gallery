<template>
  <div class="artwork-details">
    <background-image-component ref="backgroundImgRef" class="text-center">
      <img :src="artwork.imageUrl" :alt="artwork.title" />

      <h2>{{ artwork.title }}</h2>
      <p>Author: {{ artwork.author }}</p>
      <p>Description: {{ artwork.desc }}</p>
      <p>Godina: {{ artwork.estimatedAge }}</p>
      <p>Procenjena vrednost: {{ artwork.estimatedValue }}</p>

      <h2>Ponude</h2>
      <div v-for="offer of filteredOffers" :key="offer.id" class="col-sm-8">
        <p>Ponuda id: {{ offer.id }}</p>
        <p>user: {{ offer.username }}</p>
        <p>ponuda: {{ offer.value }}</p>
      </div>
    </background-image-component>

    <NavBar></NavBar>
  </div>
</template>

<script>
import allArts from "@/data/arts";
import allOffers from "@/data/offers.js";
import NavBar from "@/components/NavBar.vue";
import BackgroundImageComponent from "@/components/BackgroundImageComponent.vue";

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
  },
  data() {
    return {
      allArts: allArts,
      artwork: null,
      offers: allOffers,
      filteredOffers: null,
    };
  },
  mounted() {
    this.setBackgroundImage();
  },
  created() {
    this.fetchArtwork();
    this.filteredOffers = this.filterOffers();
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
  },
};
</script>

<style scoped>
.artwork-details {
  color: white;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

img {
  max-width: 100%;
  margin-top: 2rem;
  box-shadow: 2px 2px 5px black;
}
</style>
