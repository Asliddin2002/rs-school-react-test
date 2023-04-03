import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import FormCardList from 'components/newFormCards/FormCardList';
import { inputValuetype } from './type';

const Form = () => {
  const [data, setData] = useState<inputValuetype<string>[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<inputValuetype<FileList>>();

  const onSubmit: SubmitHandler<inputValuetype<FileList>> = (data) => {
    const obj = {
      ...data,
      image: URL.createObjectURL(data.image[0]),
    };
    setData((prev) => [...(prev as inputValuetype<string>[]), obj]);
    reset();
  };

  return (
    <div className="container mx-auto gap-[30px] my-[50px] flex flex-col lg:flex-row items-center lg:items-baseline justify-center px-4 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full lg:w-1/2  shadow-md p-[40px] self-start "
      >
        <h2 className="text-center text-[28px]">Form</h2>

        <div className="flex flex-col gap-2">
          <label htmlFor="name">Your Name</label>
          <input
            data-testid="text-input"
            className="outline-none border py-2 pl-2 rounded"
            type="text"
            id="name"
            placeholder="name"
            {...register('name', { required: true })}
          />
          <div data-testid="text-input-validation" className="text-[13px] text-red-500">
            {errors.name && <span>This field is required</span>}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="countries">Choose a Continent:</label>
          <select
            className="outline-none border py-2 pl-2 rounded"
            id="countries"
            data-testid="select-input"
            {...register('continent', { required: true })}
          >
            <option value="">Select</option>
            <option value="european">Europe</option>
            <option value="asian">Asia</option>
            <option value="american">America</option>
            <option value="african">Africa</option>
          </select>
          <div data-testid="text-input-validation" className="text-[13px] text-red-500">
            {errors.continent && <span>This field is required</span>}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="datetime">Date of Birth</label>
          <input
            data-testid="date-input"
            className="outline-none border py-2 pl-2 rounded"
            type="date"
            id="date"
            placeholder="Date"
            {...register('date', { required: true })}
          />
          <div data-testid="text-input-validation" className="text-[13px] text-red-500">
            {errors.date && <span>This field is required</span>}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="switcher">Your gender</label>
          <div className="flex gap-2">
            <input
              data-testid="radio-input1"
              type="radio"
              id="male"
              value="male"
              {...register('gender', { required: true })}
            />
            <label htmlFor="male">Male</label>
            <br />
            <input
              data-testid="radio-input2"
              type="radio"
              id="female"
              {...register('gender', { required: true })}
              value="female"
            />
            <label htmlFor="female">Female</label>
          </div>
          <div data-testid="text-input-validation" className="text-[13px] text-red-500">
            {errors.gender && <span>This field is required</span>}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="file">Enter profile picture</label>
          <input
            data-testid="file-input"
            className="outline-none border py-2 pl-2 rounded"
            type="file"
            id="file"
            accept=".png, .jpg, .jpeg"
            {...register('image', {
              required: true,
            })}
          />
          <div data-testid="text-input-validation" className="text-[13px] text-red-500">
            {errors.image && <span>This field is required</span>}
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <input
              data-testid="check-input"
              className="outline-none border py-2 pl-2 rounded"
              type="checkbox"
              id="personal-data"
              {...register('agreement', {
                required: true,
              })}
            />
            <label htmlFor="personal-data">I consent to my personal data</label>
          </div>
          <div data-testid="text-input-validation" className="text-[13px] text-red-500">
            {errors.agreement && <span>This field is required</span>}
          </div>
        </div>
        <div className="reset relative w-full">
          <button
            type="submit"
            className="p-2.5 ml-2 z-10 w-full text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
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
