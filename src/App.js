import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as TypesActions from './actions/TypesActions'
import PokemonTypes from './components/PokemonTypes'

class App extends Component {
  componentDidMount () {
    this.props.TypesActions.pokemonsGetTypesList()
  }
  render () {
    return (
      <div>
        <PokemonTypes />
      </div>
    )
  }
}

App.propTypes = {
  TypesActions: PropTypes.object.isRequired
}

const mapDispatchToProps = {
  TypesActions
}

export default connect(null, mapDispatchToProps)(App)
