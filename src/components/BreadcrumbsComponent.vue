<template>
  <div>
    <p>{{ breadcrumb }}</p>
  </div>
</template>

<style scoped>
p {
  text-align: left;
  margin-left: 1rem;
  color: rgb(245, 216, 183);
  font-style: italic;
  text-shadow: 2px 1px 1px black;
}
</style>

<script>
export default {
  name: "BreadcrumbsComponent",
  data() {
    return {
      breadcrumb: "",
    };
  },
  created() {
    console.log(this.$route.path);
    switch (this.$route.path) {
      case "/homesrb":
        this.breadcrumb = "Početna";
        break;
      case "/paintingssrb":
        this.breadcrumb = "Početna>Slikarstvo";
    }
  },
};
</script>
