<template>
  <div class="page-loader">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div> 
</template>

<script>
export default {

}
</script>

<style>
.page-loader{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
}
.item{
    width: 1.6vh;
    height: 10vh;
    margin-right: 10px;
    background-color: #2c2929;
}
.page-loader :first-child{
    animation: left 0.8s infinite;
}
.page-loader :last-child{
    animation: right 0.8s  infinite 0.4s;
}

@keyframes left{
    40%{
        transform: translateX(-100%);
    }
    50%{
        transform: translateX(0);
    }
}

@keyframes right{
    40%{
        transform: translateX(100%);
    }
    50%{
        transform: translateX(0);
    }
}

</style>