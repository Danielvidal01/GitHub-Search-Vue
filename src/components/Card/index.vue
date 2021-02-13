<template>
    <div class="Card" >
              <a :href="link" target="_blank">
                  <h2>{{name}}</h2>
                <p>{{description}}</p>
                <div class="stars">
                    <img src="../../assets/star.svg" alt=""> <p>{{stars}}</p>
                </div>
              </a>
    </div>
</template>

<script>
export default {
    props:{
        name:{
            type:String
        },
        description:{
            type:String
        },
        stars:{
            type:Number
        },
        link:{
            type:String
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
    margin-left: 80px;
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
    margin-left: 5px;
    align-self: center;
    justify-self: flex-start;
    color:rgba(117, 117, 117, 1)
}
</style>