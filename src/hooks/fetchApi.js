import axios from 'axios';

export const fetchApi=axios.create({
    baseURL:'https://pokeapi.co/api/v2'
})