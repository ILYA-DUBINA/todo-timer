import React, { useState } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Task = (props) => {
  let {
    id,
    name,
    description,
    onDeleted,
    onToggleItem,
    onToggleItemEditing,
    onStartTimer,
    onPauseTimer,
    editing,
    completed,
    date,
    minutes,
    seconds,
    updateItem,
  } = props;

  const [newLabel, setNewLabel] = useState(props.description);

  const onLabelChangeTwo = (e) => {
    setNewLabel(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateItem(id, newLabel);
  };

  if (completed) {
    name = 'completed';
  }
  if (editing) {
    name = 'editing';
  }

  return (
    <>
      <li className={name}>
        <div className="view">
          {name === 'completed' ? (
            <input className="toggle" type="checkbox" onClick={onToggleItem} defaultChecked />
          ) : (
            <input className="toggle" type="checkbox" onClick={onToggleItem} />
          )}
          <label>
            <span className="title">{description}</span>
            <span className="description">
              <button className="icon icon-play" onClick={onStartTimer}></button>
              <button className="icon icon-pause" onClick={onPauseTimer}></button>
              <div>
                <span>{minutes}</span> : <span>{seconds}</span>
              </div>
            </span>
            <span className="created">created {formatDistanceToNow(date, { includeSeconds: true })} ago</span>
          </label>
          <button className="icon icon-edit" onClick={onToggleItemEditing}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        {name === 'editing' ? (
          <form onSubmit={onSubmit}>
            <input type="text" className="edit" onChange={onLabelChangeTwo} value={newLabel} />
          </form>
        ) : null}
      </li>
    </>
  );
};

Task.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleItem: PropTypes.func,
  onToggleItemEditing: PropTypes.func,
  editing: PropTypes.bool,
  completed: PropTypes.bool,
  date: PropTypes.object,
  updateItem: PropTypes.func,
};

export default Task;
