<template>
  <div>
      <p>Search for valid githubUsers</p>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
    async created(){
        this.$router.push({name:'home'})
    }
}
</script>

<style>

</style>