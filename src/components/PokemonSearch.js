import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as SearchActions from '../actions/SearchActions'

const preloader = <div>Loading</div>

const renderPokemon = (pokemon) => (
  <div>
    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
    <div>Name: {pokemon.name}</div>
    <div>Weight: {pokemon.weight}</div>
    <div>Abilities: {pokemon.abilities.map(ability =>
        <span>{ability.ability.name}{ability.is_hidden && '(hidden)'} </span>
      )}
    </div>
    <div>Types: {pokemon.types.map((type, i) =>
        <span key={i}>{type.type.name} </span>
      )}
    </div>
  </div>
)

class Search extends PureComponent {
  state = {
    searchValue: '',
  }
  render () {
    const {
      pokemon,
      loading,
      error,
      SearchActions
    } = this.props
    const {
      searchValue
    } = this.state
    const closeSearch = <div onClick={() => SearchActions.pokemonsSearchClose()}>Close X</div>
    return (
      <div>
        <input
          type='search'
          onChange={(e) => {
            const { target: { value } } = e
            this.setState({ searchValue: value })
          }}
          onKeyDown={(e) => {
            const { keyCode } = e
            if (keyCode === 13) {
              searchValue !== '' && SearchActions.pokemonsSearch(searchValue)
            }
          }}
        />
        <button
          onClick={() => searchValue !== '' && SearchActions.pokemonsSearch(searchValue)}
        >
          Search
        </button>
        <div>
            {
              loading
                ? preloader
                : <div>{pokemon && closeSearch} {pokemon && renderPokemon(pokemon)}</div>
            }
        <div>
            {
              error && error.code && <div>{closeSearch} {error.data.detail}</div>
            }
          </div>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  SearchActions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    pokemon: state.searchStore.pokemon,
    loading: state.searchStore.loading,
    error: state.searchStore.error
  }
}

function mapDispatchToProps (dispatch) {
  return {
    SearchActions: bindActionCreators(SearchActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
