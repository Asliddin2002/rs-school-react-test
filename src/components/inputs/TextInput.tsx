import React from 'react';

type propType = {
  name: React.RefObject<HTMLInputElement> | null;
  validate: boolean;
};

const TextInput = (props: propType) => {
  const { name, validate } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name">Your Name</label>
      <input
        data-testid="text-input"
        className="outline-none border py-2 pl-2 rounded"
        type="text"
        id="name"
        name="name"
        placeholder="name"
        ref={name}
      />
      {validate && (
        <div data-testid="text-input-validation" className="text-[13px] text-red-500">
          Please, Enter your name
        </div>
      )}
    </div>
  );
};

export default TextInput;
