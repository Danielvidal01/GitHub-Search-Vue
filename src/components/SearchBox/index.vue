<template>
   <div class="Search">
          <router-link to="/"><h1><strong>GitHub</strong> <i> search</i></h1></router-link>
        <form v-on:submit="$emit('changeName',Name)" >
            <input type="text" v-model="Name" >
        <button type="submit" >P</button>
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.Search h1{
    font-size: 42px;
    font-weight: 400;

}
form{
    display: flex;
    height: 50px;
    
}
form input{
    display: flex;
    width: 600px;
    margin: 0px;
    border: 4px solid black;
    font-size: 26px;
    
    
}
form button{
    margin: 0px;
    width: 100px;
    border: 4px solid black;
    background-color: black;
    color: white;
    cursor: pointer;
}

</style>