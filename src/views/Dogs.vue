<template>
  <div class="container">
    <div v-for="dog in allDogs" :key="dog" class="animal">
      <div class="informations">
        <p><strong>Name:</strong> {{ dog.name }}</p>
        <p><strong>Birthday:</strong> {{ dog.birthYear }}</p>
        <div v-if="dog.favFoods">
          <p><strong>Favorite foods:</strong></p>
          <p v-for="food in dog.favFoods" :key="food">
            <ul>
              <li>
                {{ food }}
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div v-if="dog.photo"> 
        <p>
          <img :src="dog.photo" alt="animal photo">
        </p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'home',
    computed: {
      allDogs(){
        return this.$store.getters.dogs
      }
    }
  }
</script>

<style>
/* img {
  border-radius: 8px;
  max-width: 90%;
}
li {
  list-style: none;
}
.container {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 70%;
}
.cats {
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  margin: auto;
  max-width: 50%;
  padding: 2rem;
  margin-bottom: 20px;
} */

</style>
