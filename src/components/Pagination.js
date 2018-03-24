import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PokemonsActions from '../actions/PokemonsActions'

const pagination = (props) => {
  const {
    pagination: { previous, next },
    PokemonsActions
  } = props
  return (
    <div>
      {
        previous && <div onClick={() => PokemonsActions.pokemonsGetPrev(previous)}>Prev</div>
      }
      {
        next && <div onClick={() => PokemonsActions.pokemonsGetNext(next)}>Next</div>
      }
    </div>
  )
}

pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  PokemonsActions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    pagination: state.pokemonsStore.pagination
  }
}

function mapDispatchToProps (dispatch) {
  return {
    PokemonsActions: bindActionCreators(PokemonsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(pagination)
