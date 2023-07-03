<template>
  <div id="artist">
    <b-card class="art-card">
      <div class="row no-gutters">
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
          <button @click="generatePDF()">pdf</button>
        </div>
      </div>
    </b-card>
  </div>
</template>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>

<script>
export default {
  name: "ArtistComponent",
  props: ["myartist"],
  methods: {
    generatePDF() {
      alert("uslo");
      // var jsonString = localStorage.getItem('allArtists');
      // var artists = JSON.parse(jsonString);

      //   const options = {
      //     filename: this.myartist.name + ".pdf",
      //     margin: 10,
      //     jsPDF: { format: "a4", orientation: "portrait" },
      //   };
      // html2pdf().set(options).from(element).save();
    },
  },
};
</script>
