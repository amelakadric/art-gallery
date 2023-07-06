<template>
  <div>
    <p>
      <a
        v-for="breadcrumb of breadcrumbs"
        :key="breadcrumb.link"
        :href="breadcrumb.link"
        ><span>></span>{{ breadcrumb.word }}</a
      >
    </p>
  </div>
</template>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
span,
span:hover {
  text-decoration: none;
}
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
      breadcrumbs: [],
    };
  },
  created() {
    console.log(this.$route.path);
    switch (this.$route.path) {
      case "/":
        this.breadcrumbs = [];
        this.breadcrumbs.push({ word: "Početna", link: "/homesrb" });
        break;
      case "/srb":
        this.breadcrumbs = [];
        this.breadcrumbs.push({ word: "Početna", link: "/homesrb" });
        break;
      case "/homesrb":
        this.breadcrumbs = [];
        this.breadcrumbs.push({ word: "Početna", link: "/homesrb" });
        break;
      case "/paintingssrb":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Početna", link: "/homesrb" },
          { word: "Slikarstvo", link: "/paintingssrb" }
        );
        break;
      case "/sculpturesrb":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Početna", link: "/homesrb" },
          { word: "Vajarstvo", link: "/sculpturesrb" }
        );
        break;
      case "/architecturessrb":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Početna", link: "/homesrb" },
          { word: "Arhitektura", link: "/architecturessrb" }
        );
        break;
      case "/myAccountsrb":
        this.breadcrumbs = [];
        this.breadcrumbs.push({ word: "Moj nalog", link: "/myAccountsrb" });
        break;
      case "/artistssrb":
        this.breadcrumbs = [];
        this.breadcrumbs.push({ word: "Umetnici", link: "/artistssrb" });
        break;
      case "/exhibitionsrb":
        this.breadcrumbs = [];
        this.breadcrumbs.push({ word: "Izložba", link: "/exhibitionsrb" });
        break;
      case "/contactussrb":
        this.breadcrumbs = [];
        this.breadcrumbs.push({ word: "Kontakt", link: "/contactussrb" });
        break;
      case "/aboutusssrb":
        this.breadcrumbs = [];
        this.breadcrumbs.push({ word: "O nama", link: "/aboutusssrb" });
        break;
      case "/eng":
        this.breadcrumbs = [];
        this.breadcrumbs.push({ word: "Home", link: "/eng" });
        break;
      case "/homeeng":
        this.breadcrumbs = [];
        this.breadcrumbs.push({ word: "Home", link: "/homeeng" });
        break;
      case "/paintingseng":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Home", link: "/homeeng" },
          { word: "Paintings", link: "/paintingseng" }
        );
        break;
      case "/sculptureseng":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Home", link: "/homeeng" },
          { word: "Sculptures", link: "/sculptureseng" }
        );
        break;
      case "/architectureseng":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Home", link: "/homeeng" },
          { word: "Architecture", link: "/architectureseng" }
        );
        break;
      case "/myAccounteng":
        this.breadcrumbs = [];
        this.breadcrumbs.push({ word: "My account", link: "/myAccounteng" });
        break;
      case "/artistseng":
        this.breadcrumbs = [];
        this.breadcrumbs.push({ word: "Artists", link: "/artistseng" });
        break;
      case "/exhibitionseng":
        this.breadcrumbs = [];
        this.breadcrumbs.push({ word: "Exhibition", link: "/exhibitionseng" });
        break;
      case "/contactuseng":
        this.breadcrumbs = [];
        this.breadcrumbs.push({ word: "Contact", link: "/exhibitionseng" });
        break;
      case "/aboutuseng":
        this.breadcrumbs = [];
        this.breadcrumbs.push({ word: "About us", link: "/aboutuseng" });
        break;
      case "/artworksrb/0":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Početna", link: "/homesrb" },
          { word: "Slikarstvo", link: "/paintingssrb" },
          { word: "Vrisak", link: "/artworksrb/0" }
        );
        break;
      case "/artworksrb/1":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Početna", link: "/homesrb" },
          { word: "Slikarstvo", link: "/paintingssrb" },
          { word: "Poslednja večera", link: "/artworksrb/1" }
        );
        break;
      case "/artworksrb/2":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Početna", link: "/homesrb" },
          { word: "Slikarstvo", link: "/paintingssrb" },
          { word: "Mona Liza", link: "/artworksrb/2" }
        );
        break;
      case "/artworksrb3":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Početna", link: "/homesrb" },
          { word: "Slikarstvo", link: "/paintingssrb" },
          { word: "Bacač diska", link: "/artworksrb/3" }
        );
        break;
      case "/artworksrb/4":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Početna", link: "/homesrb" },
          { word: "Slikarstvo", link: "/paintingssrb" },
          { word: "Mikelanđelov David", link: "/artworksrb/4" }
        );
        break;
      case "/artworksrb/5":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Početna", link: "/homesrb" },
          { word: "Slikarstvo", link: "/paintingssrb" },
          { word: "Miloska Venera", link: "/artworksrb/5" }
        );
        break;
      case "/artworksrb/6":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Početna", link: "/homesrb" },
          { word: "Slikarstvo", link: "/paintingssrb" },
          { word: "La Sagrada Familia", link: "/artworksrb/6" }
        );
        break;
      case "/artworksrb/7":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Početna", link: "/homesrb" },
          { word: "Slikarstvo", link: "/paintingssrb" },
          { word: "Krivi toranj u Pizi", link: "/artworksrb/7" }
        );
        break;
      case "/artworksrb/8":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Početna", link: "/homesrb" },
          { word: "Slikarstvo", link: "/paintingssrb" },
          { word: "Taj Mahal", link: "/artworksrb/8" }
        );
        break;
      case "/artworkeng/0":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Home", link: "/homeeng" },
          { word: "Painting", link: "/paintingseng" },
          { word: "The Scream", link: "/artworkeng/0" }
        );
        break;
      case "/artworkeng/1":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Home", link: "/homeeng" },
          { word: "Painting", link: "/paintingseng" },
          { word: "The Last Supper", link: "/artworkeng/1" }
        );
        break;
      case "/artworkeng/2":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Home", link: "/homeeng" },
          { word: "Painting", link: "/paintingseng" },
          { word: "Mona Lisa", link: "/artworkeng/2" }
        );
        break;
      case "/artworkeng/3":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Home", link: "/homeeng" },
          { word: "Painting", link: "/paintingseng" },
          { word: "Discus Thrower", link: "/artworkeng/3" }
        );
        break;
      case "/artworkeng/4":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Home", link: "/homeeng" },
          { word: "Painting", link: "/paintingseng" },
          { word: "David", link: "/artworkeng/4" }
        );
        break;
      case "/artworkeng/5":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Home", link: "/homeeng" },
          { word: "Painting", link: "/paintingseng" },
          { word: "Milos Venus", link: "/artworkeng/5" }
        );
        break;
      case "/artworkeng/6":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Home", link: "/homeeng" },
          { word: "Painting", link: "/paintingseng" },
          { word: "La Sagrada Familia", link: "/artworkeng/6" }
        );
        break;
      case "/artworkeng/7":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Home", link: "/homeeng" },
          { word: "Painting", link: "/paintingseng" },
          { word: "The Leaning Tower of Pisa", link: "/artworkeng/7" }
        );
        break;
      case "/artworkeng/8":
        this.breadcrumbs = [];
        this.breadcrumbs.push(
          { word: "Home", link: "/homeeng" },
          { word: "Painting", link: "/paintingseng" },
          { word: "Taj Mahal", link: "/artworkeng/8" }
        );
        break;
    }
  },
};
</script>
