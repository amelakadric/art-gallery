<template>
    <div v-show="showDropDownMenu" class="dropdown">
        <ul>
            <a href="#"><li>Početna</li></a>
            <a href="#"><li>Moj nalog</li></a>
            <a href="#"><li>Slikarstvo</li></a>
            <a href="#"><li>Vajarstvo</li></a>
            <a href="#"><li>Arhitektura</li></a>
            <a href="#"><li>Izložba</li></a>
            <a href="#"><li>Umetnici</li></a>
            <a href="#"><li>Kontakt</li></a>
            <a href="#"><li>O nama</li></a>
        </ul>
    </div>
</template>

<style scoped>
    li{
        font-family: 'Roboto', sans-serif;
        color: white;
    }
    .dropdown {
        margin-left: 65px;
        width:100vw;
        height:100vh;
        background-color: rgba(0, 0, 0, 0.65);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }
    
    ul{
        list-style-type: none;
        margin-top: 5vh;
        margin-left: 2vw;
    }
    li{
        text-align: left;
        font-size: 50px;
    }

    li:hover{
        text-decoration: underline;
        text-decoration-color: #2a9cd1;
    }

    a{
        text-decoration: none;
    }
</style>

<script>

    export default{
        name: "DropDownMenu",
        data(){
            return{
                showDropDownMenu: false
            };
        },
        methods: {
            toggleDropDownMenu(){
                this.showDropDownMenu = !this.showDropDownMenu;
            }
        }
    }
</script>
