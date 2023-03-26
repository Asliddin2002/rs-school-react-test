export type inputValuetype = {
  name: string;
  date: string;
  continent: string;
  gender: string;
  agreement: boolean;
  image: string;
};

export type stateType = {
  name: boolean;
  date: boolean;
  continent: boolean;
  gender: boolean;
  agreement: boolean;
  image: boolean;
  isvalid: boolean;
  data: inputValuetype[];
};
