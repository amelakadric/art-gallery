<template>
  <div>
    <div class="container">
      <div class="row" style="align-items: center">
        <div class="col-md-6">
          <b-card class="art-card">
            <img
              src="https://images.rawpixel.com/image_400/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGR2YW5nb2doLXNudmdyb2IuanBn.jpg"
              alt="Image"
              class="card-image"
            />
            <div class="card-body">
              <h5 class="card-title">Slikarstvo</h5>
            </div>
          </b-card>
        </div>
        <div class="col-md-6">
          <b-card class="art-card">
            <img
              src="https://images.unsplash.com/photo-1558611913-d707111c702e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2N1bHB0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Image"
              class="card-image"
            />
            <div class="card-body">
              <h5 class="card-title">Vajarstvo</h5>
            </div>
          </b-card>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-md-6">
          <b-card class="art-card">
            <img
              src="https://images.unsplash.com/photo-1542460631-89dd12cd704c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFyY2hpdGVjdHVyZSUyMG9sZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image"
              class="card-image"
            />
            <div class="card-body">
              <h5 class="card-title">Arhitektura</h5>
            </div>
          </b-card>
        </div>
        <div class="col-md-6">
          <b-card class="art-card">
            <img
              src="https://images.unsplash.com/photo-1569783721854-33a99b4c0bae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0JTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Image"
              class="card-image"
            />
            <div class="card-body">
              <h5 class="card-title">Izložba</h5>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "bootstrap/dist/css/bootstrap.css";

.card-image {
  width: 35rem;
  height: 15rem;
  object-fit: cover; /* Preserve aspect ratio and cover the entire space */
}
.art-card {
  width: 40rem;
  height: 30rem;
}

.art-card:hover {
  text-decoration: underline;
  text-decoration-color: #2a9cd1;
}
</style>

<script>
export default {
  name: "CardComponent",
};
</script>
