import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
const Home = ({ dispatch, props }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        props.toggleTodo(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
      <a href = '/todos'>link</a>
    </div>
  )
}
const getVisibleTodos = (todos, filter) => {
  console.log(todos)
 
}
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

