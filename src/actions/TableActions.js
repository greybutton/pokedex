export const POKEMONS_GET_REQUEST = 'POKEMONS_GET_REQUEST'
export const POKEMONS_GET_SUCCESS = 'POKEMONS_GET_SUCCESS'
export const POKEMONS_GET_FAILED = 'POKEMONS_GET_FAILED'

export const POKEMONS_GET_PREV_REQUEST = 'POKEMONS_GET_PREV_REQUEST'
export const POKEMONS_GET_PREV_SUCCESS = 'POKEMONS_GET_PREV_SUCCESS'
export const POKEMONS_GET_PREV_FAILED = 'POKEMONS_GET_PREV_FAILED'

export const POKEMONS_GET_NEXT_REQUEST = 'POKEMONS_GET_NEXT_REQUEST'
export const POKEMONS_GET_NEXT_SUCCESS = 'POKEMONS_GET_NEXT_SUCCESS'
export const POKEMONS_GET_NEXT_FAILED = 'POKEMONS_GET_NEXT_FAILED'

export const POKEMONS_GET_TYPE_REQUEST = 'POKEMONS_GET_TYPE_REQUEST'
export const POKEMONS_GET_TYPE_SUCCESS = 'POKEMONS_GET_TYPE_SUCCESS'
export const POKEMONS_GET_TYPE_FAILED = 'POKEMONS_GET_TYPE_FAILED'

export function pokemonsGet () {
  return {
    type: POKEMONS_GET_REQUEST
  }
}

export function pokemonsGetSuccess (data) {
  return {
    type: POKEMONS_GET_SUCCESS,
    payload: data
  }
}

export function pokemonsGetFailed (error) {
  return {
    type: POKEMONS_GET_FAILED,
    error
  }
}

export function pokemonsGetPrev (url) {
  return {
    type: POKEMONS_GET_PREV_REQUEST,
    payload: {
      url
    }
  }
}

export function pokemonsGetPrevSuccess (data) {
  return {
    type: POKEMONS_GET_PREV_SUCCESS,
    payload: data
  }
}

export function pokemonsGetPrevFailed (error) {
  return {
    type: POKEMONS_GET_PREV_FAILED,
    error
  }
}

export function pokemonsGetNext (url) {
  return {
    type: POKEMONS_GET_NEXT_REQUEST,
    payload: {
      url
    }
  }
}

export function pokemonsGetNextSuccess (data) {
  return {
    type: POKEMONS_GET_NEXT_SUCCESS,
    payload: data
  }
}

export function pokemonsGetNextFailed (error) {
  return {
    type: POKEMONS_GET_NEXT_FAILED,
    error
  }
}

export function pokemonsGetType (url) {
  return {
    type: POKEMONS_GET_TYPE_REQUEST,
    payload: {
      url
    }
  }
}

export function pokemonsGetTypeSuccess (data) {
  return {
    type: POKEMONS_GET_TYPE_SUCCESS,
    payload: data
  }
}

export function pokemonsGetTypeFailed (error) {
  return {
    type: POKEMONS_GET_TYPE_FAILED,
    error
  }
}
