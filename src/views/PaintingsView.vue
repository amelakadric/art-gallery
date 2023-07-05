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
              name: 'ArtworkDetailsView',
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
.paintings {
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

export default {
  name: "PaintingsView",
  components: {
    NavBar,
    BackgroundImageComponent,
    ArtworkComponent,
    FooterComp,
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
      let sortedArts = this.allArts.filter((art) => art.type === 0);

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
        "https://i0.wp.com/marcusashley.com/wp-content/uploads/2021/11/red-museum-gallery-wall.jpg?w=640&ssl=1"
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
