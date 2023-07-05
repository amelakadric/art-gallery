<template>
  <div>
    <p>{{ breadcrumb }}</p>
  </div>
</template>

<style scoped>
p {
  text-align: left;
  margin-left: 1rem;
  color: rgb(245, 216, 183);
  font-style: italic;
  text-shadow: 2px 1px 1px black;
}
</style>

<script>
export default {
  name: "BreadcrumbsComponent",
  data() {
    return {
      breadcrumb: "",
    };
  },
  created() {
    console.log(this.$route.path);
    switch (this.$route.path) {
      case "/homesrb":
        this.breadcrumb = "Početna";
        break;
      case "/paintingssrb":
        this.breadcrumb = "Početna>Slikarstvo";
        break;
      case "/sculpturesrb":
        this.breadcrumb = "Početna>Vajarstvo";
        break;
      case "/architecturessrb":
        this.breadcrumb = "Početna>Arhitektura";
        break;
      case "/myAccountsrb":
        this.breadcrumb = "Moj nalog";
        break;
      case "/artistssrb":
        this.breadcrumb = "Umetnici";
        break;
      case "/exhibitionsrb":
        this.breadcrumb = "Izložba";
        break;
      case "/contactussrb":
        this.breadcrumb = "Kontakt";
        break;
      case "/aboutusssrb":
        this.breadcrumb = "O nama";
        break;
      case "/homeeng":
        this.breadcrumb = "Home";
        break;
      case "/paintingseng":
        this.breadcrumb = "Home>Paintings";
        break;
      case "/sculptureseng":
        this.breadcrumb = "Home>Sculptures";
        break;
      case "/architectureseng":
        this.breadcrumb = "Home>Architecture";
        break;
      case "/myAccounteng":
        this.breadcrumb = "My account";
        break;
      case "/artistseng":
        this.breadcrumb = "Artists";
        break;
      case "/exhibitionseng":
        this.breadcrumb = "Exhibition";
        break;
      case "/contactuseng":
        this.breadcrumb = "Contact";
        break;
      case "/aboutuseng":
        this.breadcrumb = "About us";
        break;
      case "/artworksrb/0":
        this.breadcrumb = "Početna>Slikarstvo>Vrisak"
        break;
      case "/artworksrb/1":
        this.breadcrumb = "Početna>Slikarstvo>Poslednja večera"
        break;
      case "/artworksrb/2":
        this.breadcrumb = "Početna>Slikarstvo>Mona Liza"
        break;
      case "/artworksrb3":
        this.breadcrumb = "Početna>Vajarstvo>Bacač diska"
        break;
      case "/artworksrb/4":
        this.breadcrumb = "Početna>Vajarstvo>Mikelanđelov David"
        break;
      case "/artworksrb/5":
        this.breadcrumb = "Početna>Vajarstvo>Miloska Venera"
        break;
      case "/artworksrb/6":
        this.breadcrumb = "Početna>Arhitektura>La Sagrada Familia"
        break;
      case "/artworksrb/7":
        this.breadcrumb = "Početna>Arhitektura>Krivi toranj u Pizi"
        break;
      case "/artworksrb/8":
        this.breadcrumb = "Početna>Arhitektura>Taj Mahal"
        break;
      case "/artworkeng/0":
        this.breadcrumb = "Home>Painting>The Scream"
        break;
      case "/artworkeng/1":
        this.breadcrumb = "Home>Painting>The Last Supper"
        break;
      case "/artworkeng/2":
        this.breadcrumb = "Home>Painting>Mona Lisa"
        break;
      case "/artworkeng/3":
        this.breadcrumb = "Home>Sculpture>Discus Thrower"
        break;
      case "/artworkeng/4":
        this.breadcrumb = "Home>Sculpture>David"
        break;
      case "/artworkeng/5":
        this.breadcrumb = "Home>Sculpture>Milos Venus"
        break;
      case "/artworkeng/6":
        this.breadcrumb = "Home>Architecture>La Sagrada Familia"
        break;
      case "/artworkeng/7":
        this.breadcrumb = "Home>Architecture>The Leaning Tower of Pisa"
        break;
      case "/artworkeng/8":
        this.breadcrumb = "Home>Architecture>Taj Mahal"
        break;
    }
  },
};
</script>
