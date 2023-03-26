import React from 'react';

type propType = {
  date: React.RefObject<HTMLInputElement>;
  validate: boolean;
};

const DateInput = (props: propType) => {
  const { date, validate } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="datetime">Date of Birth</label>
      <input
        data-testid="date-input"
        className="outline-none border py-2 pl-2 rounded"
        type="date"
        id="date"
        name="date"
        placeholder="Date"
        ref={date}
      />
      {validate && (
        <div data-testid="text-input-validation" className="text-[13px] text-red-500">
          Please, fill the input
        </div>
      )}
    </div>
  );
};

export default DateInput;
