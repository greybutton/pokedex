import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Pagination from './Pagination'
import * as TableActions from '../actions/TableActions'

const table = (props) => {
  const {
    pokemons,
    pagination,
    loading,
    error,
    TableActions
  } = props
  if (loading) {
    return <div>Loading</div>
  }
  if (error.code) {
    return <div>Error</div>
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Ability</th>
            <th>Type</th>
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
                <td>
                  {pokemon.types.map((type, i) =>
                    <div key={i}>{type.type.name}</div>
                  )}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {
        pagination &&
        <Pagination
          pagination={pagination}
          previous={TableActions.pokemonsGetPrev}
          next={TableActions.pokemonsGetNext}
        />
      }
    </div>
  )
}

table.propTypes = {
  pokemons: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  pagination: PropTypes.object,
  error: PropTypes.object,
  TableActions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    pokemons: state.tableStore.pokemons,
    loading: state.tableStore.loading,
    pagination: state.tableStore.pagination,
    error: state.tableStore.error
  }
}

function mapDispatchToProps (dispatch) {
  return {
    TableActions: bindActionCreators(TableActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(table)
