<template>
  <div class="all-cards">
    <h4>Blocked Cards</h4>
    <CardCom :allCards="{ cards }" />
  </div>
</template>

<script>
import Cards from "@/assets/card.json";

import CardCom from "@/components/CardCom.vue";
export default {
  name: "BlockedCard",
  components: {
    CardCom,
  },
  data() {
    return {
      cards:Cards.data.filter((card) => card.status == "blocked"),
    };
  },

};
</script>

<style scoped></style>
