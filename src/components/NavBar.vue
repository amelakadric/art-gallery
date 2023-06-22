<template>
  <aside class="sidebar">

    <!-- dropdown menu -->
    <a @click="toggleDropDownMenu" class="btn" id="dropdown-menu-btn">...</a>
    <drop-down-menu id="drop-down-menu" ref="dropDownMenuRef"></drop-down-menu>

    <!-- search bar -->
    <div id="search-btn-container">
      <button @click="toggleSearchForm" id="search-btn"><i class="fa fa-search" id="search-icon"></i></button>
    </div>
    <search-bar id="search-bar" ref="searchRef"></search-bar>
  </aside>
</template>

<style scoped>
  .fa.fa-search{
      color: white;
  }

  #search-btn-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
  }

  #search-btn{
    background-color: transparent;
    border: none;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background-color: #2a9cd1;
  }

  #dropdown-menu-btn {
    margin-top: 30px;
    color: white;
  }

  .btn:link,
  .btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all .2s;
  position: relative;
  }

  .btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, .5);
  }

  .btn:active {
  transform: translateY(-3px);
  }

  .btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  transition: all .3s;
  } 

  .btn:hover::after {
  background-color: rgb(0, 238, 255);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
  }

</style>

<script>
import SearchBar from './SearchBar.vue';
import DropDownMenu from './DropDownMenu.vue'

export default {
  components: { SearchBar, DropDownMenu },
  name: "NavBar",
  methods: {
    toggleSearchForm() {
      this.$refs.searchRef.toggleSearchForm();
    },
    toggleDropDownMenu(){
      this.$refs.dropDownMenuRef.toggleDropDownMenu();
    }
  }
};
</script>
