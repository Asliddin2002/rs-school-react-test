export type inputValuetype<T> = {
  name: string;
  date: string;
  continent: string;
  gender: string;
  agreement: boolean;
  image: T;
};

export type stateType = {
  name: boolean;
  date: boolean;
  continent: boolean;
  gender: boolean;
  agreement: boolean;
  image: boolean;
  isvalid: boolean;
};
