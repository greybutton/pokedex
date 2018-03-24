import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const table = ({ pokemons }) => {
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

table.propTypes = {
  pokemons: PropTypes.array.isRequired
}

function mapStateToProps (state) {
  return {
    pokemons: state.pokemonsStore.pokemons
  }
}

export default connect(mapStateToProps)(table)
