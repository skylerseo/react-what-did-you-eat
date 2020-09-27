import React, { memo } from 'react';

const FoodAddForm = memo(props => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="먹은 음식을 입력해주세요"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default FoodAddForm;
