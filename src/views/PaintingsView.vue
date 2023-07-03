<template>
  <div class="paintings">
    <background-image-component ref="backgroundImgRef" class="text-center">
      <!-- <div class="shadow-overlay"></div> -->

      <h1>Slikarstvo</h1>

      <p class="citation">
        ,,Slikarstvo je za mene samo sredstvo da zaboravim život.
        <br />Krik u noći. Suzdržani jecaj. Prigušeni smeh.” <br />-Žorž Ruo
      </p>
      <br />

      <div class="container col-sm-12 d-flex flex-column align-items-center">
        <div v-for="art in filteredArts" :key="art.id" class="col-sm-8">
          <router-link
            :to="{
              name: 'ArtworkDetailsView',
              params: { id: art.id },
            }"
          >
            <ArtworkComponent :art="art"></ArtworkComponent>
          </router-link>
        </div>
      </div>
    </background-image-component>

    <NavBar></NavBar>
  </div>
</template>
<style scoped>
.citation {
  font-style: italic;
}
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
      return this.allArts.filter((art) => art.type === 0);
    },
  },
  mounted() {
    this.setBackgroundImage();
  },
  methods: {
    setBackgroundImage() {
      this.$refs.backgroundImgRef.setBackgroundImage(
        "https://i0.wp.com/marcusashley.com/wp-content/uploads/2021/11/red-museum-gallery-wall.jpg?w=640&ssl=1"
      );
    },
  },
};
</script>
