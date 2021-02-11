<template>
  <div class="Home">
      <div class="fetch">
          <h1><strong>GitHub</strong> search</h1>
    <input type="text" v-model="User" ><button type="submit" v-on:click="onClick">P</button>
      </div>
      
  </div>
</template>

<script>
import axios from 'axios'
export default {

    data(){
        return{
            User:'',
            info:{},
            repos:{}
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
    }

}
</script>

<style>

</style>