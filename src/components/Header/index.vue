<template>
    <header>
        <SearchBox @changeName="ClickChange"/>
        <h1>{{Name}}</h1>
    </header>
</template>

<script>
import SearchBox from '../SearchBox'
export default {
    components:{
        SearchBox
    },
    data(){
        return{
            Name:''
        }
    },
    methods:{
        ClickChange(Name){
            this.Name=Name
        }
    }

}
</script>

<style>

</style>