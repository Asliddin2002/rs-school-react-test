import React from 'react';

type propType = {
  agreement: React.RefObject<HTMLInputElement>;
};

const CheckBoxInput = (props: propType) => {
  const { agreement } = props;
  return (
    <div className="flex gap-2">
      <input
        className="outline-none border py-2 pl-2 rounded"
        type="checkbox"
        id="personal-data"
        name="data"
        ref={agreement}
      />
      <label htmlFor="personal-data">I consent to my personal data</label>
    </div>
  );
};

export default CheckBoxInput;
