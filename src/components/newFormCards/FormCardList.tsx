import { inputValuetype } from 'pages/form/type';
import React from 'react';
import FormCard from './FormCard';

type propsType = {
  data: inputValuetype[];
};
const FormCardList = ({ data }: propsType) => {
  return (
    <div className="">
      <div className="w-full flex flex-wrap gap-3 ">
        {data?.map((item) => (
          <FormCard key={item.image} card={item} />
        ))}
      </div>
    </div>
  );
};

export default FormCardList;
