import React from 'react';
import CardsItem from './CardsItem';
import { dataType } from 'api/datatype';

type propsType = {
  data: dataType[];
  handleModalOpen: (produuctId: string) => void;
};

const CardsList: React.FC<propsType> = ({ data, handleModalOpen }) => {
  if (!data[0]?.name)
    return <h1 className="text-[24px] mt-[100px]">Nothing found. Please, Write correctly!!</h1>;

  return (
    <div className="flex justify-center items-center sm:items-baseline gap-3 flex-wrap mt-[50px]">
      {data?.map((item) => (
        <CardsItem key={item._id} handleModalOpen={handleModalOpen} item={item} />
      ))}
    </div>
  );
};

export default CardsList;
