<template>
  <div class="sculptures">
    <background-image-component ref="backgroundImgRef" class="text-center">
      <!-- <div class="shadow-overlay"></div> -->

      <h1>Vajarstvo</h1>

      <p class="citation">
        ,,Svaki komad stene ima statuu unutar sebe, a zadatak skulptora je da tu
        statuu pronađe.”
        <br />-Mikelanđelo
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
.sculptures {
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
      return this.allArts.filter((art) => art.type === 1);
    },
  },
  mounted() {
    this.setBackgroundImage();
  },
  methods: {
    setBackgroundImage() {
      this.$refs.backgroundImgRef.setBackgroundImage(
        "https://www.samsoriginalart.com/cdn/shop/articles/b3564315ec59f69660ce6d5f1cb5bf15.jpg?v=1642480841"
      );
    },
  },
};
</script>
