import React from 'react';

type propType = {
  agreement: React.RefObject<HTMLInputElement>;
  validate: boolean;
};

const CheckBoxInput = (props: propType) => {
  const { agreement, validate } = props;
  return (
    <div>
      <div className="flex gap-2">
        <input
          data-testid="check-input"
          className="outline-none border py-2 pl-2 rounded"
          type="checkbox"
          id="personal-data"
          name="data"
          ref={agreement}
        />
        <label htmlFor="personal-data">I consent to my personal data</label>
      </div>
      {validate && (
        <div data-testid="text-input-validation" className="text-[13px] text-red-500">
          Required
        </div>
      )}
    </div>
  );
};

export default CheckBoxInput;
