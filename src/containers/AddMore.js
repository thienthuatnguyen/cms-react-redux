import React from 'react'
import { connect } from 'react-redux'
import { addTodo, addNewTodo } from '../actions'

const AddMore = ({ addNewTodo,  props }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
       addNewTodo(input.value)
       //addTodo(input.value)
       console.log(props)
       //console.log(newtodos)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

// export default connect()(AddMore)
const mapStateToProps = state => ({
  todos: state.todos,
  newtodos: state.newtodos
})

const mapDispatchToProps = dispatch => ({
  addTodo: id => dispatch(addTodo(id)),
  addNewTodo: id => dispatch(addNewTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMore)