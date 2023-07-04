<template>
    <div class='exhibition'>
        <background-image-component ref="backgroundImgRef">
            <div class="content">
                <div class="container">
                    <br>
                    <div class="row">
                        <div class="col-sm-12">
                            <h1>Exhibition: Art in the Renaissance</h1>
                        </div>
                    </div>
                    <br><br>
                    <div id="centered-content">
                        <div id="content-txt">
                            <div class="row">
                                <div class="col-sm-12">
                                    <p>
                                        Discover the great era of the Renaissance at our exhibition!
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <p>
                                        We invite you to join a unique exhibition that will take you on a journey through time to the golden age of the Renaissance.
                                        This exhibition will revive the spirit of art, science and humanism that marked that important era.

                                        Explore the artistic masterpieces of the great Renaissance masters such as Leonardo da Vinci, Michelangelo, Raphael and Donatello.
                                        Discover their iconic paintings, sculptures and architectural achievements that have influenced the evolution of art and shaped the world
                                        art as we know it today.
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <p>
                                        Find yourself surrounded by beautiful portraits, landscapes, mythological scenes and religious motifs that are
                                        imbued with a new sense of perspective, light and anatomical precision. Feel the extraordinary skill of the Renaissance masters
                                        who created works that remained symbols of the highest expression of art.
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <p>
                                        Walk through replicas of Renaissance studios and discover the secrets of creating works of art.
                                        Get to know the techniques used in painting, sculpture and architecture, as well as the process itself
                                        creation of a work of art during the Renaissance.
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <p>
                                        The exhibition will also introduce you to the key ideas and philosophy of the Renaissance,
                                        which brought about a revolution in the way of thinking about the world. Learn more about humanism, discoveries,
                                        scientific achievements and changes in social values shaped the epoch.

                                        This exhibition offers a unique opportunity to immerse yourself in the world of the Renaissance, to feel its spirit and to
                                        you are inspired by its beauty and innovations.
                                    </p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12">
                                    <p>
                                        Further information related to the exhibition:
                                    </p>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-sm-6" style="text-align: right">
                                    <b>Date:</b>
                                </div>
                                <div class="col-sm-6">
                                    <i>01-07-2023</i>
                                </div>
                            </div>
                            

                            <div class="row">
                                <div class="col-sm-6" style="text-align: right">
                                    <b>Time:</b>
                                </div>
                                <div class="col-sm-6">
                                    <i>18h</i>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-6" style="text-align: right">
                                    <b>Location:</b>
                                </div>
                                <div class="col-sm-6">
                                    <i>Muzej Savremenih umetnosti</i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </background-image-component>
        <nav-bar></nav-bar>
    </div>
</template>

<style scoped>
    .exhibition{
        text-align: center;
    }
    .content{
        z-index: 2;
        color:white;
    }
    #centered-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    #content-txt{
        text-align: justify;
        width: 600px;
    }
</style>

<script>
    import BackgroundImageComponent from '@/components/BackgroundImageComponent.vue'
    import NavBar from '@/components/NavBar.vue';
    
    export default {
        name: 'ExhibitionView',
        components: {
            BackgroundImageComponent, NavBar
        },
        mounted(){
            this.setBackgroundImage();
        },
        methods:{
            setBackgroundImage(){
                this.$refs.backgroundImgRef.setBackgroundImage("https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEyL2xyL3VtZXN2a3NuZ28yNjY2LWltYWdlLmpwZw.jpg");
            }
        }
    }
</script>