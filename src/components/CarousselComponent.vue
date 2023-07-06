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
::marker {
  display: none !important;
}
ol {
  list-style-type: none;
  padding: 0;
}

::-webkit-details-marker {
  display: none;
}
.carousel {
  align-self: center;
  margin: 0 auto 6rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: auto;
  width: 20rem;
}
.carousel-item {
  /* height: 2rem; */
  /* margin: auto; */
  /* max-height: rem; */
  margin-top: auto;
  width: 100%;
}

img {
  /* height: 100%; */
  /* height: 5rem; */
  align-self: center;
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
