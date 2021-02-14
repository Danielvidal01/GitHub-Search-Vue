<template>
    <div class="Card" >
              <a :href="repo.html_url" target="_blank">
                  <h2>{{repo.name}}</h2>
                  </a>
                <p>{{Description}}</p>
                <div class="stars">
                    <img src="../../../assets/star.svg" alt=""> <p>{{repo.stargazers_count}}</p>
                </div>
              
    </div>
</template>

<script>
export default {
    props:{
        repo:{
            type:Object
        }
    },
    computed:{
        Description(){
            return this.repo.description===null?'undefinded':this.repo.description
        }
    }
}
</script>

<style>
a{
    text-decoration: none;
    color: black;
    }

.card{
    margin-bottom: 2%;
    max-width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start ;
}
.stars{
    display: flex;
    justify-content: start;
    align-items: center;
}
.card p{
    margin: 0.2% 0% 0.2% 0.25%;
    align-self: flex-start;
    justify-self: flex-start;
    color:rgba(117, 117, 117, 1)
}
.card h2{
    margin: 0;
    font-size: 2.2rem;
    font-weight: 300;
}
</style>