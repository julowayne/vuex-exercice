
export const cats = (state) => {
  return state.pets.filter((pet) => {
    if(pet.species == "Cat") return pet
  })
};

export const dogs = (state) => {
  return state.pets.filter((pet) => {
    if(pet.species == "Dog") return pet
  })
};
export const allAnimals = (state) => {
  return state.pets
}
export const countAnimals = (state) => {
  return state.pets.length
};
export const getSpecies = (state) => {
  return state.pets.filter((pet) => {
    return pet.species
  })
}
export const pet = (state, rootState) => {
  // return state.pets[rootState.route.id]
  return state.pets.$route.params.id

}