import React, { SetStateAction, Dispatch } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { inputValuetype } from 'pages/form/type';

type propsType = { setData: Dispatch<SetStateAction<inputValuetype<string>[]>> };

const FormElements = (props: propsType) => {
  const { setData } = props;
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
    alert('Data has been saved!!');
    setData((prev) => [...(prev as inputValuetype<string>[]), obj]);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full lg:w-1/2  shadow-md p-[40px] self-start "
    >
      <h2 className="text-center text-[28px]">Form</h2>

      <div className="flex flex-col gap-2">
        <label data-testid="label" htmlFor="name">
          Your Name
        </label>
        <input
          data-testid="input"
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
        <label data-testid="label" htmlFor="countries">
          Choose a Continent:
        </label>
        <select
          className="outline-none border py-2 pl-2 rounded"
          id="countries"
          data-testid="input"
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
        <label data-testid="label" htmlFor="datetime">
          Date of Birth
        </label>
        <input
          data-testid="input"
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
        <label data-testid="label" htmlFor="switcher">
          Your gender
        </label>
        <div className="flex gap-2">
          <input
            data-testid="input"
            type="radio"
            id="male"
            value="male"
            {...register('gender', { required: true })}
          />
          <label data-testid="label" htmlFor="male">
            Male
          </label>
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
        <label data-testid="label" htmlFor="file">
          Enter profile picture
        </label>
        <input
          data-testid="input"
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
            data-testid="input"
            className="outline-none border py-2 pl-2 rounded"
            type="checkbox"
            id="personal-data"
            {...register('agreement', {
              required: true,
            })}
          />
          <label data-testid="label" htmlFor="personal-data">
            I consent to my personal data
          </label>
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
  );
};

export default FormElements;
