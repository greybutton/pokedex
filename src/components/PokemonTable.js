import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Pagination from './Pagination'
import Limits from './PokemonLimits'
import * as TableActions from '../actions/TableActions'

const preloader = <div>Loading</div>

const pokemonsTable = (pokemons) => (
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
            <td data-label="Avatar"><img src={pokemon.sprites.front_default} alt={pokemon.name} /></td>
            <td data-label="Name">{pokemon.name}</td>
            <td data-label="Ability">
              {pokemon.abilities.map((ability, i) =>
                !ability.is_hidden && <span key={i}>{ability.ability.name}</span>
              )}
            </td>
            <td data-label="Type">
              {pokemon.types.map((type, i) =>
                <div key={i}>{type.type.name}</div>
              )}
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
)

class Table extends PureComponent {
  state = {
    filterValue: ''
  }
  render () {
    const {
      pokemons,
      pagination,
      loading,
      error,
      TableActions
    } = this.props

    const {
      filterValue
    } = this.state

    const pokemonsFiltered = pokemons.filter(pokemon => pokemon.name.includes(filterValue))

    if (error && error.code) {
      return <div>Error</div>
    }
    return (
      <div>
        {
          pagination &&
          <Limits />
        }
        <div>
          Filter
          <input
            type="search"
            onChange={(e) => {
              const { target: { value } } = e
              this.setState({ filterValue: value })
            }}
          />
        </div>
        {
          loading
            ? preloader
            : pokemonsTable(pokemonsFiltered)
        }
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
}

Table.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Table)
