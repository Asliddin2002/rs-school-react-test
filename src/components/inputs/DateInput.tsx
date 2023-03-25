import React from 'react';

type propType = {
  date: React.RefObject<HTMLInputElement>;
};

const DateInput = (props: propType) => {
  const { date } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="datetime">Date of Birth</label>
      <input
        className="outline-none border py-2 pl-2 rounded"
        type="date"
        id="date"
        name="date"
        placeholder="Date"
        ref={date}
      />
    </div>
  );
};

export default DateInput;
