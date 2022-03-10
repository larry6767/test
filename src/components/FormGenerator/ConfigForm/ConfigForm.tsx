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
import { schema } from './validation'
import { useStoreon } from 'src/store'
// types
import { ConfigFormFields } from './types'
import { FormConfigActions, FormConfigCodec } from 'src/store/formConfig'
import { JSONObjectCodec } from './codecs'
import type { ConfigFormValues, ConfigFormProps } from './types'

export const ConfigForm = ({ openResultTab }: ConfigFormProps) => {
  const { dispatch } = useStoreon()
  const { name, label, placeholder } = formConfigTextarea
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<ConfigFormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  const onSubmit = (values: ConfigFormValues): void => {
    const decodedFormConfig = JSONObjectCodec.pipe(FormConfigCodec).decode(
      values.formConfig,
    )

    if (isRight(decodedFormConfig)) {
      const formatedValue = JSON.stringify(
        decodedFormConfig.right,
        undefined,
        4,
      )
      setValue(ConfigFormFields.formConfig, formatedValue)
      dispatch(FormConfigActions.set, decodedFormConfig.right)
      openResultTab()
    }
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
