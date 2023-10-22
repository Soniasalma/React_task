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
      !pokemon && state.pokemons.push(action.payload)
      

    },
    removeFromTeam: (state , action) => {
      
    state.pokemons=state.pokemons.filter(item=>item.id != action.payload.id)
      
      
    },
    resetTeam: (state) => {
      
      state.pokemons=[]
        
        
      },
   
   
  },
})

// Action creators are generated for each case reducer function
export const { addToTeam,removeFromTeam ,resetTeam} = teamSlice.actions

export default teamSlice.reducer