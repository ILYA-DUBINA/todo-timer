import React from 'react';
import PropTypes from 'prop-types';

const TasksFilter = (props) => {
  const { filter, onFilterChange } = props;

  const buttonsArray = [
    { name: null, label: 'All', id: 1 },
    { name: undefined, label: 'Active', id: 2 },
    { name: 'completed', label: 'Completed', id: 3 },
  ];

  const buttons = buttonsArray.map(({ name, label, id }) => {
    const isActive = filter === name;
    const clazz = isActive ? 'selected' : null;
    return (
      <li key={id}>
        <button type="button" className={clazz} onClick={() => onFilterChange(name)}>
          {label}
        </button>
      </li>
    );
  });

  return (
    <>
      <ul className="filters">{buttons}</ul>
    </>
  );
};

TasksFilter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};

export default TasksFilter;
