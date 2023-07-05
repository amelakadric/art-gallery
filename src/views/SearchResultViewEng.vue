<template>
  <div class="sculptures">
    <background-image-component ref="backgroundImgRef" class="text-center">
      <!-- <div class="shadow-overlay"></div> -->

      <h1>Search results</h1>
      <h2>for '{{ this.searchQuery }}'</h2>

      <div class="container col-sm-12 d-flex flex-column align-items-center">
        <div>
          <label for="sort-select">Sort by:</label>
          <select id="sort-select" v-model="sortBy" class="form-select">
            <option value="name">Name</option>
            <option value="artist">Artist</option>
          </select>
        </div>
        <div v-for="art in sortedArts" :key="art.id" class="col-sm-8">
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
  margin-bottom: 0.5rem;
  font-size: 4rem;
  text-shadow: 3px 2px 1px black;
}
h2 {
  margin-bottom: 2rem;
}
</style>

<script>
import NavBar from "@/components/NavBar.vue";
import BackgroundImageComponent from "@/components/BackgroundImageComponent.vue";
import ArtworkComponent from "@/components/ArtworkComponent.vue";
import allArts from "@/data/arts.js";
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "SearchResultViewEng",
  components: {
    NavBar,
    BackgroundImageComponent,
    ArtworkComponent,
    FooterComp,
  },
  props: {
    q: {
      type: String,
      default: "",
    },
    type: {
      type: Number,
      default: 0,
    },
    searchP: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      allArts: allArts,
      sortBy: "name", // Default sorting option
      sortedArts: [], // Initialize as an empty array
      artType: 0,
      searchParam: 0,
    };
  },
  computed: {
    filteredArts() {
      let sortedArts = this.sortedArts.filter(
        (art) => art.type == this.artType
      );
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
    this.fetchSearchParams();
  },
  methods: {
    setBackgroundImage() {
      this.$refs.backgroundImgRef.setBackgroundImage(
        "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1195&q=80"
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
    fetchSearchParams() {
      let query = JSON.parse(localStorage.getItem("searchQ"));
      this.searchQuery = query.q || "";
      this.artType = query.type || 0;
      this.searchParam = query.searchP || 0;
      this.sortedArts = this.allArts.filter((art) => art.type == this.artType);

      this.searchResult();

      // Perform search or any other actions based on the retrieved query parameters
    },
    searchResult() {
      if (this.searchParam == 0) {
        this.sortedArts = this.sortedArts.filter(
          (art) => art.title.includes(this.searchQuery)
          // art.title == this.searchQuery
        );
        console.log(this.sortedArts);
      } else {
        this.sortedArts = this.sortedArts.filter((art) =>
          art.author.includes(this.searchQuery)
        );
      }
    },
  },
  watch: {
    sortBy() {
      this.sortedArts = this.filteredArts;
    },
  },
};
</script>
