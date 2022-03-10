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
  "formTitle": "Test form",
  "buttons": [
    {
      "value": "reset",
      "type": "reset"
    },
    {
      "value": "submit",
      "type": "submit",
      "isDisabled": true
    }
  ],
  "inputs": [
    {
      "name": "numberfield",
      "label": "numberfield",
      "placeholder": "numberfield placeholder",
      "type": "numberfield"
    },
    {
      "name": "textfield",
      "label": "textfield",
      "placeholder": "textfield placeholder",
      "type": "textfield"
    },
    {
      "name": "textarea",
      "label": "textarea",
      "placeholder": "textarea placeholder",
      "type": "textarea"
    },
    {
      "name": "checkbox",
      "label": "checkbox",
      "placeholder": "checkbox placeholder",
      "type": "checkbox"
    },
    {
      "name": "dateflied",
      "label": "dateflied",
      "placeholder": "dateflied placeholder",
      "type": "dateflied"
    },
    {
      "name": "radio",
      "placeholder": "radio",
      "type": "radio",
      "items": [
        {
          "id": "first",
          "label": "first",
          "checked": false
        },
        {
          "id": "second",
          "label": "second"
        }
      ]
    }
  ]
}
`
