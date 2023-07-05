<template>
    <div class="about-us">
        <background-image-component ref="backgroundImageRef">
            <BreadcrumbsComponent></BreadcrumbsComponent>
            <div class="content">
                <br>
                <div class="row">
                    <div class="col-sm-12" style="text-align: center">
                        <img id="logo" src="@/assets/ratio.png">
                    </div>
                </div>
                <br>
                <!-- <h1>O nama</h1> -->

                <div id="centered-content">
                    <div id="content-txt">
                        <div class="row">
                            <div class="col-sm-12" style="text-align: center;">
                                <h1>O nama</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12" style="text-align: center;">
                                <p style=" max-width: 40rem;">
                                Dobrodošli u našu online galeriju! Pristupite različitim umetninama, pišite nam poruke i šaljite ponude - sve na jednom mestu! Informišite se o najnovijim izložbama i pratite naše umetnike.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <p>Najbolji izgled stranice</p>
                <p>Najpopularnija stranica u oblasti umetnosti</p>

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6040.322611252452!2d20.439602769267562!3d44.81863110776904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6545727048c5%3A0xd676a195f8f19372!2z0JzRg9C30LXRmCDRgdCw0LLRgNC10LzQtdC90LUg0YPQvNC10YLQvdC-0YHRgtC4!5e0!3m2!1ssr!2srs!4v1687735484040!5m2!1ssr!2srs" 
                    width="800" 
                    height="450" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <footer-comp></footer-comp>
        </background-image-component>
        <nav-bar></nav-bar>
    </div>
</template>

<style scoped>
    #logo{
  width:70px;
  height: 70px;
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
    .about-us{
        text-align: center;
    }
    .content{
        z-index: 2;
        color:white;
    }
</style>

<script>
import NavBar from "@/components/NavBar.vue"
import BackgroundImageComponent from '@/components/BackgroundImageComponent.vue'
import FooterComp from '@/components/FooterComp.vue'
import BreadcrumbsComponent from "@/components/BreadcrumbsComponent.vue";
export default {
  components: { NavBar, BackgroundImageComponent, FooterComp, BreadcrumbsComponent },
  mounted() {
    this.setBackgroundImage();
  },
  methods: {
    setBackgroundImage(){
        this.$refs.backgroundImageRef.setBackgroundImage("https://images.unsplash.com/photo-1541367777708-7905fe3296c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1195&q=80");
    }
  }  
}
</script>