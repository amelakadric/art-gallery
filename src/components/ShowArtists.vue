<template>
    <div id='showartists'>
        <table>
            <tr v-for='artist in artists' :key="artist.id">
                <td>
                    <ArtistComponent :myartist='artist'></ArtistComponent>
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
    import ArtistComponent from './ArtistComponent.vue'

    export default{
        name: 'ShowArtists',
        components: {
            ArtistComponent
        },
        data(){
            return {
                artists: allArtists
            }
        },
        created(){
            if(localStorage.getItem('allArtists')==null){
                localStorage.setItem('allArtists', JSON.stringify(allArtists))
            }
        }
    }
</script>