<template>
    <div class="Card" >
              <a :href="link" target="_blank">
                  <h3>{{name}}</h3>
                <h4>{{description}}</h4>
                <h5>{{stars}}</h5>
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
.card p{
    justify-self: flex-start;
}
</style>