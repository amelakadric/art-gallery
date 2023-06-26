<template>
    <div id="artist">
        <b-card class="art-card">
                <img :src="myartist.photo" alt="Image" class="card-image">
                <div class="card-body">
                    <h5 class="card-title">{{myartist.name}}</h5>
                    <p class="card-text">{{myartist.bio}}</p>
                </div>
        </b-card>
    </div>
</template>

<style scoped>
    img{
        width: 100px;
        height: 100px;
    }
</style>

<script>
    export default {
        name: "Artist",
        props: [
            'myartist'
        ]
    }
</script>