<template>
    <div v-show="showSearchForm" class="search-popup">
        <form @submit.prevent="search">
            <input type="text" v-model="searchQuery" placeholder="Search">
            <button type="submit">Search</button>
        </form>
    </div>
</template>

<style scoped>
    .search-popup {
        position: fixed;
        top: 46%;
        left: 245px;
        transform: translate(-50%, -50%);
        z-index: 9999;
        background-color: white;
        padding: 10px;
        border: 1px solid #ccc;
    }
</style>

<script>
export default{
    name: "SearchBar",
    data() {
        return {
        searchQuery: '',
        showSearchForm: false
        };
    },
    methods: {
        search() {
        // Handle the search logic here
        console.log('Searching for:', this.searchQuery);
    },
    toggleSearchForm() {
        this.showSearchForm = !this.showSearchForm;
    }
  }
}
</script>
