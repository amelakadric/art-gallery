<template>
  <div class="artists">
    <background-image-component ref="backgroundImgRef">
        <div class="container">
            <br>
            <div class="row">
                <div class="col-sm-12" style="text-align: center;">
                <h1>Umetnici</h1>
                </div>
            </div>
            <br><br>
            
            <div class="row">
                <div class="col-sm-12" style="text-align: center;">
                <div class="citation">
                    <p>Svi mi znamo da umetnost nije istina. Umetnost je laž pomoću koje shvatamo istinu, ili barem istina koja nam je data da shvatamo.</p>
                    <p>- Pablo Picasso</p>
                </div>
                </div>
            </div>
            <br><br>

            <show-artists></show-artists>

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
import ShowArtists from '@/components/ShowArtists.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
  name: "HomeView",
  components: {
    NavBar,
    BackgroundImageComponent,
    ShowArtists,
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
