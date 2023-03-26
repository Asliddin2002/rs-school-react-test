import React, { Component } from 'react';

import FormCardList from 'components/newFormCards/FormCardList';
import {
  CheckBoxInput,
  DateInput,
  FileInput,
  RadioInput,
  SelectInput,
  TextInput,
} from '../../components/inputs';
import { stateType } from './type';

type FormInputPropsType = Record<string, undefined>;
export default class Form extends Component<FormInputPropsType, stateType> {
  constructor(props: FormInputPropsType) {
    super(props);
    this.state = {
      name: false,
      date: false,
      continent: false,
      gender: false,
      agreement: false,
      image: false,
      isvalid: true,
      data: [],
    };
  }

  name: React.RefObject<HTMLInputElement> = React.createRef();
  date: React.RefObject<HTMLInputElement> = React.createRef();
  continent: React.RefObject<HTMLSelectElement> = React.createRef();
  gender1: React.RefObject<HTMLInputElement> = React.createRef();
  gender2: React.RefObject<HTMLInputElement> = React.createRef();
  agreement: React.RefObject<HTMLInputElement> = React.createRef();
  image: React.RefObject<HTMLInputElement> = React.createRef();
  reset: React.RefObject<HTMLInputElement> = React.createRef();

  handleSubmit = (event: React.SyntheticEvent) => {
    const name = this.name.current?.value;
    const date = this.date.current?.value;
    const continent = this.continent.current?.value;
    const agreement = this.agreement.current?.checked;
    const gender = this.gender1.current?.checked
      ? this.gender1.current?.value
      : this.gender2.current?.checked
      ? this.gender2.current?.value
      : '';
    const image = this.image.current?.files?.length
      ? (URL.createObjectURL(this.image.current?.files[0]) as string)
      : '';

    if (name == '') {
      this.setState({ name: true });
    }
    if (date == '') {
      this.setState({ date: true });
    }
    if (continent == 'false') {
      this.setState({ continent: true });
    }
    if (agreement == false) {
      this.setState({ agreement: true });
    }
    if (gender == '') {
      this.setState({ gender: true });
    }
    if (image == '') {
      this.setState({ image: true });
    }

    const isValidate = !!name && !!date && !!continent && agreement && !!gender && !!image;

    event.preventDefault();
    if (isValidate) {
      this.setState({
        data: [
          ...this.state.data,
          {
            name: name as string,
            date: date as string,
            continent: continent as string,
            agreement: agreement as boolean,
            gender: gender as string,
            image: image,
          },
        ],
      });
      alert('Data has been saved successfully!');
      this.setState({
        name: false,
        date: false,
        continent: false,
        gender: false,
        agreement: false,
        image: false,
      });
      this.reset.current?.click();
    }
  };

  render() {
    return (
      <div className="container mx-auto gap-[30px] my-[50px] flex flex-col lg:flex-row items-center lg:items-baseline justify-center px-4 ">
        <form
          onSubmit={this.handleSubmit}
          className="flex flex-col gap-4 w-full lg:w-1/2  shadow-md p-[40px] self-start "
        >
          <h2 className="text-center text-[28px]">Form</h2>
          <TextInput name={this.name} validate={this.state.name} />
          <SelectInput continent={this.continent} validate={this.state.continent} />
          <DateInput date={this.date} validate={this.state.date} />
          <RadioInput gender1={this.gender1} gender2={this.gender2} validate={this.state.gender} />
          <FileInput image={this.image} validate={this.state.image} />
          <CheckBoxInput agreement={this.agreement} validate={this.state.agreement} />
          <div className="reset relative w-full">
            <input className="absolute -z-10 left-[50%]" type="reset" ref={this.reset} />
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
          {this.state.data.length ? (
            <FormCardList data={this.state.data} />
          ) : (
            <h2 className="text-center mt-5">No information. Create them yourself :)</h2>
          )}
        </div>
      </div>
    );
  }
}
