<template>
  <div v-show="showDropDownMenu" class="dropdown">
    <ul>
      <router-link to="/home"><li>Početna</li></router-link>
      <a href="/myAccount"><li>Moj nalog</li></a>
      <!-- <a href="/arts"><li>Umetnine</li></a> -->
      <li @mouseenter="toggleArts()">Umetnine
        <ul v-show="showArts">
          <router-link to="/paintings">
            <li @mouseenter="togglePaintings()">Slikarstvo
              <ul v-show="showPaintings">
                <router-link :to="{
                  name: 'ArtworkDetailsView',
                  params: { id: 0 },}"><li style="font-size: 30px">Vrisak - Edvund Mund</li></router-link>
                <router-link :to="{
                  name: 'ArtworkDetailsView',
                  params: { id: 1 },}"><li style="font-size: 30px">Poslednja večera - Leonardo da Vinči</li></router-link>
                <router-link :to="{
                  name: 'ArtworkDetailsView',
                  params: { id: 2 },}"><li style="font-size: 30px">Mona Liza - Leonardo da Vinči</li></router-link>
              </ul>
            </li></router-link>
          <router-link to="/sculptures">
            <li @mouseenter="toggleSculptures()">Vajarstvo
              <ul v-show="showSculptures" class="inside">
                <router-link :to="{
                  name: 'ArtworkDetailsView',
                  params: { id: 3 },}"><li style="font-size: 30px">Bacač diska - Miron</li></router-link>
                <router-link :to="{
                  name: 'ArtworkDetailsView',
                  params: { id: 4 },}"><li style="font-size: 30px">Mikelanđelov David - Mikelanđelo Buanoroti</li></router-link>
                <router-link :to="{
                  name: 'ArtworkDetailsView',
                  params: { id: 5 },}"><li style="font-size: 30px">Miloska Venera - Aleksandros od Antilohije</li></router-link>
              </ul>
            </li></router-link>
          <router-link to="/architecture">
            <li @mouseenter="toggleArchitecture()">Arhitektura
              <ul v-show="showArchitecture" class="inside">
                <router-link :to="{
                  name: 'ArtworkDetailsView',
                  params: { id: 6 },}"><li style="font-size: 30px">La Sagrada Familia - Antoni Gaudi</li></router-link>
                <router-link :to="{
                  name: 'ArtworkDetailsView',
                  params: { id: 7 },}"><li style="font-size: 30px">Krivi toranj u Pizi - Bonano Pizano</li></router-link>
                <router-link :to="{
                  name: 'ArtworkDetailsView',
                  params: { id: 8 },}"><li style="font-size: 30px">Taj Mahal - Ustad Ahmad Lahori</li></router-link>
              </ul>
            </li>
          </router-link>
        </ul>
      </li>
      
      <router-link to="/exhibition"><li>Izložba</li></router-link>
      <router-link to="/artists"><li>Umetnici</li></router-link>
      <router-link to="/contactus"><li>Kontakt</li></router-link>
      <router-link to="/aboutus"><li>O nama</li></router-link>
    </ul>
  </div>
</template>

<style scoped>
li {
  font-family: "Roboto", sans-serif;
  color: white;
}
.dropdown {
  overflow-y: auto;
  margin-left: 65px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

ul {
  list-style-type: none;
  margin-top: 5vh;
  margin-left: 2vw;
}
li {
  text-align: left;
  font-size: 50px;
}

li:hover {
  text-decoration: underline;
  text-decoration-color: #2a9cd1;
}

a {
  text-decoration: none;
}
</style>

<script>
export default {
  name: "DropDownMenu",
  data() {
    return {
      showDropDownMenu: false,
      showArts: false,
      showPaintings: false,
      showSculptures: false,
      showArchitecture: false
    };
  },
  methods: {
    toggleDropDownMenu() {
      this.showDropDownMenu = !this.showDropDownMenu;
    },
    toggleArts(){
      this.showArts = !this.showArts;
    },
    togglePaintings(){
      this.showPaintings = !this.showPaintings;
    },
    toggleSculptures(){
      this.showSculptures = !this.showSculptures;
    },
    toggleArchitecture(){
      this.showArchitecture = !this.showArchitecture;
    }
  },
};
</script>
