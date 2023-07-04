<template>
  <div class="artists">
    <background-image-component ref="backgroundImgRef">
        <div class="container">
            <br>
            <div class="row">
                <div class="col-sm-12" style="text-align: center;">
                <h1>Artists</h1>
                </div>
            </div>
            <br><br>
            
            <div class="row">
                <div class="col-sm-12" style="text-align: center;">
                <div class="citation">
                    <p>We all know that art is not truth. Art is the lie by which we understand the truth, or at least the truth we are given to understand.</p>
                    <p>- Pablo Picasso</p>
                </div>
                </div>
            </div>
            <br><br>

            <show-artists-eng></show-artists-eng>

        </div>
        <footer-comp></footer-comp>
    </background-image-component>
    
    <NavBar></NavBar>
  </div>
</template>

<style scoped>

  h1{
    text-align: center;
    color:white;
  }

  .citation{
    color:white;
    font-style: italic;
  }
  .content{
    z-index: 2;
  }

</style>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import BackgroundImageComponent from '@/components/BackgroundImageComponent.vue';
import ShowArtistsEng from '@/components/ShowArtistsEng.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
  name: "HomeView",
  components: {
    NavBar,
    BackgroundImageComponent,
    ShowArtistsEng,
    FooterComp
  },
  mounted(){
    this.setBackgroundImage();
  },
  methods:{
    setBackgroundImage(){
      this.$refs.backgroundImgRef.setBackgroundImage('https://images.unsplash.com/photo-1541367777708-7905fe3296c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1195&q=80');
    }
  }
};
</script>
