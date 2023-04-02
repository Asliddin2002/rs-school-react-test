import React, { useRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { TextInput, SelectInput, RadioInput, FileInput, DateInput, CheckBoxInput } from './index';

type propsType = {
  validation: boolean;
};

const MockTextInput = (props: propsType) => {
  const nameRef = useRef<HTMLInputElement>(null);
  return <TextInput name={nameRef} validate={props.validation} />;
};

const MockSelectInput = (props: propsType) => {
  const continentRef = useRef<HTMLSelectElement>(null);
  return <SelectInput continent={continentRef} validate={props.validation} />;
};
const MockRadioInput = (props: propsType) => {
  const gender1Ref = useRef<HTMLInputElement>(null);
  const gender2Ref = useRef<HTMLInputElement>(null);
  return <RadioInput gender1={gender1Ref} gender2={gender2Ref} validate={props.validation} />;
};
const MockFileInput = (props: propsType) => {
  const imageRef = useRef<HTMLInputElement>(null);

  return <FileInput image={imageRef} validate={props.validation} />;
};
const MockDateInput = (props: propsType) => {
  const dateRef = useRef<HTMLInputElement>(null);

  return <DateInput date={dateRef} validate={props.validation} />;
};
const MockCheckboxInput = (props: propsType) => {
  const agreementRef = useRef<HTMLInputElement>(null);

  return <CheckBoxInput agreement={agreementRef} validate={props.validation} />;
};

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
