import { dataType } from 'api/datatype';
import useImage from 'hooks/useImage';
import React from 'react';
type MyProps = {
  item: dataType;
  handleModalOpen: (produuctId: string) => void;
};

const CardsItem = (props: MyProps) => {
  const { name, _id } = props.item;
  const { handleModalOpen } = props;

  const { image } = useImage(name);

  return (
    <div data-testid="card" className="w-[300px] bg-white  hover:shadow-md">
      <div className="w-full relative h-[430px] cursor-pointer">
        <img
          data-testid="image"
          onClick={() => handleModalOpen(_id)}
          className=" w-full object-fill h-[430px]"
          src={image}
        />
        <div className="absolute  bottom-0 left-0 right-0 py-4 px-4  bg-black">
          <div data-testid="title" className="  text-center font-semibold text-white">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsItem;
