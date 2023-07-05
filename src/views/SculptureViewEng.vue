<template>
  <div class="sculptures">
    <background-image-component ref="backgroundImgRef" class="text-center">
      <BreadcrumbsComponent></BreadcrumbsComponent>
      <!-- <div class="shadow-overlay"></div> -->

      <h1>Sculpture</h1>

      <p class="citation">
        ,,Every piece of rock has a statue inside it, and the sculptor's job is
        to find that statue.”
        <br />- Michelangelo
      </p>
      <br />

      <div class="container col-sm-12 d-flex flex-column align-items-center">
        <div>
          <label for="sort-select">Sort by:</label>
          <select id="sort-select" v-model="sortBy" class="form-control">
            <option value="name">Name</option>
            <option value="artist">Artist</option>
          </select>
        </div>
        <div v-for="art in filteredArts" :key="art.id" class="col-sm-8">
          <router-link
            :to="{
              name: 'ArtworkDetailsViewEng',
              params: { id: art.id },
            }"
          >
            <ArtworkComponent :art="art"></ArtworkComponent>
          </router-link>
        </div>
      </div>
      <footer-comp></footer-comp>
    </background-image-component>

    <NavBar></NavBar>
  </div>
</template>
<style scoped>
select {
  margin-bottom: 2rem;
  background-color: rgba(247, 244, 244, 0.1) !important;
  backdrop-filter: blur(10px);
  color: aliceblue !important;
}

option {
  background-color: rgba(85, 73, 73, 0.1) !important;
  backdrop-filter: blur(10px);
  color: black !important;
}
.citation {
  font-style: italic;
}
.sculptures {
  color: white;
  text-align: center;
  /* margin: 0; */
}

h1 {
  color: aliceblue;
  text-align: center;
  padding-top: 5rem;
  /* margin-right: 4rem; */
  margin-bottom: 2rem;
  font-size: 4rem;
  text-shadow: 3px 2px 1px black;
}
</style>

<script>
import NavBar from "@/components/NavBar.vue";
import BackgroundImageComponent from "@/components/BackgroundImageComponent.vue";
import ArtworkComponent from "@/components/ArtworkComponent.vue";
import allArts from "@/data/arts.js";
import FooterComp from "@/components/FooterComp.vue";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent.vue";

export default {
  name: "SculptureView",
  components: {
    NavBar,
    BackgroundImageComponent,
    ArtworkComponent,
    FooterComp,
    BreadcrumbsComponent
  },
  data() {
    return {
      allArts: allArts,
      sortBy: "name", // Default sorting option
      sortedArts: [], // Initialize as an empty array
    };
  },
  computed: {
    filteredArts() {
      let sortedArts = this.allArts.filter((art) => art.type === 1);

      if (this.sortBy === "name") {
        sortedArts = this.sortByName(sortedArts);
      } else if (this.sortBy === "artist") {
        sortedArts = this.sortByAuthor(sortedArts);
      }

      return sortedArts;
    },
  },

  mounted() {
    this.setBackgroundImage();
  },
  methods: {
    setBackgroundImage() {
      this.$refs.backgroundImgRef.setBackgroundImage(
        "https://i.pinimg.com/736x/ee/d3/bf/eed3bf3c3885485904d4b4dd0e553751.jpg"
      );
    },
    sortByName(arts) {
      return arts.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    },
    sortByAuthor(arts) {
      return arts.sort((a, b) => {
        const authorA = a.author.toUpperCase();
        const authorB = b.author.toUpperCase();
        if (authorA < authorB) {
          return -1;
        }
        if (authorA > authorB) {
          return 1;
        }
        return 0;
      });
    },
  },
  watch: {
    sortBy() {
      this.sortedArts = this.filteredArts;
    },
  },
};
</script>
