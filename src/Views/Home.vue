<template>
  <div class="Home">
    
      <SearchBox @changeName="ClickChange"/>
      
  </div>
</template>

<script>
import SearchBox from '../components/SearchBox'
export default {
    components:{
SearchBox
    },
    data(){
        return{
            userName:'',
        }
    },
    methods:{
        shareData(){
            if(this.userName ==''){
                return
            }
            this.$router.push({name:'detail',params:{data:this.userName}})
        },
        ClickChange(Name){
            this.userName=Name
            this.shareData()
        }
    }

}
</script>

<style scoped>
.Search{
    margin-top: 40%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
form input{
    text-align: center;
}
</style>