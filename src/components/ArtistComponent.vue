<template>
    <!-- <div id="artist">
        <b-card title= {{myartist.name}} img-src= {{myartist.photo}} img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                {{myartist.bio}}
            </b-card-text>
        </b-card>
    </div> -->
    <div id='artist'>
        <hr/>
        <b>Title:</b> {{myartist.name}}
        <hr/>
        <i>Author: {{myartist.bio}}
        Photo url: {{myartist.photo}}
        </i>
    </div>
</template>

<script>
    export default {
        name: "Artist",
        props: [
            'myartist'
        ]
    }
</script>