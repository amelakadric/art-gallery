<template>
  <div class="home">
    <!-- <img src="../assets/home_page_monet.jpg" alt="Background Image" class="background-image" /> -->
    <div
      class="bg-image"
      style="background-image: url('https://images.unsplash.com/photo-1541367777708-7905fe3296c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1195&q=80');
      height: 100vh;
      filter: blur(8px);
    "
  ></div>
    <!-- <div class="bg-image"></div> -->
    <NavBar></NavBar>
  </div>
</template>

<style scoped>
  /* :global(body){
    width: 100%;
    height: 100%;
    background-image: url('../assets/home_page_monet.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.5);
  }
  .home{
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.5);
    z-index: 1;
  } */
  /* .home {
    position: relative;
    background-image: url("../assets/home_page_monet.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  } */

  /* .home{
    width: 100vw;
    height: 100vh;
    padding-left: 20px;
  }

  .background-image {
    position: relative;
    top: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    filter: blur(8px);
    -webkit-filter: blur(8px);
    height: 100%;
  } */
</style>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
};
</script>
