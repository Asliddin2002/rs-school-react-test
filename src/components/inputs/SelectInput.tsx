import React from 'react';

type propType = {
  country: string;
};

const SelectInput = (props: propType) => {
  const { country } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="countries">Choose a Country:</label>
      <select className="outline-none border py-2 pl-2 rounded" name="country" id="countries">
        <option value="false">Select</option>
        <option value="uz">Uzbekistan</option>
        <option value="eng">USA</option>
        <option value="ru">Russia</option>
        <option value="in">India</option>
      </select>
    </div>
  );
};

export default SelectInput;
