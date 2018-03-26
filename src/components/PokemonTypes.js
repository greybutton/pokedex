import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const types = (props) => {
  const {
    types,
    loading,
    error
  } = props
  const title = 'Types'
  if (loading) {
    return <div>{title}: Loading</div>
  }
  if (error && error.code) {
    return <div>{title}: Error</div>
  }
  return (
    <div className='pokemons-types'>
      {title}:
      {
        types.map((type, i) =>
          (<span
            key={i}
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
  error: PropTypes.object
}

function mapStateToProps (state) {
  return {
    types: state.typesStore.types,
    loading: state.typesStore.loading,
    error: state.typesStore.error
  }
}

export default connect(mapStateToProps)(types)
