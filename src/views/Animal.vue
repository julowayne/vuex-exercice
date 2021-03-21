<template>
  <div class="container">
    <div class="animal">
      <div class="informations">
        <p><strong>Name:</strong> {{ getAnimal.name }}</p>
        <p><strong>Birthday:</strong> {{ getAnimal.birthYear }}</p>
        <div v-if="getAnimal.favFoods">
          <p><strong>Favorite foods:</strong></p>
          <p v-for="food in getAnimal.favFoods" :key="food">
            <ul>
              <li>
                {{ food }}
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div v-if="getAnimal.photo"> 
        <p>
          <img :src="getAnimal.photo" alt="animal photo">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'animal',
  computed: {
    getAnimal(){
      return this.$store.getters.pet
    }
  }
  }
</script>
