import React from 'react';

type propType = {
  continent: React.RefObject<HTMLSelectElement>;
};

const SelectInput = (props: propType) => {
  const { continent } = props;
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
    </div>
  );
};

export default SelectInput;
