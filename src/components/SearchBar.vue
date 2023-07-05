<template>
  <div v-show="showSearchForm" class="search-popup">
    <form @submit.prevent="search">
      <div class="input-group">
        <input
          class="form-control"
          type="text"
          v-model="searchQuery"
          placeholder="Search"
          required
        />
        <!-- <button type="submit" class="btn btn-primary">Search</button> -->
        <button type="submit" class="btn btn-primary">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div>
        <label for="art-type-select">Art Type:</label>
        <select
          id="art-type-select"
          v-model="artType"
          required
          class="form-select"
        >
          <option value="0">Painting</option>
          <option value="1">Sculpture</option>
          <option value="2">Arhchitecture</option>
          <!-- Add more options for different art types -->
        </select>
      </div>
      <div>
        <label for="art-type-select">Search criteria:</label>
        <select
          id="art-type-select"
          v-model="searchP"
          class="form-select"
          required
        >
          <option value="0">Art name</option>
          <option value="1">Artist name</option>
          <!-- Add more options for different art types -->
        </select>
      </div>
    </form>
  </div>
</template>

<style scoped>
.search-popup {
  position: fixed;
  top: 47%;
  left: 209px;
  width: 20rem;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: white;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}
</style>

<script>
export default {
  name: "SearchBar",

  data() {
    return {
      searchQuery: "",
      artType: "0", // Default art type
      searchP: "0", // Default search criteria
      showSearchForm: false,
    };
  },
  methods: {
    search() {
      // Handle the search logic here
      console.log("Searching for:", this.searchQuery);
      this.$router.push({
        name: "SearchResultView",
        query: {
          q: this.searchQuery,
          type: this.artType,
          searchP: this.searchP,
        },
      });
      localStorage.setItem(
        "searchQ",
        JSON.stringify({
          q: this.searchQuery,
          type: this.artType,
          searchP: this.searchP,
        })
      );

      window.location.reload();
      console.log(this.searchQuery);
    },
    toggleSearchForm() {
      this.showSearchForm = !this.showSearchForm;
    },
  },
};
</script>
