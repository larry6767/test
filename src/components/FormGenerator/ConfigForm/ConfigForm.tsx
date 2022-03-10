import { useForm } from 'react-hook-form'
import {
  FormLabel,
  FormControl,
  Textarea,
  Button,
  ButtonGroup,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { isRight } from 'fp-ts/lib/These'
// local libs
import { FormText } from './FormText'
import { Form, Alert } from 'src/components/generic'
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
    reset,
    formState: { isDirty },
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

  const resetFormGenerator = () => {
    reset()
    dispatch(FormConfigActions.reset)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} maxWidth="100%">
      <FormText />
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
          <Alert status="error">{errors[name]?.message}</Alert>
        ) : null}
      </FormControl>
      <ButtonGroup gap={2}>
        <Button
          mt={4}
          ml="auto"
          colorScheme="teal"
          isLoading={isSubmitting}
          type="reset"
          isDisabled={!isDirty}
          onClick={resetFormGenerator}
        >
          Reset
        </Button>
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
      </ButtonGroup>
    </Form>
  )
}
