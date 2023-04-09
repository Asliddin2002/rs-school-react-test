import React, { SetStateAction, Dispatch } from 'react';
import { dataType } from 'api/datatype';
import useImage from 'hooks/useImage';

type propsType = {
  data: dataType;
  setModal: Dispatch<SetStateAction<boolean | undefined>>;
};

const Modal = (props: propsType) => {
  const {
    name,
    academyAwardNominations,
    academyAwardWins,
    boxOfficeRevenueInMillions,
    budgetInMillions,
    rottenTomatoesScore,
    runtimeInMinutes,
  } = props?.data;
  const { image } = useImage(name);

  const { setModal } = props;

  return (
    <div
      data-testid="overlay"
      onClick={() => setModal(false)}
      className="absolute -top-[210px] -bottom-[150px] flex items-start justify-center left-0 right-0 bg-black bg-opacity-70 z-50"
    >
      <div className="bg-white w-[500px] lg:w-[1000px] lg:h-[700px] fixed flex flex-col sm:flex-row mt-[130px]">
        <div
          onClick={() => setModal(false)}
          className="absolute top-3 right-4 font-semibold cursor-pointer text-[18px]"
        >
          x
        </div>
        <div className="sm:w-1/2 flex items-center justify-center">
          <img
            data-testid="image"
            className=" h-[300px] sm:h-[700px] sm:w-full"
            src={image}
            alt={`${name}`}
          />
        </div>
        <div className="mt-[50px] sm:w-1/2 ">
          <h1 data-testid="name" className=" text-center font-semibold text-[28px]">
            {name}
          </h1>
          <div className="px-[20px] py-[30px]">
            <span className=" italic font-semibold"> {name}</span> is a one of the most popular
            movies in cenima history. Here is below breif information about it.
            <ul className="mt-[20px] flex flex-col gap-2">
              <li data-testid="li">Academy Award Nominations - {academyAwardNominations}</li>
              <li data-testid="li">Academy Award Wins - {academyAwardWins}</li>
              <li data-testid="li">
                Box Off Ice Revenue in Millions - {boxOfficeRevenueInMillions}
              </li>
              <li data-testid="li">Budget in Millions - {budgetInMillions}</li>
              <li data-testid="li">Rotten Tomatoes Score - {rottenTomatoesScore}</li>
              <li data-testid="li">Run time in minutes - {runtimeInMinutes}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
