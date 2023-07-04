<template>
  <div class="text-center">
    <div class="row">
      
      <div class="col-md-6 mb-4">
        <router-link to="/paintings">
        <b-card img-left class="text-left card-component">
          <img
            src="https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGR2YW5nb2doLXNudmdyb2IuanBn.jpg"
            alt="Image"
            class="card-image"
          />
          <b-card-title class="mt-5"><h2>Painting</h2></b-card-title>
        </b-card>
        </router-link>
      </div>
      <div class="col-md-6 mb-4">
        <router-link to="/sculptures">
          <b-card img-left class="text-left card-component">
            <img
              src="https://images.unsplash.com/photo-1558611913-d707111c702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2N1bHB0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Image"
              class="card-image"
            />
            <b-card-title class="mt-5"><h2>Sculpture</h2></b-card-title>
          </b-card>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-4">
        <router-link to="/architecture">
          <b-card img-left class="text-left card-component">
            <img
              src="https://images.unsplash.com/photo-1542460631-89dd12cd704c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFyY2hpdGVjdHVyZSUyMG9sZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image"
              class="card-image"
            />
            <b-card-title class="mt-5"><h2>Architecture</h2></b-card-title>
          </b-card>
        </router-link>
      </div>
      <div class="col-md-6 mb-4">
        <router-link to="/exhibition">
          <b-card img-left class="text-left card-component">
            <img
              src="https://images.unsplash.com/photo-1569783721854-33a99b4c0bae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0JTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image"
              class="card-image"
            />
            <b-card-title class="mt-5"><h2>Exhibition</h2></b-card-title>
          </b-card>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "bootstrap/dist/css/bootstrap.css";

.card-component {
  color: white;
  border: 1px solid transparent;
  background-color: rgba(247, 244, 244, 0.1) !important;
  backdrop-filter: blur(10px);
  width: 35rem;
  height: 20rem;
  text-align: center;
  text-decoration: none;
  
}

.card-component:hover{
  text-decoration: underline;
  text-decoration-color: #2a9cd1;
}

img {
  align-self: center;
  max-width: 12rem;
  max-height: 10rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 5px black;
}
</style>

<script>
export default {
  name: "CardComponent",
};
</script>
