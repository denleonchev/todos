import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Link from './Link';

const FilterLink = ({children, filter, match}) => {
  const { currentFilter = '' } = match.params;
  return (
    <Link filter={filter} active={currentFilter === filter}>
      {children}
    </Link>
  )
}

export default withRouter(FilterLink);
