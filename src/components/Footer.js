import React from 'react';
import { withRouter } from 'react-router-dom';

import FilterLink from './FilterLink';

const Footer = ({ match }) => {
  const { filter } = match.params;
  console.log(filter)
  return (
    <p>
      Show:
      {" "}
      <FilterLink filter="" active={filter === undefined}>
        All
      </FilterLink>
      {", "}
      <FilterLink filter="active" active={filter === 'active'}>
        Active
      </FilterLink>
      {", "}
      <FilterLink filter="completed" active={filter === 'completed'}>
        Completed
      </FilterLink>
    </p>
  )
};

export default withRouter(Footer);
