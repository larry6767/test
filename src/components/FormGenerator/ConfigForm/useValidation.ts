import * as yup from 'yup'
import { isLeft } from 'fp-ts/lib/These'
// local libs
import { formConfigTextarea } from './assets/fixtures'
// types
import { ConfigFormFields } from './types'
import { FormConfigCodec } from 'src/store/formConfig'

const isValidJSON = (v: string): boolean => {
  try {
    JSON.parse(v)
  } catch (e) {
    return false
  }
  return true
}

const isValidStructure = (v: string): boolean => {
  let formConfig
  try {
    formConfig = JSON.parse(v)
  } catch (e) {
    return false
  }

  const decodedFormConfig = FormConfigCodec.decode(formConfig)

  if (isLeft(decodedFormConfig)) {
    return false
  }

  return true
}

export const useValidation = () => {
  const schema = yup.object().shape({
    [ConfigFormFields.formConfig]: yup
      .string()
      .required(formConfigTextarea.errorEmptyMessage)
      .test(
        'isValidJSON',
        formConfigTextarea.errorNotValidJson,
        (v?: string): boolean => (v ? isValidJSON(v) : true),
      )
      .test(
        'isValidStructure',
        `${formConfigTextarea.errorNotValidStructure} ${FormConfigCodec.name}`,
        (v?: string): boolean => (v ? isValidStructure(v) : true),
      ),
  })

  return schema
}
