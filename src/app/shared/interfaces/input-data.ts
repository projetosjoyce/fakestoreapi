import { EInputAutoComplete, EInputType } from "../enums";

export interface IInputValidator {
  required?: boolean;
  email?: boolean;
  max?: number;
  maxLength?: number;
  min?: number;
  minLength?: number;
}

export interface IInputData {
  label: string;
  icon?: string;
  key: string;
  type: EInputType;
  defaultValue?: any;
  autocomplete?: EInputAutoComplete;
  validators?: IInputValidator;
}
