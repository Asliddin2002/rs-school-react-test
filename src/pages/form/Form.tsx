import CheckBoxInput from 'components/inputs/CheckBoxInput';
import DateInput from 'components/inputs/DateInput';
import FileInput from 'components/inputs/FileInput';
import RadioInput from 'components/inputs/RadioInput';
import SelectInput from 'components/inputs/SelectInput';
import TextInput from 'components/inputs/TextInput';
import FormCardList from 'components/newFormCards/FormCardList';
import React, { Component } from 'react';

export type inputValuetype = {
  name: string;
  date: string;
  continent: string;
  gender: string;
  agreement: boolean;
  image: string;
};

export type stateType = {
  name: string;
  date: string;
  continent: string;
  gender: string;
  agreement: boolean;
  image: string;
  disable: boolean;
  data: inputValuetype[];
};

type FormInputPropsType = Record<string, undefined>;
export default class Form extends Component<FormInputPropsType, stateType> {
  constructor(props: FormInputPropsType) {
    super(props);
    this.state = {
      name: ' ',
      date: ' ',
      continent: ' ',
      gender: '',
      agreement: false,
      image: ' ',
      disable: false,
      data: [],
    };
  }

  name: React.RefObject<HTMLInputElement> = React.createRef();
  date: React.RefObject<HTMLInputElement> = React.createRef();
  continent: React.RefObject<HTMLSelectElement> = React.createRef();
  gender: React.RefObject<HTMLInputElement> = React.createRef();
  agreement: React.RefObject<HTMLInputElement> = React.createRef();
  image: React.RefObject<HTMLInputElement> = React.createRef();
  reset: React.RefObject<HTMLInputElement> = React.createRef();

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const confirmation = confirm('Do you want to save ?');
    if (confirmation) {
      this.setState({
        data: [
          ...this.state.data,
          {
            name: this.name.current?.value as string,
            date: this.date.current?.value as string,
            continent: this.continent.current?.value as string,
            agreement: this.agreement.current?.checked as boolean,
            gender: this.gender.current?.value as string,
            image: this.image.current?.files?.length
              ? (URL.createObjectURL(this.image.current?.files[0]) as string)
              : '',
          },
        ],
      });
      this.reset.current?.click();
    } else {
      this.reset.current?.click();
    }
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="container mx-auto gap-[30px] my-[50px] flex  justify-center px-4 ">
        <form
          onSubmit={this.handleSubmit}
          className="flex flex-col gap-4 w-1/2 shadow-md p-[40px] self-start "
        >
          <h2 className="text-center text-[28px]">Form</h2>
          <TextInput name={this.name} />
          <SelectInput continent={this.continent} />
          <DateInput date={this.date} />
          <RadioInput gender={this.gender} />
          <FileInput image={this.image} />
          <CheckBoxInput agreement={this.agreement} />
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
          <h2 className="text-center text-[28px]">Personal informations</h2>
          {this.state.data.length ? (
            <FormCardList data={this.state.data} />
          ) : (
            <h2 className="text-center mt-5">No informations. Create them yourself :)</h2>
          )}
        </div>
      </div>
    );
  }
}
