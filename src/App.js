import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TableActions from './actions/TableActions'
import * as TypesActions from './actions/TypesActions'
import PokemonTable from './components/PokemonTable'
import PokemonTypes from './components/PokemonTypes'
import PokemonSearch from './components/PokemonSearch'

class App extends Component {
  componentDidMount () {
    this.props.TableActions.pokemonsGet()
    this.props.TypesActions.pokemonsGetTypesList()
  }
  render () {
    return (
      <div>
        <PokemonSearch />
        <br />
        <PokemonTypes />
        <br />
        <PokemonTable />
      </div>
    )
  }
}

App.propTypes = {
  TableActions: PropTypes.object.isRequired,
  TypesActions: PropTypes.object.isRequired
}

function mapDispatchToProps (dispatch) {
  return {
    TableActions: bindActionCreators(TableActions, dispatch),
    TypesActions: bindActionCreators(TypesActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App)
