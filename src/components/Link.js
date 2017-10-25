import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setVisibilityFilter } from '../actions';

const FilterLink = ({children, filter, active}) => {
  if (active) {
    return(
      <span>{children}</span>
    )
  }
  return (
    <Link to={"/" + filter}>
      {children}
    </Link>
  )
}

export default FilterLink;
