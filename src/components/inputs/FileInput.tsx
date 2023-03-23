import React from 'react';

type propType = {
  file: string;
};

const FileInput = (props: propType) => {
  const { file } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="file">Enter file</label>
      <input
        className="outline-none border py-2 pl-2 rounded"
        type="file"
        name="file"
        id="file"
        accept=".png, .jpg, .jpeg"
      />
    </div>
  );
};

export default FileInput;
