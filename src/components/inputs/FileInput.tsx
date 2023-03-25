import React from 'react';

type propType = {
  image: React.RefObject<HTMLInputElement>;
};

const FileInput = (props: propType) => {
  const { image } = props;
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
    </div>
  );
};

export default FileInput;
