import React, { Component } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { TextInput, SelectInput, RadioInput, FileInput, DateInput, CheckBoxInput } from './index';

class MockTextInput extends Component<{ validation: boolean }, string> {
  name: React.RefObject<HTMLInputElement> = React.createRef();

  render() {
    return <TextInput name={this.name} validate={this.props.validation} />;
  }
}

class MockSelectInput extends Component<{ validation: boolean }, string> {
  continent: React.RefObject<HTMLSelectElement> = React.createRef();

  render() {
    return <SelectInput continent={this.continent} validate={this.props.validation} />;
  }
}

class MockRadioInput extends Component<{ validation: boolean }, string> {
  gender1: React.RefObject<HTMLInputElement> = React.createRef();
  gender2: React.RefObject<HTMLInputElement> = React.createRef();

  render() {
    return (
      <RadioInput gender1={this.gender1} gender2={this.gender2} validate={this.props.validation} />
    );
  }
}

class MockFileInput extends Component<{ validation: boolean }, string> {
  image: React.RefObject<HTMLInputElement> = React.createRef();

  render() {
    return <FileInput image={this.image} validate={this.props.validation} />;
  }
}

class MockDateInput extends Component<{ validation: boolean }, string> {
  date: React.RefObject<HTMLInputElement> = React.createRef();

  render() {
    return <DateInput date={this.date} validate={this.props.validation} />;
  }
}

class MockCheckboxInput extends Component<{ validation: boolean }, string> {
  agreement: React.RefObject<HTMLInputElement> = React.createRef();

  render() {
    return <CheckBoxInput agreement={this.agreement} validate={this.props.validation} />;
  }
}

describe('Test for text-input', () => {
  test('Test text-input value', () => {
    const validation = true;
    render(<MockTextInput validation={validation} />);
    const input = screen.getByTestId<HTMLInputElement>('text-input');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(input.value).toBe('hello');
  });
  test('Is validation exist', () => {
    const validation = true;
    render(<MockTextInput validation={validation} />);
    const div = screen.getByTestId<HTMLDivElement>('text-input-validation');
    if (validation) {
      expect(div).toBeInTheDocument();
    }
  });
});

describe('Test for select-input', () => {
  test('Test select-input value', () => {
    const validation = true;
    render(<MockSelectInput validation={validation} />);
    const input = screen.getByTestId<HTMLInputElement>('select-input');
    fireEvent.change(input, { target: { value: 'asian' } });
    expect(input.value).toBe('asian');
  });
  test('Is validation exist', () => {
    const validation = true;
    render(<MockSelectInput validation={validation} />);
    const div = screen.getByTestId<HTMLDivElement>('text-input-validation');
    if (validation) {
      expect(div).toBeInTheDocument();
    }
  });
});

describe('Test for radio-buttons', () => {
  test('Test radio button value', () => {
    const validation = true;
    render(<MockRadioInput validation={validation} />);
    const input1 = screen.getByTestId<HTMLInputElement>('radio-input1');
    const input2 = screen.getByTestId<HTMLInputElement>('radio-input2');
    fireEvent.change(input1, { target: { value: 'asian' } });
    expect(input1.value).toBe('asian');
    fireEvent.change(input2, { target: { value: 'asian' } });
    expect(input2.value).toBe('asian');
  });
  test('Is validation exist', () => {
    const validation = true;
    render(<MockRadioInput validation={validation} />);
    const div = screen.getByTestId<HTMLDivElement>('text-input-validation');
    if (validation) {
      expect(div).toBeInTheDocument();
    }
  });
});

describe('Test for file input', () => {
  test('Is validation exist', () => {
    const validation = true;
    render(<MockFileInput validation={validation} />);
    const div = screen.getByTestId<HTMLDivElement>('text-input-validation');
    if (validation) {
      expect(div).toBeInTheDocument();
    }
  });
});

describe('Test for date-input', () => {
  test('Is validation exist', () => {
    const validation = true;
    render(<MockDateInput validation={validation} />);
    const div = screen.getByTestId<HTMLDivElement>('text-input-validation');
    if (validation) {
      expect(div).toBeInTheDocument();
    }
  });
});

describe('Test for checkbox-input', () => {
  test('Test checkbox-input value', () => {
    const validation = true;
    render(<MockCheckboxInput validation={validation} />);
    const input = screen.getByTestId<HTMLInputElement>('check-input');
    fireEvent.change(input, { target: { checked: 'on' } });
    expect(input.value).toBe('on');
  });
  test('Is validation exist', () => {
    const validation = true;
    render(<MockCheckboxInput validation={validation} />);
    const div = screen.getByTestId<HTMLDivElement>('text-input-validation');
    if (validation) {
      expect(div).toBeInTheDocument();
    }
  });
});
