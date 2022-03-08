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
// local libs
import { Form } from './styles'
import { formConfig } from './assets/fixtures'
import { useValidation } from './useValidation'
// types
import { ConfigFormFields } from './types'
import type { ConfigFormValues } from './types'

export const ConfigForm = () => {
  const { name, label, placeholder } = formConfig
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
        const parsedJson = JSON.parse(values.formConfig)
        const formatedValue = JSON.stringify(parsedJson, undefined, 4)
        setValue(ConfigFormFields.formConfig, formatedValue)
        resolve()
      }, 1000)
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
