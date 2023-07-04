<template>
    <div class="contact-us">
        <background-image-component ref="backgroundImageRef">
            <div class="content">
                <div class="container" style="text-align: center">
                    <br>
                    <div class="row">
                        <div class="col-sm-12">
                            <h1>Kontakt</h1>
                        </div>
                    </div>
                    <br><br><br>
                    <div class="row">
                        <div class="col-sm-12">
                            <p>
                                Možete nas kontaktirati preko naših studentskih mejlova:
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6" style="text-align: right">
                            <b>Amela Kadrić</b>
                        </div>
                        <div class="col-sm-6" style="text-align: left">
                            <i>ka200..@student.etf.bg.ac.rs</i>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6" style="text-align: right">
                            <b>Anja Đurić</b>
                        </div>
                        <div class="col-sm-6" style="text-align: left">
                            <i>da200627@student.etf.bg.ac.rs</i>
                        </div>
                    </div>
                </div>
                <footer-comp></footer-comp>
            </div>
        </background-image-component>
        <nav-bar></nav-bar>
    </div>
</template>

<style scoped>
    .contact-us{
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
export default {
  components: { NavBar, BackgroundImageComponent, FooterComp },
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