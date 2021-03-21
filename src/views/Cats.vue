<template>
  <div class="container">
    <div v-for="cat in allCats" :key="cat" class="animal">
      <div class="informations">
        <p><strong>Name:</strong> {{ cat.name }}</p>
        <p><strong>Birthday:</strong> {{ cat.birthYear }}</p>
        <div v-if="cat.favFoods">
          <p><strong>Favorite foods:</strong></p>
          <div v-for="food in cat.favFoods" :key="food">
              {{ food }}
          </div>
        </div>
      </div>
      <div v-if="cat.photo"> 
        <p>
          <img :src="cat.photo" alt="animal photo">
        </p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'home',
    computed: {
      allCats(){
        return this.$store.getters.cats
      }
    }
  }
</script>

<style>

.container {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 70%;
}
.informations {
  text-align: left;
}
.animal {
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  margin: auto;
  max-width: 50%;
  padding: 2rem;
  margin-bottom: 20px;
}

</style>
