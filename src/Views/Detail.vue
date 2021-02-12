<template>
  <div>
      <h1>UserDetail</h1>
      <h2>{{User}}</h2>
  </div>

</template>

<script>
import axios from 'axios'

export default {
      data(){
        return{
            User:'',
        }
    },
    methods:{
        async onClick(){
            const ResponseUser = await axios.get(`https://api.github.com/users/${this.User}`)
            const ResponseRepos = await axios.get(`https://api.github.com/users/${this.User}/repos`)
            this.info = ResponseUser.data;
            this.repos = ResponseRepos.data;
            this.User=''
        }
    },created(){
        this.User=this.$route.params.data
    }

}
</script>

<style>

</style>