<template>
  <main>
      <SearchBox @changeName="ClickChange"/>
  </main>
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
main{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Search{
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
form input{
    text-align: center;
}
</style>