
import './App.css';


import { Container,Team} from './components/index';
import { Header,Footer } from './sections/index';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

  import {Home,Profile} from './pages/index';
  import {Pokemons}from './components/index'
import PokemonList from './components/PokemonsList/PokemonList';
import CardOfPokemon from './components/CardOfPokemon/CardOfPokemon';

const App =() =>{
  return (
    <>
    
   <Router>
    
    
    <Container>
      <Routes>
        <Route path="/" element={<PokemonList/>}/> 
        <Route path="/CardOfPokemon/:id" element={<CardOfPokemon/>}/>
        <Route path="/team" element={<><Team/></>}/>
        
    </Routes>
     
    </Container>
    
   
   </Router>
   
    </>
  )
}

export default App;
