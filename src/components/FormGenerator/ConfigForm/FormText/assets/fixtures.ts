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
