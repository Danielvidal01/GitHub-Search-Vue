<template>
  <div class="Home">
      <div class="fetch">
          <h1><strong>GitHub</strong> search</h1>
    <input type="text" v-model="userName" >
    
    <button type="submit" @click="shareData()">P</button>
      </div>
      
  </div>
</template>

<script>

export default {
    
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
        }
    }

}
</script>

<style>


</style>