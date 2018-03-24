import axios from 'axios'
import { stringify } from 'query-string'

export const getUrl = (url) => axios.get(url)

export const getAll = (urls) => axios.all(urls)

export const getPokemons = (params) => axios.get(`https://pokeapi.co/api/v2/pokemon/?${stringify(params)}`)

export const getTypes = (params) => axios.get(`https://pokeapi.co/api/v2/type/?${stringify(params)}`)
