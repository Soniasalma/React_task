import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pokemons: [],
}

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    addToTeam: (state , action) => {
      const pokemon=state.pokemons.find(item=>item.id===action.payload.id)
      if(pokemon){
        alert("You can't add this Pokemon ,it is in the team")
      }
      else if(state.pokemons.length===6){
        
        let todos=[]
        
        const names=state.pokemons.map((pokemon)=>pokemon.name)
        for (let a = 0; a < names.length; a++) {
          todos.push(names[a])
        }
        

        alert(`" The team contains six pokemons , you can't add more         "${todos}`)
      }
      else 
      {
        state.pokemons.push(action.payload)
        alert("The pokemon has added to the team")
      }
     

    },
    removeFromTeam: (state , action) => {
      
    state.pokemons=state.pokemons.filter(item=>item.id != action.payload.id)
    alert("The Pokemon has removed from the team")
      
      
    },
    resetTeam: (state) => {
      if(state.pokemons.length===0)
        alert("there are no pokemons in the team ")
      else{
        state.pokemons=[]
        alert("The entire pokemon team has eliminated ")
      }
     
        
        
      },
      updatePokemonsOrder:(state,action)=>{
        const{startIndex,endIndex}=action.payload;
        const[removed]=state.pokemons.splice(startIndex,1);
        state.pokemons.splice(endIndex,0,removed)
      }
   
   
  },
})

// Action creators are generated for each case reducer function
export const { addToTeam,removeFromTeam ,resetTeam,updatePokemonsOrder} = teamSlice.actions

export default teamSlice.reducer