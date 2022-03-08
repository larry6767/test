import { ConfigFormFields } from '../types'

export const formConfig = {
  name: ConfigFormFields.formConfig,
  label: 'Form config',
  placeholder: 'Paste the json schema of the form you need',
  errorEmptyMessage: 'Must be non-empty',
  errorNotValidJson: 'Must be valid json',
}
