<template>
  <div class="all-cards">
    <CardCom :allCards="{ cards }" />
  </div>
</template>

<script>
import Cards from "@/assets/card.json";

import CardCom from "@/components/CardCom.vue";
export default {
  name: "AllCards",
  components: {
    CardCom,
  },
  data() {
    return {
      cards: Cards.data,
    };
  },
};
</script>

<style scoped></style>
