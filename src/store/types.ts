export interface State {
  userId: string;
  name: string;
  address: string;
  language: string;
  skills: ISkills[];
  portfolio: IPortfolio[];
  quotes: string[];
  availability: string;
  environment: string;
}

export interface ISkills {
  id: number;
  name: string;
  years: number;
}

export interface IPortfolio {
  id: number;
  text: string;
}
