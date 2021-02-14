<template>
  <div class="RedirectPage">
      <h1>O usuário <strong>{{UserName}}</strong> não foi encontrado!</h1>
    <router-link to="/"> <h2> Home</h2></router-link>
    <p>você será redirecionado para a pagina Home em {{time}} segundos!</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      time:10
    }
    
  },
    props:{
      UserName:{
        type:String
      }
    },
    async created(){
      setInterval(()=>{
          this.time -=1
        },1000)
      await setTimeout(()=>{
        
        this.$router.push({name:'home'})
      },10000) 
    }
}
</script>

<style scooped>
.RedirectPage{
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.RedirectPage h1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
}
.RedirectPage h2{
  margin-top: 0;
  text-decoration-line: underline;
}
</style>