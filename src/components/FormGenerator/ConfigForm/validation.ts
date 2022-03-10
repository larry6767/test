import * as yup from 'yup'
import * as t from 'io-ts'
import { pipe } from 'fp-ts/function'
import { fold } from 'fp-ts/Either'
import { PathReporter } from 'io-ts/PathReporter'
// local libs
import { formConfigTextarea } from './assets/fixtures'
// types
import { ConfigFormFields } from './types'
import { FormConfigCodec } from 'src/store/formConfig'
import { JSONObjectCodec } from './codecs'
import type { Type } from 'io-ts'
import type { TestContext, ValidationError } from 'yup'

const validate =
  <A, O>(codec: Type<A, O>) =>
  (input: unknown, testOptions: TestContext): boolean | ValidationError => {
    if (!input) return false
    const decoded = codec.decode(input)

    const onRight = () => true
    const onLeft = (errors: t.Errors) =>
      testOptions.createError({
        message: `${errors.length} error(s) found: ${PathReporter.report(
          decoded,
        )}`,
      })

    return pipe(
      decoded,
      fold<t.Errors, unknown, ValidationError | boolean>(onLeft, onRight),
    )
  }

export const schema = yup.object().shape({
  [ConfigFormFields.formConfig]: yup
    .string()
    .required(formConfigTextarea.errorEmptyMessage)
    .test('isValidJSON', validate(JSONObjectCodec))
    .test('isValidStructure', validate(JSONObjectCodec.pipe(FormConfigCodec))),
})
