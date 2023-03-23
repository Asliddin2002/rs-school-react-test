import CheckBoxInput from 'components/inputs/CheckBoxInput';
import DateInput from 'components/inputs/DateInput';
import FileInput from 'components/inputs/FileInput';
import RadioInput from 'components/inputs/RadioInput';
import SelectInput from 'components/inputs/SelectInput';
import TextInput from 'components/inputs/TextInput';
import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div className="container mx-auto my-[50px] flex flex-col items-center justify-center px-4">
        Form
        <form className="flex flex-col gap-5 w-1/2">
          <TextInput name="House" />
          <SelectInput country="uz" />
          <DateInput date="March" />
          <RadioInput switcher="data" />
          <FileInput file="file" />
          <CheckBoxInput data="data" />
        </form>
      </div>
    );
  }
}
