<template>
    <div class="main-header">
       <div class="left">
        <h2>Virtual Cards</h2>
        <div class="learn-more"><i class='bx bxs-video'></i>
         <p>learn more</p>
        </div>
       </div>
       <div class="right">
        <h1>+</h1>
        <p>Virtual card</p>
       </div>
    </div>
</template>

<script>
export default {
    name:'MainHeader',

}
</script>

<style scoped>
.main-header{
    padding: 30px 50px;
    display: flex;
    justify-content: space-between;
}
.main-header .left{
    display: flex;
    align-items: center;
    /* background: rebeccapurple; */
    width: 23%;
    justify-content: space-between;
}

.main-header .left .learn-more{
    display: flex;
    height: 40px;
    /* background: red; */
    width: 10rem;
    border-radius: 5px;
    /* text-align: center; */
    align-items: center;
    background: #dbdbdb;
    justify-content: center;
    color:#009dff;
}
.main-header .right{
    display: flex;
    height: 3.5rem;
    background: #F0F0F0;
    justify-content: center;
    align-items: center;
    width: 10rem;
    border-radius: 10px;
    box-shadow: 1px 1px 3px 0px;
    cursor: pointer;
}
</style>