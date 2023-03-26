import React from 'react';

type propType = {
  continent: React.RefObject<HTMLSelectElement>;
  validate: boolean;
};

const SelectInput = (props: propType) => {
  const { continent, validate } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="countries">Choose a Continent:</label>
      <select
        className="outline-none border py-2 pl-2 rounded"
        name="country"
        id="countries"
        ref={continent}
      >
        <option value="false">Select</option>
        <option value="european">Europe</option>
        <option value="asian">Asia</option>
        <option value="american">America</option>
        <option value="african">Africa</option>
      </select>
      {validate && <div className="text-[13px] text-red-500">Please, Select the Continent</div>}
    </div>
  );
};

export default SelectInput;
