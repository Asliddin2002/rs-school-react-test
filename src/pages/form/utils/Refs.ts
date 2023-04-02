import React, { useRef } from 'react';
import { inputValuetype, stateType } from '../type';
type setValutesType = React.Dispatch<React.SetStateAction<stateType>>;
type setDataType = React.Dispatch<React.SetStateAction<inputValuetype[] | null>>;

const Refs = (setValues: setValutesType, setData: setDataType) => {
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
  return {
    nameRef,
    dateRef,
    continentRef,
    gender1Ref,
    gender2Ref,
    agreementRef,
    imageRef,
    resetRef,
    handleSubmit,
  };
};

export default Refs;
