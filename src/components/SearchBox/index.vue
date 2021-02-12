<template>
   <div class="Search">
          <h4><strong>GitHub</strong> search</h4>
    <div class="box">
        <input type="text" v-model="Name" >
    <button type="submit" v-on:click="$emit('changeName',Name)">P</button>
    </div>
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
.box{
    display: flex;
    height: 50px;
    
}
.box input{
    display: flex;
    width: 600px;
    margin: 0px;
    border: 4px solid black;
    
}
.box button{
    margin: 0px;
    width: 100px;
    border: 4px solid black;
    background-color: black;
    color: white;
}

</style>