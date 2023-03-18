import React, { Component } from 'react';
type MyProps = {
  house: {
    id: number;
    description: string;
    price: number;
    location: string;
    images: string;
    isSelled: boolean;
  };
};

export default class CardsItem extends Component<MyProps> {
  render() {
    const { description, price, location, images, isSelled } = this.props.house;
    return (
      <div className="w-[300px] bg-white  hover:shadow-md">
        <div className="w-full">
          <img
            className=" w-full h-[300px] object-fill"
            src={require(`./../assets/images/${images}.jpg`)}
            alt={`${images}`}
          />
        </div>
        <div className="flex flex-col py-2 px-2 gap-4">
          <h3 className="text-[13px]">{description}</h3>
          <h3 className="italic">{location}</h3>
          <div className="flex items-center justify-between">
            <h3 className="">{price} so`m</h3>
            {isSelled ? (
              <span className="italic text-red-600">Selled</span>
            ) : (
              <button className="bg-black py-1 px-2 w-[80px] text-white rounded-sm hover:bg-white hover:text-black hover:shadow-md">
                Buy
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
