import React from 'react';

type propType = {
  gender1: React.RefObject<HTMLInputElement>;
  gender2: React.RefObject<HTMLInputElement>;
  validate: boolean;
};

const RadioInput = (props: propType) => {
  const { gender1, gender2, validate } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="switcher">Your gender</label>
      <div className="flex gap-2">
        <input ref={gender1} type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>
        <br />
        <input ref={gender2} type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>
      </div>
      {validate && <div className="text-[13px] text-red-500">Please, Enter you gender</div>}
    </div>
  );
};

export default RadioInput;
