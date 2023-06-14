<template>
    <div>
        <b-button v-b-toggle.collapse-1 variant="primary"><i class="fa fa-search" id="search-icon"></i></b-button>
        <b-collapse id="collapse-1" class="mt-2">
            <div>
                <b-form-input v-model="text" placeholder="Search" id="search-entry"></b-form-input>
            </div>
        </b-collapse>
    </div>
</template>

<style scoped>
    .fa.fa-search{
    color: white;
    }

    #search-entry{
        width:147px;
    }
</style>

<script>
export default{
    name: "SearchBar"
}
</script>
