import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TypesActions from '../actions/TypesActions'

const types = (props) => {
  const {
    types,
    loading,
    error,
    TypesActions
  } = props
  const title = 'Types'
  if (loading) {
    return <div>{title}: Loading</div>
  }
  if (error.code) {
    return <div>{title}: Error</div>
  }
  return (
    <div className='pokemons-types'>
      {title}:
      {
        types.map((type, i) =>
          (<span
            key={i}
            onClick={() => TypesActions.pokemonsGetType(type.url)}
          >
            {type.name}
          </span>)
        )
      }
    </div>
  )
}

types.propTypes = {
  types: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  TypesActions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    types: state.typesStore.types,
    loading: state.typesStore.loading,
    error: state.typesStore.error
  }
}

function mapDispatchToProps (dispatch) {
  return {
    TypesActions: bindActionCreators(TypesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(types)
