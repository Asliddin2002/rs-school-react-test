import React from 'react';

export type inputValuetype = {
  name: string;
  date: string;
  continent: string;
  gender: string;
  agreement: boolean;
  image: string;
};
type propsType = {
  card: inputValuetype;
};

const FormCard = ({ card }: propsType) => {
  const { name, image, gender, continent, date } = card;
  return (
    <div className="shadow-md py-[15px] px-[20px] mt-9 rounded-sm flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center gap-2">
        <img className="w-[50px] h-[50px] rounded-full" src={image} alt="avatar" />
        <h3>{name}</h3>
      </div>
      <div className="flex gap-2 flex-col">
        <div className="flex gap-8 justify-between">
          Gender <span className=" italic">{gender}</span>
        </div>
        <div className="flex gap-8 justify-between">
          Continent <span className=" italic">{continent}</span>
        </div>
        <div className="flex gap-8 justify-between">
          Date of Birth <span className=" italic">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
