import React from 'react';
import CardsItem from './CardsItem';
import { dataType } from 'api/datatype';

type propsType = {
  data: dataType[];
};

const CardsList: React.FC<propsType> = ({ data }) => {
  if (!data[0]?.name)
    return <h1 className="text-[24px] mt-[100px]">Nothing found. Please, Write correctly!!</h1>;
  return (
    <div className="flex justify-center items-center sm:items-baseline gap-3 flex-wrap mt-[50px]">
      {data?.map((item) => (
        <CardsItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default CardsList;
