<template>
   <div class="Search">
          <router-link class ="ghs" to="/"><h1><strong>GitHub</strong> <i> search</i></h1></router-link>
        <form v-on:submit="$emit('changeName',Name)" >
            <input type="text" v-model="Name" >
        <button type="submit" ><img src="../../assets/search.svg" alt=""></button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
        Name:''}
    }
    
}
</script>

<style>
.Search{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.ghs{
    align-self: center;
}
.Search h1{
    font-size: 2.7rem;
    font-weight: 400;
    margin-bottom: 1vh;
    margin-top: 0vh;
}
form{
    justify-self: center;
    display: flex;
    justify-content: center;
    height: 5vh;
    min-height: 50px;
    width: 30vw;
}

form input{
    display: flex;
    width: 100%;
    min-width: 230px;
    margin: 0px;
    border: 4px solid black;
    font-size: 26px;
    color: 757575;
}
img{
    color: white;
}
form button{
    margin: 0px;
    border: 4px solid black;
    background-color: black;
    color: white;
    cursor: pointer;
}
@media screen and (max-width:900px) {
    .Search h1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 6vh;
        margin-bottom: 4vh;
        font-size: 3rem;
    }
}

</style>