<template>
    <div id='showartists'>
        <p>uslo</p>
        <table>
            <tr v-for='artist in artists' :key="artist.id">
                <td>
                    <Artist :myartist='artist'></Artist>
                </td>
                
            </tr>
        </table>
    </div>
</template>


<style scoped>
    #showartists{
        display: flex;
        justify-content: center;
    }

    #showartists table{
        align-self: center;
    }
</style>

<script>
    import allArtists from '../data/artists.js'
    import Artist from './ArtistComponent.vue'

    export default{
        name: 'ShowArtists',
        components: {
            Artist
        },
        data(){
            return {
                artists: allArtists
            }
        }
    }
</script>