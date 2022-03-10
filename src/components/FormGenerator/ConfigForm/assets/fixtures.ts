import { ConfigFormFields } from '../types'

export const formConfigTextarea = {
  name: ConfigFormFields.formConfig,
  label: 'Form config',
  placeholder: 'Paste the json schema of the form you need',
  errorEmptyMessage: 'Must be non-empty',
  errorNotValidJson: 'Must be valid json',
  errorNotValidStructure: 'JSON structure must match schema: ',
}

export const jsonForTests = `
{
  "items": [
    {
      "name": "numberfield",
      "label": "numberfield",
      "placeholder": "numberfield",
      "type": "numberfield"
    },
    {
      "name": "textfield",
      "label": "textfield",
      "placeholder": "textfield",
      "type": "textfield"
    },
    {
      "name": "textarea",
      "label": "textarea",
      "placeholder": "textarea",
      "type": "textarea"
    },
    {
      "name": "checkbox",
      "label": "checkbox",
      "placeholder": "checkbox",
      "type": "checkbox"
    },
    {
      "name": "dateflied",
      "label": "dateflied",
      "placeholder": "dateflied",
      "type": "dateflied"
    },
    {
      "name": "radio",
      "placeholder": "radio",
      "type": "radio",
      "items": [
        {
          "id": "string",
          "label": "string",
          "checked": false
        },
        {
          "id": "string",
          "label": "string"
        }
      ]
    }
  ]
}
`
