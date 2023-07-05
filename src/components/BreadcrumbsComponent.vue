<template>
  <div>
    <p>{{ breadcrumb }}</p>
  </div>
</template>

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
