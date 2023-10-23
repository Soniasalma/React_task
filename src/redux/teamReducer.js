import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pokemons: ["item"],
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
        alert("The team contains six pokemons , you can't add more")
      }
      else 
      {
        state.pokemons.push(action.payload)
        alert("The pokemon has added to the team")
      }

      
      

    },
    removeFromTeam: (state , action) => {
      
    state.pokemons=state.pokemons.filter(item=>item.id !== action.payload.id)
      
      
    },
    resetTeam: (state) => {
      
      state.pokemons=[]
        
        
      },
   
   
  },
})

// Action creators are generated for each case reducer function
export const { addToTeam,removeFromTeam ,resetTeam} = teamSlice.actions

export default teamSlice.reducer