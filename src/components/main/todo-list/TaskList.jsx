import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

const TaskList = (props) => {
  let { todos, onDeleted, onToggleItem, onToggleItemEditing, onStartTimer, onPauseTimer, updateItem } = props;
  let elements = todos.map((item) => {
    const { id } = item;

    return (
      <Task
        key={id}
        {...item}
        onStartTimer={() => onStartTimer(id)}
        onPauseTimer={() => onPauseTimer(id)}
        onDeleted={() => onDeleted(id)}
        onToggleItem={() => onToggleItem(id)}
        onToggleItemEditing={() => onToggleItemEditing(id)}
        updateItem={updateItem}
      />
    );
  });

  return (
    <>
      <ul className="todo-list">{elements}</ul>
    </>
  );
};

TaskList.propTypes = {
  todos: PropTypes.array,
  onDeleted: PropTypes.func,
  onToggleItem: PropTypes.func,
  onToggleItemEditing: PropTypes.func,
  updateItem: PropTypes.func,
};

export default TaskList;
