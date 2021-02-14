<template>
  <div class="UserDetail">
      <img class="avatar" :src="info.avatar_url" >
        <div class="name">
            <h1>{{info.name}}</h1>
            <p>{{info.login}}</p> 
        </div>

        <div class="line">
        <img src="../../../assets/organization.svg" alt="organization">
        <p>{{Company}}</p>
        </div>

        <div class="line">
            <img src="../../../assets/location.svg" alt="location"> 
            <p>{{Location}}</p>
        </div>

        <div class="line">
            <img src="../../../assets/star.svg" alt="star">
            <p>{{stars}}</p>
        </div>
        
        <div class="line">
            <img src="../../../assets/repository.svg" alt="repository">
            <p>{{info.public_repos}}</p>
        </div>
        
        <div class="line">
            <img src="../../../assets/followers.svg" alt="followers">
            <p> {{info.followers}}</p>
        </div>
  </div>
</template>

<script>
export default {
    props:{
        info:{
            type:Object
        },
        stars:{
            type:Number
        }

    },
    computed:{
        Location(){
            return this.info.location===null?'undefined':this.info.location
        },
        Company(){
            return this.info.company === null?'undefined':this.info.company
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
.avatar{
    width: 300px;
    height: 300px;
    box-shadow: 0.5px 0.5px 4px rgba(117, 117, 117, 1);
}
.name h1{
    margin-bottom: 0;
}
.name p{
    margin-top: 0;
    margin-bottom: 40px;
    color: rgba(117, 117, 117, 1);
}
.line{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 5px 0px;
}
.line p{
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 12px;
    font-weight: 300;
    color:rgba(117, 117, 117, 1)
}

</style>