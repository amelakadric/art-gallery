<template>
  <div class="text-center">
    <b-card :img-src="art.imageUrl" img-left class="text-left mb-4">
      <b-card-title class="mt-5"
        ><h2>{{ art.title }}</h2></b-card-title
      >
      <b-card-text>
        <p>{{ art.author }}</p>
      </b-card-text>
    </b-card>

    <!-- <img :src="art.imageUrl" alt="" /> -->
  </div>
</template>

<style scoped>
.card {
  color: white;
  border: 1px solid transparent;
  background-color: rgba(247, 244, 244, 0.1) !important;
  backdrop-filter: blur(10px);
  /* margin-right: 4rem; */
}
img {
  margin: 2rem 0 2rem 10rem;
  max-width: 12rem;
  max-height: 10rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 5px black;
}
</style>

<script>
export default {
  name: "ArtworkComponent",
  props: {
    art: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToArtworkDetail() {
      this.$router.push(`/artwork/${this.art.id}`);
    },
  },
};
</script>
