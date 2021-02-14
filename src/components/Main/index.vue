<template>
    
<div class="Content">
    <div class="if" v-if="!User || !info">
          <Redirect :UserName="User"/>
    </div>
    
    <div class="loading" v-else-if="loading">
        <Loading/>
    </div>

   <div class="page" v-else>
        <header>
        <SearchBox @changeName="ClickChange"/>
        </header>
    <main >
    
        <section class="info">
            <UserDetail :info="info" :stars="stars"/>
        </section>
        
        <section class="cards">
            <Card class="card" v-for="repo in sortRepos" 
            :key="repo.id"
            :repo="repo"/>
        </section>

    </main>
   </div>
</div>

</template>

<script>
import axios from 'axios'
import SearchBox from '../SearchBox'
import Card from './Card';
import UserDetail from './UserDetail';
import Redirect from './Redirect'
import Loading from './Loading'

export default {
    components:{
        Card,
        UserDetail,
        SearchBox,
        Redirect,
        Loading
    },
      data(){
        return{
            User:'',
            stars:0,
            info:[],
            repos:[],
            loading:false,
        }
    },watch:{
        User(newUser){
            localStorage.user = newUser
        }
    },
    computed:{
        sortRepos(){
                return this.orderBy(this.repos)
            },
        UserName(){
            return this.User.trim()
        }

        },
    methods:{
            async search(userName){
                try {
                    this.loading = true;
                    const ResponseUser = await axios.get(`https://api.github.com/users/${userName}`);
                    const ResponseRepos = await axios.get(`https://api.github.com/users/${userName}/repos`);
                    this.info = ResponseUser.data; 
                    this.repos = ResponseRepos.data;
                    this.stars=0;
                    this.countStars(this.repos);
                } catch (error) {
                    this.info=false;
                }finally{
                    this.loading=false;
                }
            },

            orderBy(obj){
                return obj.sort((a,b) => (a.stargazers_count > b.stargazers_count) ? - 1 : ((b.stargazers_count > a.stargazers_count) ? 1 : 0))
            },

            ClickChange(Name){
                this.User=Name
                this.search(this.User)
            },

            countStars(repos){
                return repos.map(repo=>{
                    this.stars += repo.stargazers_count
                })
            }
        },
    
    
    created(){
        if(!this.$route.params.data){
            if(localStorage.user){
                this.User=localStorage.user
            }
        }else{
            this.User=this.$route.params.data
        }
        this.search(this.UserName)
    }
    }


</script>
<style scoped>
.Content{
    margin-top: 3vh;
}
.Search{
    flex-direction: row;
    justify-content: space-between;
    margin: 0 6vw ;
}
header{
    margin-bottom: 2vh;
}
main{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    min-width: 80vw;
}

@media screen and (max-width:900px) {
    .Search{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: none;
    }
    main{
        margin: 10vh 0;
        flex-direction: column;
        align-items: center;
    }
    .info{
        align-self: flex-start;
    }
    .cards{
        margin-top: 5vh;
        align-self: flex-start;
    }
}
</style>