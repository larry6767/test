import { useForm } from 'react-hook-form'
import {
  FormLabel,
  FormControl,
  Textarea,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { isRight } from 'fp-ts/lib/These'
// local libs
import { Form } from './styles'
import { formConfigTextarea } from './assets/fixtures'
import { useValidation } from './useValidation'
import { useStoreon } from 'src/store'
// types
import { ConfigFormFields } from './types'
import type { ConfigFormValues } from './types'
import { FormConfigActions, FormConfigCodec } from 'src/store/formConfig'

export const ConfigForm = () => {
  const { dispatch } = useStoreon()
  const { name, label, placeholder } = formConfigTextarea
  const schema = useValidation()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<ConfigFormValues>({
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  })

  function onSubmit(values: ConfigFormValues): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // After validation, we can be sure that the data is correct.
        // TODO: get rid of duplicate field value parsing (see ./useValidation)
        let formConfig
        try {
          formConfig = JSON.parse(values.formConfig)
        } catch (e) {
          return false
        }
        const decodedFormConfig = FormConfigCodec.decode(formConfig)

        if (isRight(decodedFormConfig)) {
          const formatedValue = JSON.stringify(
            decodedFormConfig.right,
            undefined,
            4,
          )
          setValue(ConfigFormFields.formConfig, formatedValue)
          dispatch(FormConfigActions.set, decodedFormConfig.right)
          resolve()
        }
      }, 1000) // emulate the delay
    })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Textarea
          rows={10}
          mb={5}
          id={name}
          placeholder={placeholder}
          {...register(name)}
        />
        {errors[name] ? (
          <Alert status="error">
            <AlertIcon />
            {errors[name]?.message}
          </Alert>
        ) : null}
      </FormControl>
      <Button
        mt={4}
        ml="auto"
        colorScheme="teal"
        isLoading={isSubmitting}
        isDisabled={Boolean(errors[name])}
        type="submit"
      >
        Apply
      </Button>
    </Form>
  )
}
