import React from 'react';

type propType = {
  name: string;
};

const TextInput = (props: propType) => {
  const { name } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name">Your Name</label>
      <input
        className="outline-none border py-2 pl-2 rounded"
        type="text"
        id="name"
        name="name"
        placeholder="name"
      />
    </div>
  );
};

export default TextInput;
