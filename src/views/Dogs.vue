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

