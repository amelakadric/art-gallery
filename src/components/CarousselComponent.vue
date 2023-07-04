<template>
  <div class="col-sm-12 text-center">
    <div class="caroussel">
      <b-carousel
        id="carousel-1"
        :interval="5000"
        controls
        indicators
        background="transparent"
        style="text-shadow: 1px 1px 2px #333"
      >
        <b-carousel-slide
          v-for="(image, index) in imagesList"
          :key="index"
          :img-src="image"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<style scoped>
ol {
  display: none;
}
.carousel {
  align-self: center;
  margin: 0 auto 6rem;
  text-align: center;
  height: 20rem;
  width: 20rem;
}
.carousel-item {
  /* height: 2rem; */
  /* margin: auto; */
  align-self: center;
  width: 100%;
}

img {
  /* height: 100%; */
  margin: auto;
}
</style>

<script>
export default {
  name: "CarousselComponent",
  props: {
    imagesList: {
      type: Array,
      required: true,
    },
  },
};
</script>
