<template>
  <div class="paintings">
    <background-image-component ref="backgroundImgRef" class="text-center">
      <!-- <div class="shadow-overlay"></div> -->

      <h1>Arhitektura</h1>

      <p>
        ,,Arhitektura je izraz vrednosti. Način na koji gradimo je odraz načina
        na koji živimo”
        <br />-Norman Foster
      </p>
      <br />

      <div class="container col-sm-12 d-flex flex-column align-items-center">
        <div v-for="art in filteredArts" :key="art.id" class="col-sm-8">
          <ArtworkComponent :art="art"></ArtworkComponent>
        </div>
      </div>
    </background-image-component>

    <NavBar></NavBar>
  </div>
</template>
<style scoped>
.paintings {
  color: white;
  text-align: center;
  /* margin: 0; */
}
.container {
  margin: 0;
}

h1 {
  color: aliceblue;
  text-align: center;
  padding-top: 5rem;
  margin-right: 4rem;
  margin-bottom: 2rem;
  font-size: 4rem;
  text-shadow: 3px 2px 1px black;
}
p {
  margin-right: 4rem;
}
</style>

<script>
import NavBar from "@/components/NavBar.vue";
import BackgroundImageComponent from "@/components/BackgroundImageComponent.vue";
import ArtworkComponent from "@/components/ArtworkComponent.vue";
import allArts from "@/data/arts.js";

export default {
  name: "PaintingsView",
  components: {
    NavBar,
    BackgroundImageComponent,
    ArtworkComponent,
  },
  data() {
    return {
      allArts: allArts,
    };
  },
  computed: {
    filteredArts() {
      return this.allArts.filter((art) => art.type === 2);
    },
  },
  mounted() {
    this.setBackgroundImage();
  },
  methods: {
    setBackgroundImage() {
      this.$refs.backgroundImgRef.setBackgroundImage(
        "https://c4.wallpaperflare.com/wallpaper/452/882/402/amsterdam-netherlands-building-river-wallpaper-preview.jpg"
      );
    },
  },
};
</script>
