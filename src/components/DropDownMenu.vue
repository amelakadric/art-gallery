<template>
  <div v-show="showDropDownMenu" class="dropdown">
    <ul>
      <router-link to="/homesrb"><li>{{pocetna}}</li></router-link>
      <a href="/myAccountsrb"><li>{{mojnalog}}</li></a>
      <!-- <a href="/arts"><li>Umetnine</li></a> -->
      <li @mouseenter="toggleArts()">{{umetnine}}
        <ul v-show="showArts">
          <router-link to="/paintingssrb">
            <li @mouseenter="togglePaintings()">{{slikarstvo}}
              <ul v-show="showPaintings">
                <router-link :to="{
                  name: 'ArtworkDetailsViewSrb',
                  params: { id: 0 },}"><li style="font-size: 30px">{{slika1}}</li></router-link>
                <router-link :to="{
                  name: 'ArtworkDetailsViewSrb',
                  params: { id: 1 },}"><li style="font-size: 30px">{{slika2}}</li></router-link>
                <router-link :to="{
                  name: 'ArtworkDetailsViewSrb',
                  params: { id: 2 },}"><li style="font-size: 30px">{{slika3}}</li></router-link>
              </ul>
            </li></router-link>
          <router-link to="/sculpturessrb">
            <li @mouseenter="toggleSculptures()">{{vajarstvo}}
              <ul v-show="showSculptures" class="inside">
                <router-link :to="{
                  name: 'ArtworkDetailsViewSrb',
                  params: { id: 3 },}"><li style="font-size: 30px">{{vaj1}}</li></router-link>
                <router-link :to="{
                  name: 'ArtworkDetailsViewSrb',
                  params: { id: 4 },}"><li style="font-size: 30px">{{vaj2}}</li></router-link>
                <router-link :to="{
                  name: 'ArtworkDetailsViewSrb',
                  params: { id: 5 },}"><li style="font-size: 30px">{{vaj3}}</li></router-link>
              </ul>
            </li></router-link>
          <router-link to="/architecturesrb">
            <li @mouseenter="toggleArchitecture()">{{arhitektura}}
              <ul v-show="showArchitecture" class="inside">
                <router-link :to="{
                  name: 'ArtworkDetailsViewSrb',
                  params: { id: 6 },}"><li style="font-size: 30px">{{arh1}}</li></router-link>
                <router-link :to="{
                  name: 'ArtworkDetailsViewSrb',
                  params: { id: 7 },}"><li style="font-size: 30px">{{arh2}}</li></router-link>
                <router-link :to="{
                  name: 'ArtworkDetailsViewSrb',
                  params: { id: 8 },}"><li style="font-size: 30px">{{arh3}}</li></router-link>
              </ul>
            </li>
          </router-link>
        </ul>
      </li>
      
      <router-link to="/exhibitionsrb"><li>{{izlozba}}</li></router-link>
      <router-link to="/artistssrb"><li>{{umetnici}}</li></router-link>
      <router-link to="/contactussrb"><li>{{kontakt}}</li></router-link>
      <router-link to="/aboutussrb"><li>{{onama}}</li></router-link>
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
      showArchitecture: false,
      pocetna: '',
      mojnalog: '',
      umetnine: '',
      slikarstvo: '',
      arhitektura: '',
      vajarstvo: '',
      slika1: '',
      slika2: '',
      slika3: '',
      vaj1: '',
      vaj2: '',
      vaj3: '',
      arh1: '',
      arh2: '',
      arh3: '',
      izlozba: '',
      umetnici:'',
      kontakt: '',
      onama: ''
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
  created(){
    if(localStorage.getItem("language") == "RS"){
      this.pocetna = "Početna";
      this.mojnalog = "Moj nalog";
      this.umetnine = "Umetnine";
      this.slikarstvo = "Slikarstvo";
      this.arhitektura = "Arhitektura";
      this.vajarstvo = "Vajarstvo";
      this.izlozba = "Izložba";
      this.slika1 = "Vrisak - Edvund Mund";
      this.slika2 = "Poslednja večera - Leonardo da Vinči";
      this.slika3 = "Mona Liza - Leonardo da Vinči";
      this.vaj1 = "Bacač diska - Miron";
      this.vaj2 = "Mikelanđelov David - Mikelanđelo Buanoroti";
      this.vaj3 = "Miloska Venera - Aleksandros od Antilohije";
      this.arh1 = "La Sagrada Familia - Antoni Gaudi";
      this.arh2 = "Krivi toranj u Pizi - Bonano Pizano";
      this.arh3 = "Taj Mahal - Ustad Ahmad Lahori";
      this.kontakt = "Kontakt";
      this.onama = "O nama";
      this.umetnici = "Umetnici";
    }
    else{
      this.pocetna = "Home";
      this.mojnalog = "My account";
      this.umetnine = "Arts";
      this.slikarstvo = "Painting";
      this.vajarstvo = "Sculpture";
      this.arhitektura = "Architecture";
      this.slika1 = "The Scream - Edvund Munch";
      this.slika2 = "Last supper - Leonardo da Vinci";
      this.slika3 = "Mona Lisa - Leonardo da Vinci";
      this.vaj1 = "Disk Thrower - Miron";
      this.vaj2 = "David - Michelangelo Buonarroti";
      this.vaj3 = "Venus - Aleksandros of Antilohije";
      this.arh1 = "La Sagrada Familia - Antoni Gaudi";
      this.arh2 = "Leaning Tower of Pisa - Bonano Pizano";
      this.arh3 = "Taj Mahal - Ustad Ahmad Lahori";
      this.izlozba = "Exhibition";
      this.kontakt = "Contact";
      this.onama = "About us";
      this.umetnici = "Artists";
    }
  }
};
</script>
