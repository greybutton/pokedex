import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import * as TableActions from '../actions/TableActions'

const enchance = reduxForm({
  form: 'limit'
})

const renderLimit = ({ input }) => (
  <div {...input}>
    <label>
      <input
        name='limit'
        type='radio'
        value={3}
      />
      3
    </label>
    <label>
      <input
        name='limit'
        type='radio'
        value={6}
      />
      6
    </label>
    <label>
      <input
        name='limit'
        type='radio'
        value={9}
      />
      9
    </label>
  </div>
)

const limit = (props) => {
  const {
    TableActions
  } = props
  return (
    <div>
      Limits:
      <span>
        <Field
          name='limit'
          component={renderLimit}
          onChange={(event, value) => TableActions.pokemonsGet(value)}
        />
      </span>
    </div>
  )
}

limit.propTypes = {
  TableActions: PropTypes.object.isRequired
}

function mapDispatchToProps (dispatch) {
  return {
    TableActions: bindActionCreators(TableActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(enchance(limit))
