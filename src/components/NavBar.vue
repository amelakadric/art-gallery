<template>
  <aside class="sidebar">
    <!-- dropdown menu -->
    <a @click="toggleDropDownMenu" class="btn" id="dropdown-menu-btn">...</a>
    <drop-down-menu id="drop-down-menu" ref="dropDownMenuRef"></drop-down-menu>

    <!-- search bar -->
    <div id="search-btn-container">
      <button @click="toggleSearchForm()" id="search-btn">
        <i class="fa fa-search" id="search-icon"></i>
      </button>
    </div>
    <search-bar id="search-bar" ref="searchRef"></search-bar>

    <a @click="changeLanguage()" class="btn" id="language-btn">{{
      setLanguage
    }}</a>
  </aside>
</template>

<style scoped>
.fa.fa-search {
  color: white;
}

#language-btn {
  color: white;
}

#search-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}

#search-btn {
  background-color: transparent;
  border: none;
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 65px;
  height: 100%;
  background-color: #2d89ba;
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
  transition: all 0.2s;
  position: relative;
}

.btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
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
  transition: all 0.3s;
}

.btn:hover::after {
  background-color: rgb(0, 238, 255);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
</style>

<script>
import SearchBar from "./SearchBar.vue";
import DropDownMenu from "./DropDownMenu.vue";

export default {
  components: { SearchBar, DropDownMenu },
  name: "NavBar",
  data() {
    return {
      setLanguage: "RS",
    };
  },
  methods: {
    toggleSearchForm() {
      this.$refs.searchRef.toggleSearchForm();
    },
    toggleDropDownMenu() {
      this.$refs.dropDownMenuRef.toggleDropDownMenu();
    },
    changeLanguage() {
      if (this.setLanguage == "RS") this.setLanguage = "ENG";
      else this.setLanguage = "RS";
      localStorage.setItem("language", this.setLanguage);
      window.location.reload();
    },
  },
  // watch:{
  //   changeLang(){
  //     let lang = localStorage.getItem("language");
  //     alert("uslo");
  //     if(lang == "RS"){
  //       this.$router.push('');
  //     }
  //     else{
  //       this.$router.push('eng');
  //     }
  //   localStorage.setItem("language", this.setLanguage);

  //   }
  // },
  created() {
    // localStorage.setItem("language", this.setLanguage);
    this.setLanguage = localStorage.getItem("language");

    // alert(this.$route.path);
    let path_route = this.$route.path;
    let param = -1;
    if (
      !isNaN(parseInt(path_route.substring(path_route.lastIndexOf("/") + 1)))
    ) {
      param = parseInt(path_route.substring(path_route.lastIndexOf("/") + 1));
    }
    let path = path_route.substring(1, path_route.length - 3);

    if (this.setLanguage == "RS") {
      if (param != -1) {
        path = path_route.substring(1, path_route.length - 5);
        // this.$router.push({ path: ``, params: { id: param }}).catch(() => {});
        this.$router.replace({ path: `/${path}srb/${param}` }).catch(() => {});
      } else this.$router.replace(path + "srb").catch(() => {});
    } else {
      if (param != -1) {
        path = path_route.substring(1, path_route.length - 5);
        this.$router.replace({ path: `/${path}eng/${param}` }).catch(() => {});
      } else this.$router.replace(path + "eng").catch(() => {});
    }

    localStorage.setItem("language", this.setLanguage);
  },
};
</script>
