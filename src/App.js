import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PokemonsActions from './actions/PokemonsActions'

class App extends Component {
  componentDidMount () {
    this.props.PokemonsActions.pokemonsGet()
  }
  render () {
    const { loadingPokemons, pokemons } = this.props
    if (loadingPokemons) {
      return <div>Loading</div>
    }
    return (
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Ability</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemons.map(pokemon => (
              <tr key={pokemon.id}>
                <td><img src={pokemon.sprites.front_default} alt={pokemon.name} /></td>
                <td>{pokemon.name}</td>
                <td>
                  {pokemon.abilities.map((ability, i) =>
                    !ability.is_hidden && <span key={i}>{ability.ability.name}</span>
                  )}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}

App.propTypes = {
  loadingPokemons: PropTypes.bool.isRequired,
  pokemons: PropTypes.array.isRequired,
  PokemonsActions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    loadingPokemons: state.pokemonsStore.loading,
    pokemons: state.pokemonsStore.pokemons
  }
}

function mapDispatchToProps (dispatch) {
  return {
    PokemonsActions: bindActionCreators(PokemonsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
