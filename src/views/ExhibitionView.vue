<template>
  <div class="exhibition">
    <background-image-component ref="backgroundImgRef">
      <BreadcrumbsComponent></BreadcrumbsComponent>
      <div class="content">
        <div class="container">
          <br />
          <div class="row">
            <div class="col-sm-12">
              <h1>Izložba: Umetnost u doba renesanse</h1>
            </div>
          </div>
          <br /><br />
          <div id="centered-content">
            <div id="content-txt">
              <div class="row">
                <div class="col-sm-12">
                  <p>Otkrijte sjajnu epohu renesanse na našoj izložbi!</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <p>
                    Pozivamo vas da se pridružite jedinstvenoj izložbi koja će
                    vas odvesti na putovanje kroz vreme do zlatnog doba
                    renesanse. Ova izložba će oživeti duh umetnosti, nauke i
                    humanizma koje su obeležile tu važnu epohu. Istražite
                    umetnička remek-dela velikih majstora renesanse kao što su
                    Leonardo da Vinči, Mikelanđelo, Rafaello i Donatelo.
                    Otkrijte njihove ikonične slike, skulpture i arhitektonska
                    dostignuća koja su uticala na evoluciju umetnosti i
                    oblikovala svet umetnosti kakav danas poznajemo.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <p>
                    Pronađite se okruženi prelepim portretima, pejzažima,
                    mitološkim scenama i religijskim motivima koji su prožeti
                    novim smislom za perspektivu, svetlost i anatomsku
                    preciznost. Osetite izuzetnu veštinu majstora renesanse koji
                    su stvarali dela koja su ostala simboli vrhunskog izraza
                    umetnosti.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <p>
                    Prošetajte kroz replike renesansnih ateljea i otkrijte tajne
                    stvaranja umetničkih dela. Upoznajte se sa tehnikama
                    korišćenim u slikarstvu, skulpturi i arhitekturi, kao i sa
                    samim procesom stvaranja umetničkog dela tokom renesanse.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <p>
                    Izložba će vas takođe upoznati sa ključnim idejama i
                    filozofijom renesanse, koja je donela revoluciju u načinu
                    razmišljanja o svetu. Saznajte više o humanizmu, otkrićima,
                    naučnim dostignućima i promenama u društvenim vrednostima
                    koje su oblikovale epohu. Ova izložba pruža jedinstvenu
                    priliku da uronite u svet renesanse, da osetite njen duh i
                    da se inspirišete njenom lepotom i inovacijama.
                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12">
                  <p>Dalje informacije vezane za izložbu:</p>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6" style="text-align: right">
                  <b>Datum:</b>
                </div>
                <div class="col-sm-6">
                  <i>01-07-2023</i>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6" style="text-align: right">
                  <b>Vreme:</b>
                </div>
                <div class="col-sm-6">
                  <i>18h</i>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-6" style="text-align: right">
                  <b>Mesto:</b>
                </div>
                <div class="col-sm-6">
                  <i>Muzej Savremenih umetnosti</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer-comp></footer-comp>
    </background-image-component>
    <nav-bar></nav-bar>
  </div>
</template>

<style scoped>
.exhibition {
  text-align: center;
}
.content {
  z-index: 2;
  color: white;
}
#centered-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
#content-txt {
  text-align: justify;
  width: 600px;
}
</style>

<script>
import BackgroundImageComponent from "@/components/BackgroundImageComponent.vue";
import NavBar from "@/components/NavBar.vue";
import FooterComp from "@/components/FooterComp.vue";
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent.vue";
export default {
  name: "ExhibitionView",
  components: {
    BackgroundImageComponent,
    NavBar,
    FooterComp,
    BreadcrumbsComponent
  },
  mounted() {
    this.setBackgroundImage();
  },
  methods: {
    setBackgroundImage() {
      this.$refs.backgroundImgRef.setBackgroundImage(
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEyL2xyL3VtZXN2a3NuZ28yNjY2LWltYWdlLmpwZw.jpg"
      );
    },
  },
};
</script>
