<template>
  <div v-show="showSearchForm" class="search-popup">
    <form @submit.prevent="search">
      <input type="text" v-model="searchQuery" placeholder="Search" required />
      <button type="submit">Search</button>
      <div>
        <label for="art-type-select">Art Type:</label>
        <select id="art-type" v-model="artType" required>
          <option value="0">Painting</option>
          <option value="1">Sculpture</option>
          <option value="2">Arhchitecture</option>
          <!-- Add more options for different art types -->
        </select>
      </div>
      <div>
        <label for="art-type-select">Search criteria:</label>
        <select id="art-type" v-model="searchP" required>
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
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: white;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>

<script>
export default {
  name: "SearchBar",

  data() {
    return {
      q: this.searchQuery,
      type: this.artType,
      searchP: this.searchP,
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
    },
    toggleSearchForm() {
      this.showSearchForm = !this.showSearchForm;
    },
  },
};
</script>
