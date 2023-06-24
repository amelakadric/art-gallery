<template>
    <div :style="{ backgroundImage: 'url(' + backgroundImgUrl + ')' }" class="bg-image">
      <div class="bg-wrapper">
        <slot></slot>
      </div>
    </div>
</template>

<style scoped>
    .bg-image{
        justify-content: center; /* Adjust as needed */
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }
    .bg-wrapper{
        
        
        margin-left: 65px;
        width:100vw;
        min-height: 100vh;
        height:auto;
        background-color: rgba(0, 0, 0, 0.35);
        text-align: center;
        z-index: 2;
    }
</style>

<script>
export default {
    name: "BackgroundImage",
    data(){
        return{
            backgroundImgUrl: ''
        };
    },
    methods:{
        setBackgroundImage(img_url){
            this.backgroundImgUrl = img_url;
        }
    }
}
</script>