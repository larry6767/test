export enum ConfigFormFields {
  formConfig = 'formConfig',
}

export type ConfigFormValues = Record<ConfigFormFields, string>

export type ConfigFormProps = {
  openResultTab: () => void
}
