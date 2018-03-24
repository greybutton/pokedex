import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PokemonsActions from './actions/PokemonsActions'
import PokemonTable from './components/PokemonTable'
import Pagination from './components/Pagination'

class App extends Component {
  componentDidMount () {
    this.props.PokemonsActions.pokemonsGet()
  }
  render () {
    const { loadingPokemons, errorPokemons } = this.props
    if (loadingPokemons) {
      return <div>Loading</div>
    }
    if (errorPokemons) {
      return <div>Error</div>
    }
    return (
      <div>
        <PokemonTable />
        <Pagination />
      </div>
    )
  }
}

App.propTypes = {
  loadingPokemons: PropTypes.bool.isRequired,
  errorPokemons: PropTypes.object,
  PokemonsActions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    loadingPokemons: state.pokemonsStore.loading,
    errorPokemons: state.pokemonsStore.error
  }
}

function mapDispatchToProps (dispatch) {
  return {
    PokemonsActions: bindActionCreators(PokemonsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
