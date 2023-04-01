import React, { useRef, useState } from 'react';

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

  const nameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const continentRef = useRef<HTMLSelectElement>(null);
  const gender1Ref = useRef<HTMLInputElement>(null);
  const gender2Ref = useRef<HTMLInputElement>(null);
  const agreementRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const resetRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.SyntheticEvent) => {
    const name = nameRef.current?.value as string;
    const date = dateRef.current?.value;
    const continent = continentRef.current?.value;
    const agreement = agreementRef.current?.checked;
    const gender = gender1Ref.current?.checked
      ? gender1Ref.current?.value
      : gender2Ref.current?.checked
      ? gender2Ref.current?.value
      : '';
    const image = imageRef.current?.files?.length
      ? (URL.createObjectURL(imageRef.current?.files[0]) as string)
      : '';

    if (name == '') {
      setValues((prev) => ({ ...prev, name: true }));
    }
    if (date == '') {
      setValues((prev) => ({ ...prev, date: true }));
    }
    if (continent == 'false') {
      setValues((prev) => ({ ...prev, continent: true }));
    }
    if (agreement == false) {
      setValues((prev) => ({ ...prev, agreement: true }));
    }
    if (gender == '') {
      setValues((prev) => ({ ...prev, gender: true }));
    }
    if (image == '') {
      setValues((prev) => ({ ...prev, image: true }));
    }
    const isValidate = !!name && !!date && !!continent && agreement && !!gender && !!image;

    event.preventDefault();
    if (isValidate) {
      setData((prev) => [
        ...(prev as inputValuetype[]),
        {
          name: name as string,
          date: date as string,
          continent: continent as string,
          agreement: agreement as boolean,
          gender: gender as string,
          image: image,
        },
      ]);

      alert('Data has been saved successfully!');
      setValues({
        name: false,
        date: false,
        continent: false,
        gender: false,
        agreement: false,
        image: false,
        isvalid: true,
      });
      resetRef.current?.click();
    }
  };

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
        <h2 className="text-center text-[28px]">Personal information</h2>
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
