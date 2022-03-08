import { ConfigFormFields } from '../types'

export const formConfigTextarea = {
  name: ConfigFormFields.formConfig,
  label: 'Form config',
  placeholder: 'Paste the json schema of the form you need',
  errorEmptyMessage: 'Must be non-empty',
  errorNotValidJson: 'Must be valid json',
  errorNotValidStructure: 'JSON structure must match schema: ',
}
