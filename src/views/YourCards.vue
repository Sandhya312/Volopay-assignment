<template>
    <div class="all-cards">
    <h4>Your cards</h4>
     <CardCom :allCards="{ cards }" />
   
    </div>
</template>

<script>
import Cards from '@/assets/card.json';

import CardCom from '@/components/CardCom.vue';
export default {
    name:'YourCards',
    components:{
      CardCom
    },
    data(){
        return {
            cards:Cards.data.filter((card) => card.status !== "blocked"),
        }
    },
    
}
</script>

<style scoped>

</style>