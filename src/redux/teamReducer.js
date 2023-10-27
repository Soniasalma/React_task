import { createSlice } from '@reduxjs/toolkit'

const initialState = 
  localStorage.getItem('todoList') !== null
    ? localStorage.getItem('todoList')
    : { pokemons: [] };

localStorage.setItem('todoList', initialState);

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
      if(state.pokemons.length === 0 )
      alert("There are no pokemons in the team")
    else{
    
    state.pokemons=state.pokemons.filter(item=>item.id !== action.payload.id)
    alert("The Pokemon has removed from the team")}
    
      
    },
    resetTeam: (state) => {
      
      state.pokemons=[]
        if(state.pokemons.length===0)
        alert("there are no pokemons in the team ")
        
      },
      dragAndDropSave(state, action) {
        state.pokemons = action.payload;
        localStorage.setItem('todoList', state);
      },
   
   
  },
})

// Action creators are generated for each case reducer function
export const { addToTeam,removeFromTeam ,resetTeam,dragAndDropSave} = teamSlice.actions

export default teamSlice.reducer