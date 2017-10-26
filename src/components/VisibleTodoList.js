import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import { getVisibleTodos } from '../reducers/index';

const mapStateToProps = (state, { match }) => {
  const { currentFilter } = match.params;
  return {
    todos: getVisibleTodos(state, currentFilter || 'all'),
  };
};


const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  {onTodoClick: toggleTodo}
)(TodoList));

export default VisibleTodoList;
