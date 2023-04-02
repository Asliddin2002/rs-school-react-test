import React, { useState } from 'react';

import FormCardList from 'components/newFormCards/FormCardList';
import {
  CheckBoxInput,
  DateInput,
  FileInput,
  RadioInput,
  SelectInput,
  TextInput,
} from '../../components/inputs';
import { stateType, inputValuetype } from './type';
import Refs from './utils/Refs';

const Form = () => {
  const [values, setValues] = useState<stateType>({
    name: false,
    date: false,
    continent: false,
    gender: false,
    agreement: false,
    image: false,
    isvalid: true,
  });
  const [data, setData] = useState<inputValuetype[] | null>([]);

  const {
    nameRef,
    dateRef,
    continentRef,
    gender1Ref,
    gender2Ref,
    agreementRef,
    imageRef,
    resetRef,
    handleSubmit,
  } = Refs(setValues, setData);

  return (
    <div className="container mx-auto gap-[30px] my-[50px] flex flex-col lg:flex-row items-center lg:items-baseline justify-center px-4 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full lg:w-1/2  shadow-md p-[40px] self-start "
      >
        <h2 className="text-center text-[28px]">Form</h2>
        <TextInput name={nameRef} validate={values.name} />
        <SelectInput continent={continentRef} validate={values.continent} />
        <DateInput date={dateRef} validate={values.date} />
        <RadioInput gender1={gender1Ref} gender2={gender2Ref} validate={values.gender} />
        <FileInput image={imageRef} validate={values.image} />
        <CheckBoxInput agreement={agreementRef} validate={values.agreement} />
        <div className="reset relative w-full">
          <input className="absolute -z-10 left-[50%]" type="reset" ref={resetRef} />
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
        <h2 data-testid="infos-title" className="text-center text-[28px]">Personal information</h2>
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
