import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import TodoList from './TodoList';
import { getVisibleTodos } from '../reducers/index';
import { fetchTodos } from '../api';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if(prevProps.currentFilter !== this.props.currentFilter) {
      this.fetchData();
    }
  }
  fetchData() {
    const { currentFilter, receiveTodos } = this.props;
    fetchTodos(currentFilter || 'all').
      then((todos) => {
        receiveTodos(currentFilter, todos)
      })
  }
  render() {
    const { toggleTodo, ...rest} = this.props;
    return (
      <TodoList { ...rest } onTodoClick={toggleTodo} />
    )
  }
}

const mapStateToProps = (state, { match }) => {
  const { currentFilter } = match.params;
  return {
    todos: getVisibleTodos(state, currentFilter || 'all'),
    currentFilter
  };
};


VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList));

export default VisibleTodoList;
