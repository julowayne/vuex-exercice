
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

export const dog = (state, getters) => (id) => {
  return getters.dogs[id]
}

export const cat = (state, getters) => (id) => {
  return getters.cats[id]
}

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

export const pet = (state, getters) => (id, species) => {
  return getters[species](id)
}