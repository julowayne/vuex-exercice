<template>
  <div class="container">
    <div class="allInformations">
      <h2>There are {{ countAnimals }} animals a the moment.</h2>
      <div>
       <strong>{{ countCats }}</strong>  cats and <strong>{{ countDogs }}</strong> dogs.
      </div>
    </div>
    <button @click.prevent="getForm">Add new pet</button>
    <div v-if="displayForm" class="new-pet">
      <div v-if="error.status" id="error"> {{ error.msg }} </div>
      <label for="name">Enter your pet name: </label>
      <input v-model="name" type="text" name="name" id="name" placeholder="Lexi" required>
      <label for="birthday">Enter your pet's birthday: </label>
      <input v-model="birthday" type="text" name="birthday" id="birthday" placeholder="2018" required>
      <label for="specie">Specie:</label>
      <select name="specie" id="specie" v-model="choosenSpecie">
        <option v-for="specie in species" :key="specie"> {{ specie }} </option>
      </select>
      <button id="create-new-pet" @click.prevent="newAnimal">SUBMIT</button>
    </div>
  </div>
</template>

<script>
  export default {
    name:'home',
    data(){
      return{
        displayForm: false,
        choosenSpecie: "",
        species: ["Cat", "Dog"],
        name: "",
        birthday: "",
        error : {
          status: false,
          msg: "All informations must be completed to add a new pet !"
        }
      }
    },
    computed: {
      allAnimals(){
        return this.$store.getters.allAnimals
      },
      countAnimals(){
        return this.$store.getters.countAnimals
      },
      countCats(){
        return this.$store.getters.cats.length
      },
      countDogs(){
        return this.$store.getters.dogs.length
      },
    },
    methods: {
      getForm(){
        return this.displayForm = true
      },
      newAnimal(){
        if(!this.name || !this.birthday || !this.choosenSpecie) return this.error.status = true
        this.error.status = false
        const newPet = {
          species: this.choosenSpecie,
          name: this.name,
          birthYear: this.birthday
        }
        this.$store.commit('addAnimal', newPet);
        this.species.value = "",
        this.name = ""
        this.birthday = ""
      }
    }
  }
</script>

<style>
li {
  list-style: none;
}
img {
  border-radius: 8px;
  max-width: 90%;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}
#error {
  font-size: 15px;
  color: red;
  padding: 0.5rem;
  border: 1px solid lightgray;
  border-radius: 6px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  margin-bottom: 15px;

}
.allInformations {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 70%;
}
.new-pet {
  padding: 2rem;
  background-color: #f8f9fa;
  max-width: 30%;
  border-radius: 4px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  display: flex;
  margin: auto;
  flex-direction: column;
}
#create-new-pet {
  width: 50%;
  margin: 10px 0;
  font-size: 15px;
}
label {
  text-align: left;
  margin-bottom: 5px;
}
input {
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}
select {
    border: 1px solid #ccc;
  border-radius: 4px;

}
label + input {
  margin-bottom: 10px;
}
button {
  font-size: 20px;
  transition-duration: 0.4s;
  padding: 0.5rem;
  margin: 10px auto;
  width: 20%;
  border-radius: 4px;
  background-color: white;
  color: black;
  border: 1px solid lightgray;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
  cursor: pointer;
}
button:hover {
  background-color: #20c997; /* Green */
  color: white;
}
button:focus {
  outline:0;
}
</style>
