
import './App.css';

/*import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';*/
import { Container,Team} from './components/index';
import { Header,Footer } from './sections/index';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

  import {Home,Profile} from './pages/index';
  import {Pokemons}from './components/index'
import PokemonList from './components/PokemonsList/PokemonList';
import CardOfPokemon from './components/CardOfPokemon/CardOfPokemon';

  

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
const App =() =>{
  return (
    <>
    
   <Router>
    
    
    <Container>
      <Routes>
        <Route path="/" element={<PokemonList/>}/> 
        <Route path="/CardOfPokemon/:id" element={<CardOfPokemon/>}/>
        <Route path="/team" element={<><Team/><PokemonList/></>}/>
        
    </Routes>
     
    </Container>
    
   
   </Router>
   
    </>
  )
}

export default App;
