<template>
  <div>
    <!-- filter by card_type -->
    <div class="filter">
      <select name="" id="" v-model="option" @change="filter()">
          <option value="0" selected>
           All
          </option>
          <option value="subscription">subscription</option>
          <option value="burner">burner</option>
        </select>
    </div>
    <!-- card listing -->
    <div class="all-cards">
      <div class="card" v-for="card in displayedCards" :key="card.owner_id">
        <div class="card-Header">
          <div class="card-name">
            <h4>{{ card.name }}</h4>
            <small
              >{{ card.name }}
              <span><i class="bx bxs-circle"></i></span>
              {{ card.budget_name }}</small
            >
          </div>
          <div class="card-type-symbol">
            <i v-if="card.card_type == 'burner'" class="bx bxs-hot"></i>
            <i
              v-if="card.card_type == 'subscription'"
              class="bx bx-circle-three-quarter"
            ></i>
          </div>
        </div>
        <div class="body">
          <div class="card-type-expire">
            <div class="card-type divFlex">
              <p class="p-heading">Card Type</p>
              <p>{{ card.card_type }}</p>
            </div>
            <div class="frequency divFlex">
              <p class="p-heading">Frequence</p>
              <p>Monthly</p>
            </div>
            <div class="expire divFlex" v-if="card.card_type == 'burner'">
              <p class="p-heading">Expiry</p>
              <p>{{ card.expiry }}</p>
            </div>
            <div class="expire divFlex" v-if="card.card_type == 'subscription'">
              <p class="p-heading">Limit</p>
              <p>{{ card.limit }}</p>
            </div>
          </div>
          <div class="bar">
          
          </div>
          <div class="progress-stacked">
              <div
                class="progress"
                role="progressbar"
                aria-label="Segment one"
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="{width:card.spent.value + '%'}"
              >
                <div class="progress-bar"></div>
              </div>
              <div
                class="progress"
                role="progressbar"
                aria-label="Segment two"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="{width:card.available_to_spend.value+'%'}"
              >
                <div class="progress-bar bg-success"></div>
              </div>
              
            </div>
          <div class="spent-value">
            <div class="spent">
              <span></span>
              <p>Spent</p>
            </div>
            <div class="value">
              <p>{{ card.spent.value }} {{ card.spent.currency }}</p>
            </div>
          </div>
          <div class="available-value">
            <div class="available">
              <span></span>
              <p>Balance</p>
            </div>
            <div class="value">
              <p>
                {{ card.available_to_spend.value }}
                {{ card.available_to_spend.currency }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn load-more" v-if="hasMoreItems" @click="loadMore()">Load More</button>
  </div>
</template>

<script>
export default {
  name: "CardCom",
  props: ["allCards"],
  data() {
    return {
      option: 0,
      cards: this.allCards.cards,
      displayedCards: [],
      itemsPerPage: 10,
      currentPage: 1,
    };
  },
  computed: {
    hasMoreItems() {
      return this.displayedCards.length < this.cards.length;
    },
  },
  methods: {
    loadMore() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = this.currentPage * this.itemsPerPage;
      this.displayedCards = [
        ...this.displayedCards,
        ...this.cards.slice(startIndex, endIndex),
      ];
      this.currentPage++;
   
    },
    filter() {
      if (this.option === "0") {
        this.cards = this.allCards.cards;
      } else {
        this.cards = this.allCards.cards.filter(
          (card) => card.card_type === this.option
        );
      }
      this.displayedCards = this.cards.slice(0, 10);
      this.currentPage = 2;
    },
  },
  mounted() {
    this.loadMore();
  },
};
</script>

<style scoped>
.all-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
  gap: 20px;
  justify-items: center;
  padding: 1rem;
}

.all-cards .card {
  width: 100%;
  display: flex;
  height: 19rem;
  padding: 20px;
  border: 0;
  box-shadow: 0 0 15px rgb(0 0 0 / 0.1);
  flex-direction: column;
}
.all-cards .card .card-Header {
  height: 30%;
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0;
}
.bxs-circle{
  font-size:10px !important;
}
.all-cards .card .card-Header .card-name {
  text-align: left;
}
.all-cards .card .card-Header .card-name h4 {
  font-size: 1.5rem;
}
.all-cards .card .card-Header .card-name small {
  color: gray;
}
.card-type-symbol {
  border-radius: 50%;
  background: #ffa1b2;
  width: 3rem;
  display: flex;
  height: 3rem;
  justify-content: center;
  align-items: center;
}
.card-type-symbol .bx {
  font-size: 1.5rem !important;
}
.all-cards .card .body {
  display: flex;
  flex-direction: column;
  height: 70%;
}
.all-cards .card .body .card-type-expire {
  display: flex;
  height: 30%;
  justify-content: space-between;
  text-transform: capitalize;
  text-align: initial
}
.all-cards .card .body .card-type-expire .divFlex {
  display: flex;
  flex-direction: column;
}
.all-cards .card .body .expire {
  display: flex;
  justify-content: center;
}
.divFlex .p-heading {
  margin-bottom: 0;
  color: gray !important;
}
.bar {
  height: 30%;
  display: flex;
  align-items: center;
}
.spend-bar {
  --spent-percent: 50%;
  --balance-percent: 50%;
  width: 100%;
  background: linear-gradient(
    to right,
     var(--spent-percent, 100%),
    #00ff00 var(--balance-percent, 100%)
  );
  height: 0.7rem;
  border-radius: 10rem;
}
.spent-value,
.available-value {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30%;
}
.spent,
.available {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
}
.spent span,
.available-value span {
  border-radius: 50%;
  width: 0.5rem;
  aspect-ratio: 1;
  margin-right: 0.25rem;
}

.spent span {
  background-color: #0D6EFD;
}
.available-value span {
  background-color: #198754;
}

.filter{
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}
.filter select{
    border: 0.5px solid #d7d7d7;
    width: 10rem;
    height: 2rem;
    background: #fbfbfb;
    border-radius: 5px;
    text-indent: 4px;
    outline: none;
}
.load-more{
  display: block;
  border: 2px solid #d7d7d7;
  padding: 0.25rem 2rem;
  margin-bottom: 20px;
  margin-inline: auto;
  background: #fbfbfb;
  border-radius: 5px;
  cursor: pointer;
}

.load-more:hover {
  border-color: #aaa;
}
</style>
