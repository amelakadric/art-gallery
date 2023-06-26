<template>
    <div id="artist">
        <b-card class="art-card">
                <!-- <img src= {{myartist.photo}} alt="Image" class="card-image"> -->
                <div class="card-body">
                    <h5 class="card-title">{{myartist.name}}</h5>
                    <p class="card-text">{{myartist.bio}}</p>
                </div>
        </b-card>
    </div>
    <!-- <div id='artist'>
        <hr/>
        <b>Title:</b> {{myartist.name}}
        <hr/>
        <i>Author: {{myartist.bio}}
        Photo url: {{myartist.photo}}
        </i>
    </div> -->
</template>

<script>
    export default {
        name: "Artist",
        props: [
            'myartist'
        ]
    }
</script>