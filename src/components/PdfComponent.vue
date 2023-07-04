<template>
    <div class="pdf-comp">
        <object :data= my_pdf
                class="pdf-object"
                v-show="showPdf">
        </object>
    </div>
</template>

<style scoped>
    .pdf-object{

        width: 20rem;
        height: 30rem;
    }
</style>

<script>
export default {
    name:"PdfComponent",
    data(){
        return{
            my_pdf:'',
            showPdf: false
        }
    },
    methods:{
        togglePdf(mypdf){
            this.showPdf = !this.showPdf;
            this.my_pdf = mypdf;
        }
    }
}
</script>