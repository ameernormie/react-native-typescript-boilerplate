/**
 * App form values interface
 */
export interface IAppFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

/**
 * Enum type for input field type
 */
export enum FieldType {
  text = 'text',
  password = 'password',
}
