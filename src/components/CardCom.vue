<template>
   <div>
    <!-- filter by card_type -->
      <div class="filter">
        <select name="" id="" v-model="option" @change="filter()">
            <option value="0"  selected>All</option>
            <option value="subscription">subscription</option>
            <option value="burner">burner</option>
        </select>
      </div>
      <!-- card listing -->
      <div class="all-cards">
        <div class="card" v-for="card in paginatedItems" :key=card.name>
        <div class="card-header">
            <div class="card-name">
                <h4>{{ card.name }}</h4>
                <small>{{ card.name }}
                     <span><i class='bx bxs-circle'></i></span>
                      {{card.budget_name}}</small>
            </div>
            <div class="card-type-symbol">
                <i v-if="card.card_type=='burner'" class='bx bxs-hot'></i>
                <i v-if="card.card_type=='subscription'" class='bx bx-circle-three-quarter'></i>
            </div>
        </div>
         <div class="body">
            <div class="card-type-expire">
                <div class="card-type">
                   <p>{{ card.card_type }}</p>
                </div>
                <div class="expire" v-if="card.card_type=='burner'">
                    <p>Expires: {{ card.expiry }}</p>
                </div>
                <div class="expire" v-if="card.card_type=='subscription'">
                    <p>Limit: {{ card.limit }}</p>
                </div>
            </div>
            <div class="bar">
                <div class="spend-bar"></div>
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
                    <p>Available to spend</p>
                </div>
                  <div class="value">
                    <p>{{ card.available_to_spend.value }} {{ card.available_to_spend.currency }}</p>
                  </div>
            </div>
         </div>
    </div>
     
    </div>

    <!-- pagination -->
    <div>
      <button @click="previousPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button v-for="page in totalPages" :key="page" @click="goToPage(page)">{{ page }}</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
   </div>
</template>

<script>
import card from '@/assets/card.json';
export default {
    name:'CardCom',
    props:['allCards'],
    data(){
        return {
            option:0,
            cards:this.allCards.cards,
            currentPage: card.page,
            perPage: card.per_page,
        }
    },
    computed: {
     
    totalPages() {
      return Math.ceil(this.cards.length / this.perPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.cards.slice(start, end);
    },
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    filter(){
        console.log(this.option);
        if (this.option === '0') {
        this.cards= this.cards;
      } else {
        this.cards= this.cards.filter((card) => card.card_type === this.option);
      }
    }
  },


}
</script>

<style scoped>
.all-cards{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 20px;
    justify-items: center;
}

.all-cards .card{
    display: flex;
    height: 20rem;
    width:40rem;
    padding:20px;
    border: 2px solid black;
    flex-direction: column;
}
.all-cards .card .card-header{
    height: 30%;
    display: flex;
    justify-content: space-between;
}
.all-cards .card .card-header .card-name{
    text-align: left;
}
.all-cards .card .card-header .card-name h4{
    font-size: 1.5rem;
}
.all-cards .card .card-header .card-name small {
    color:gray;
}
.card-type-symbol{
    border-radius: 50%;
    background: #ff8158;
    width: 3rem;
    display: flex;
    height: 3rem;
    justify-content: center;
    align-items: center;
}
.card-type-symbol .bx{
font-size: 1.5rem !important;
}
.all-cards .card .body{
    display: flex;
    flex-direction: column;
    height: 70%;
}
.all-cards .card .body .card-type-expire{
    display: flex;
    height: 30%;
    justify-content: space-between;
}
.all-cards .card .body .card-type{
    border: 2px solid black;
    width: 10rem;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    cursor: pointer;
    border-radius: 10px;
}

.all-cards .card .body .expire{
    display: flex;
    justify-content: center; 
}
.all-cards .card .body .expire p{
  color: gray;
}
.bar{
    height: 30%;
    display: flex;
    align-items: center;
}
.spend-bar{
    width: 100%;
    background: green;
    height: 0.7rem;
    border-radius: 10rem;
}
.spent-value,.available-value{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30%;
}
.spent,.available{
    width: 11%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.available{
    width:25% !important;
}
.spent span, .available-value span{
    height: 0.5rem;
    border-radius: 50%;
    background: red;
    width: 0.5rem;
    display: block;
}
.available-value span{
    background-color: green;
}
</style>