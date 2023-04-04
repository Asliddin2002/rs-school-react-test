import React, { useState } from 'react';

import FormCardList from 'components/newFormCards/FormCardList';
import { inputValuetype } from './type';
import FormElements from 'components/form/FormElements';

const Form = () => {
  const [data, setData] = useState<inputValuetype<string>[]>([]);

  return (
    <div className="container mx-auto gap-[30px] my-[50px] flex flex-col lg:flex-row items-center lg:items-baseline justify-center px-4 ">
      <FormElements setData={setData} />
      <hr />
      <div className="w-1/2">
        <h2 data-testid="infos-title" className="text-center text-[28px]">
          Personal information
        </h2>
        {data?.length ? (
          <FormCardList data={data} />
        ) : (
          <h2 className="text-center mt-5">No information. Create them yourself :)</h2>
        )}
      </div>
    </div>
  );
};

export default Form;
