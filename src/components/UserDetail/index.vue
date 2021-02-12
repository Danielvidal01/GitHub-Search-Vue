<template>
  <div class="UserDetail">
      <img :src="info.avatar_url" >
        <h3>{{info.name}}</h3>
        <p>company: {{info.company}}</p>
        <p>location: {{info.location}}</p>
        <p>public_repos: {{info.public_repos}}</p>
        <p>followers: {{info.followers}}</p>
  </div>
</template>

<script>
export default {
    props:{
        info:{
            type:Object
        }

    }

}
</script>

<style>

.UserDetail{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.UserDetail img{
    width: 300px;
    height: 300px;
}
</style>