import React from 'react';

type propType = {
  gender: React.RefObject<HTMLInputElement>;
};

const RadioInput = (props: propType) => {
  const { gender } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="switcher">Your gender</label>
      <div ref={gender} className="flex gap-2">
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>
        <br />
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>
      </div>
    </div>
  );
};

export default RadioInput;
