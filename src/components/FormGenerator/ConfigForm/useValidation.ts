import * as yup from 'yup'
// local libs
import { formConfig } from './assets/fixtures'
// types
import { ConfigFormFields } from './types'

export const acceptedFileFormats: Array<string> = [
  'application/pdf',
  'application/msword',
]

const isValidJSON = (v: string): boolean => {
  try {
    JSON.parse(v)
  } catch (e) {
    return false
  }
  return true
}

export const useValidation = () => {
  const schema = yup.object().shape({
    [ConfigFormFields.formConfig]: yup
      .string()
      .required(formConfig.errorEmptyMessage)
      .test('isUrlValid', formConfig.errorNotValidJson, (v?: string): boolean =>
        v ? isValidJSON(v) : true,
      ),
  })

  return schema
}
