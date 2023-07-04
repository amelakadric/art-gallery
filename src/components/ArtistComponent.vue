<template>
  <div id="artist">
    <b-card class="art-card" style="width:40rem">
      <div class="row no-gutters" id="parent-container">
        <div class="col-md-4">
          <img :src="myartist.photo" alt="Image" class="card-image" />
        </div>
        <div class="col-md-4">
          <div class="card-body">
            <h5 class="card-title">{{ myartist.name }}</h5>
            <p class="card-text">{{ myartist.bio }}</p>
          </div>
        </div>
        <div class="col-md-4">
          <!-- <a href="@/assets/Edvard Munch.pdf" target="_blank"> -->
          <button @click="togglePdf(myartist.pdf)">pdf</button>
          <pdf-component id="pdf-comp" ref="pdfRef"></pdf-component>
          <!-- </a> -->
        </div>
      </div>
    </b-card>
  </div>
</template>

<style scoped>
#parent-container{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

#pdf-comp{
        position: fixed;
        top: 55%;
        left: 81rem;
        transform: translate(-50%, -50%);
        z-index: 9999;
        padding: 10px;
}

img {
  width: 100px;
  height: 100px;
}
.pdf-object {
  width: 100%;
  height: 400px;
}
</style>

<script>
import PdfComponent from './PdfComponent.vue';
export default {
  name: "ArtistComponent",
  components:{
    PdfComponent
  },
  props: ["myartist"],
  data(){
    return{
      showPdf: false
    }
  },
  methods: {
    togglePdf(mypdf){
      this.$refs.pdfRef.togglePdf(mypdf);
    }
  },
};
</script>
