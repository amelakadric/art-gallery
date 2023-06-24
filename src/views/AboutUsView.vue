<template>
    <div class="about-us">
        <background-image-component ref="backgroundImageRef">
            <div class="content">
                <br>
                <h1>O nama</h1>
                <br><br><br>
                <p>
                    Ovaj sajt predstavlja projekat za predmet Veb dizajn.
                </p>
                <p>Amela Kadrić 2020/</p>
                <p>Anja Đurić 2020/0627</p>
            </div>
        </background-image-component>
        <nav-bar></nav-bar>
    </div>
</template>

<style scoped>
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
export default {
  components: { NavBar, BackgroundImageComponent },
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