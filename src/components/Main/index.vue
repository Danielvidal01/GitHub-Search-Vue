<template>
    
<div class="Content">
    <div class="if" v-if="!User || !info">
          <p>Search for valid githubUsers</p>
            <router-link to="/">Home</router-link>
    </div>

    <div v-else class="main">
        <header>
            <SearchBox @changeName="ClickChange"/>
        </header>

        <div class="info">
            <UserDetail :info="info"/>
        </div>
        
        <div class="cards">
            <Card class="card" v-for="repo in repos" 
            :key="repo.id"
            :name="repo.name"
            :description="repo.description" 
            :stars="repo.stargazers_count" 
            :link="repo.html_url"/>
        </div>

    </div>
</div>

</template>

<script>
import axios from 'axios'
import Card from '../Card'
import UserDetail from '../UserDetail'
import SearchBox from '../SearchBox'

export default {
    components:{
        Card,
        UserDetail,
        SearchBox
    },
      data(){
        return{
            User:'',
            info:[],
            repos:[]
        }
    },
    methods:{
        async search(userName){
            try {
                const ResponseUser = await axios.get(`https://api.github.com/users/${userName}`)
                const ResponseRepos = await axios.get(`https://api.github.com/users/${userName}/repos`)
                const Repo = this.orderBy(ResponseRepos.data)
                this.info = ResponseUser.data;
                this.repos = Repo;
            } catch (error) {
                this.info=false
                console.error(error.message)
            }
        },
        orderBy(obj){
            return obj.sort((a,b) => (a.stargazers_count > b.stargazers_count) ? - 1 : ((b.stargazers_count > a.stargazers_count) ? 1 : 0))
        },ClickChange(Name){
            this.User=Name
            this.search(this.User)
        }
    },created(){
        this.User=this.$route.params.data
        if(!this.User){
            return
        }
        this.search(this.User)
    }
    }


</script>

<style>
.main{
    display: grid;
    margin: 0 4%;
    grid-template-rows: auto;
    grid-template-columns: 2fr 3fr;
    grid-template-areas: "header header"
                         "info cards";
}
.info{
    grid-area: info;
}
header{
    grid-area: header;
    
}
 .cards{
     grid-area: cards;
     display: flex;
     align-items: flex-start;
     flex-direction: column;
 }
.if{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>