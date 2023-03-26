import React from 'react';

type propType = {
  image: React.RefObject<HTMLInputElement>;
  validate: boolean;
};

const FileInput = (props: propType) => {
  const { image, validate } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="file">Enter profile picture</label>
      <input
        className="outline-none border py-2 pl-2 rounded"
        type="file"
        name="file"
        id="file"
        accept=".png, .jpg, .jpeg"
        ref={image}
      />
      {validate && (
        <div className="text-[13px] text-red-500">Please, Enter you profile picture</div>
      )}
    </div>
  );
};

export default FileInput;
