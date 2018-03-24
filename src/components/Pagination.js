import React from 'react'
import PropTypes from 'prop-types'

const pagination = (props) => {
  const {
    pagination: { previous, next },
    previous: getPrevious,
    next: getNext
  } = props
  return (
    <div>
      {
        previous && <div onClick={() => getPrevious(previous)}>Prev</div>
      }
      {
        next && <div onClick={() => getNext(next)}>Next</div>
      }
    </div>
  )
}

pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired
}

export default pagination
