import React from 'react';

type propType = {
  switcher: string;
};

const RadioInput = (props: propType) => {
  const { switcher } = props;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="switcher">I want to receive notifications about promo, sales</label>
      <div className="flex gap-2">
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label htmlFor="html">HTML</label>
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label htmlFor="css">CSS</label>
        <br />
        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
        <label htmlFor="javascript">JavaScript</label>
      </div>
    </div>
  );
};

export default RadioInput;
