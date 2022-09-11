import React, { useState } from 'react';

const NewTaskForm = (props) => {
  const [label, setLabel] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (label === '') return;
    let min = Number(minutes);
    let sec = seconds.length === 1 ? '0' + seconds : seconds === '' ? '00' : seconds;
    props.addItemElementForm(label, min, sec);
    setLabel('');
    setMinutes('');
    setSeconds('');
  };

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form" id="form" onSubmit={onSubmit}>
          <input
            form="form"
            name="label"
            type="text"
            className="new-todo"
            onChange={(e) => setLabel(e.target.value)}
            placeholder="What needs to be done?"
            value={label}
            autoFocus
          />
          <input
            form="form"
            name="minutes"
            type="number"
            className="new-todo-form__timer"
            placeholder="Min"
            onChange={(e) => setMinutes(e.target.value)}
            value={minutes}
            autoFocus
          />
          <input
            form="form"
            name="seconds"
            type="number"
            className="new-todo-form__timer"
            placeholder="Sec"
            onChange={(e) => setSeconds(e.target.value)}
            value={seconds}
            autoFocus
          />
          <input style={{ display: 'none' }} type="submit" value="Submit" />
        </form>
      </header>
    </>
  );
};

export default NewTaskForm;
