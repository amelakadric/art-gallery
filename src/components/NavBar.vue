<template>
  <aside class="sidebar">
    <!-- button for clicking on collapsing menu -->
    <a href="#" class="btn" id="dropdown-menu-btn">...</a>

    <!-- search icon for collapsing search form -->
    <search-bar id="search-bar"></search-bar>
  </aside>
</template>

<style scoped>

#search-bar{
  margin-top: 200px;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  height: 100%;
  background-color: blue;
}

#dropdown-menu-btn {
  margin-top: 30px;
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

export default {
  components: { SearchBar },
  name: "NavBar"
};
</script>
