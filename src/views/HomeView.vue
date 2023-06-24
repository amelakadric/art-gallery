<template>
  <div class="home">
    <div class="bg-image">
      <div class="bg-wrapper">
        <div class="content">
          <br>
          <h1>Početna</h1>
          <br>
          <br>
          <div class="citation">
            <p>Svi mi znamo da umetnost nije istina. Umetnost je laž pomoću koje shvatamo istinu, ili barem istina koja nam je data da shvatamo.</p>
            <p>- Pablo Picasso</p>
          </div>
          <br>
          <br>
          <card-component></card-component>
        </div>
      </div>
    </div>
    
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

  .bg-image{
      position: relative;
      background-image: url('https://images.unsplash.com/photo-1541367777708-7905fe3296c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1195&q=80');
      background-repeat: no-repeat;
      background-size: cover;
      width: 100vw;
      height: 100vh;
      overflow-x: hidden;
  }
  .content{
    z-index: 2;
  }
  .bg-wrapper{
        margin-left: 65px;
        width:100vw;
        height:100vh;
        background-color: rgba(0, 0, 0, 0.35);
        text-align: center;
        z-index: 2;
  }
</style>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CardComponent from '@/components/CardComponent.vue';

export default {
  name: "HomeView",
  components: {
    NavBar,
    CardComponent,
  },
};
</script>
